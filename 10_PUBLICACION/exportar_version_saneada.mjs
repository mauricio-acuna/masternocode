import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(
  scriptDir,
  "CODE_NO_CODE_V0_1_HIBRIDA_SANEADA_COMPLETO.md",
);
const outputDir = path.join(scriptDir, "exportados");
const outputPath = path.join(
  outputDir,
  "CODE_NO_CODE_V0_1_HIBRIDA_SANEADA.html",
);

const markdown = fs.readFileSync(sourcePath, "utf8").replace(/^\uFEFF/, "");
const html = renderMarkdownDocument(markdown);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, html, "utf8");

console.log(`HTML exportado: ${outputPath}`);

function renderMarkdownDocument(markdownText) {
  const lines = markdownText.replace(/\r\n/g, "\n").split("\n");
  const blocks = [];
  const headings = [];
  const usedSlugs = new Map();
  let paragraph = [];
  let listType = null;
  let inCode = false;
  let codeLanguage = "";
  let codeLines = [];

  const closeParagraph = () => {
    if (paragraph.length === 0) {
      return;
    }
    blocks.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const closeList = () => {
    if (!listType) {
      return;
    }
    blocks.push(`</${listType}>`);
    listType = null;
  };

  const closeCode = () => {
    blocks.push(
      `<pre><code${codeLanguage ? ` class="language-${escapeAttr(codeLanguage)}"` : ""}>${escapeHtml(
        codeLines.join("\n"),
      )}</code></pre>`,
    );
    inCode = false;
    codeLanguage = "";
    codeLines = [];
  };

  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (inCode) {
      if (/^```/.test(trimmed)) {
        closeCode();
      } else {
        codeLines.push(rawLine);
      }
      continue;
    }

    if (/^```/.test(trimmed)) {
      closeParagraph();
      closeList();
      inCode = true;
      codeLanguage = trimmed.replace(/^```/, "").trim();
      continue;
    }

    if (trimmed === "") {
      closeParagraph();
      closeList();
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      closeParagraph();
      closeList();
      blocks.push("<hr>");
      continue;
    }

    const heading = /^(#{1,6})\s+(.+)$/.exec(line);
    if (heading) {
      closeParagraph();
      closeList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = uniqueSlug(text, usedSlugs);
      headings.push({ level, text: stripMarkdown(text), id });
      blocks.push(`<h${level} id="${escapeAttr(id)}">${renderInline(text)}</h${level}>`);
      continue;
    }

    if (isTableStart(lines, i)) {
      closeParagraph();
      closeList();
      const tableLines = [];
      while (i < lines.length && lines[i].trim() !== "" && lines[i].includes("|")) {
        tableLines.push(lines[i].trim());
        i += 1;
      }
      i -= 1;
      blocks.push(renderTable(tableLines));
      continue;
    }

    const unordered = /^[-*]\s+(.+)$/.exec(trimmed);
    if (unordered) {
      closeParagraph();
      if (listType && listType !== "ul") {
        closeList();
      }
      if (!listType) {
        listType = "ul";
        blocks.push("<ul>");
      }
      blocks.push(`<li>${renderInline(unordered[1])}</li>`);
      continue;
    }

    const ordered = /^\d+\.\s+(.+)$/.exec(trimmed);
    if (ordered) {
      closeParagraph();
      if (listType && listType !== "ol") {
        closeList();
      }
      if (!listType) {
        listType = "ol";
        blocks.push("<ol>");
      }
      blocks.push(`<li>${renderInline(ordered[1])}</li>`);
      continue;
    }

    closeList();
    paragraph.push(trimmed);
  }

  if (inCode) {
    closeCode();
  }
  closeParagraph();
  closeList();

  return buildHtmlPage(blocks.join("\n"), headings);
}

function isTableStart(lines, index) {
  const current = lines[index] ?? "";
  const next = lines[index + 1] ?? "";
  if (!current.includes("|") || !next.includes("|")) {
    return false;
  }
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(next);
}

function renderTable(tableLines) {
  const rows = tableLines
    .filter((line, index) => index !== 1)
    .map((line) => splitTableCells(line));
  const header = rows.shift() ?? [];
  const body = rows;

  const headerHtml = header
    .map((cell) => `<th>${renderInline(cell)}</th>`)
    .join("");
  const bodyHtml = body
    .map(
      (row) =>
        `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`,
    )
    .join("\n");

  return `<table>
<thead><tr>${headerHtml}</tr></thead>
<tbody>
${bodyHtml}
</tbody>
</table>`;
}

function splitTableCells(line) {
  return line
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

function renderInline(text) {
  const codeTokens = [];
  let output = text.replace(/`([^`]+)`/g, (_, code) => {
    const token = `\u0000CODE${codeTokens.length}\u0000`;
    codeTokens.push(`<code>${escapeHtml(code)}</code>`);
    return token;
  });

  output = escapeHtml(output);
  output = output.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  output = output.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    return `<a href="${escapeAttr(href)}">${label}</a>`;
  });

  codeTokens.forEach((html, index) => {
    output = output.replace(`\u0000CODE${index}\u0000`, html);
  });

  return output;
}

function buildHtmlPage(content, headings) {
  const tocItems = headings
    .filter((heading) => heading.level <= 2)
    .map(
      (heading) =>
        `<li class="toc-level-${heading.level}"><a href="#${escapeAttr(
          heading.id,
        )}">${escapeHtml(heading.text)}</a></li>`,
    )
    .join("\n");

  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Code / No-Code - v0.1 hibrida saneada</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #171717;
      --muted: #5f6368;
      --line: #d9d9d9;
      --soft: #f6f4ef;
      --accent: #176a63;
      --accent-2: #8c3b2f;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      color: var(--ink);
      background: #fffdf8;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 18px;
      line-height: 1.65;
    }

    .page {
      width: min(100%, 920px);
      margin: 0 auto;
      padding: 48px 28px 72px;
    }

    .cover {
      border-bottom: 1px solid var(--line);
      margin-bottom: 36px;
      padding-bottom: 28px;
    }

    .cover p {
      color: var(--muted);
      font-family: Arial, sans-serif;
      font-size: 14px;
      letter-spacing: 0;
      margin: 4px 0;
    }

    .toc {
      background: var(--soft);
      border: 1px solid var(--line);
      margin: 0 0 42px;
      padding: 22px 24px;
    }

    .toc h2 {
      border: 0;
      margin-top: 0;
      padding: 0;
    }

    .toc ol {
      columns: 2;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .toc li {
      break-inside: avoid;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.35;
      margin: 0 0 8px;
    }

    .toc a {
      color: var(--accent);
      text-decoration: none;
    }

    .toc-level-1 {
      font-weight: 700;
      margin-top: 12px;
    }

    .toc-level-2 {
      padding-left: 14px;
    }

    h1,
    h2,
    h3,
    h4 {
      line-height: 1.2;
    }

    h1 {
      color: var(--accent);
      font-size: 2.35rem;
      margin: 52px 0 18px;
    }

    main > h1:not(:first-child) {
      border-top: 1px solid var(--line);
      padding-top: 34px;
    }

    h2 {
      border-bottom: 1px solid var(--line);
      font-size: 1.55rem;
      margin: 38px 0 14px;
      padding-bottom: 6px;
    }

    h3 {
      color: var(--accent-2);
      font-size: 1.18rem;
      margin: 26px 0 10px;
    }

    h4 {
      font-size: 1rem;
      margin: 22px 0 8px;
      text-transform: uppercase;
    }

    p,
    li {
      overflow-wrap: anywhere;
    }

    a {
      color: var(--accent);
    }

    code {
      background: #f0eee8;
      border: 1px solid #e2ded5;
      border-radius: 4px;
      font-family: Consolas, "Liberation Mono", monospace;
      font-size: 0.9em;
      padding: 0.08em 0.28em;
    }

    pre {
      background: #222;
      color: #f7f2e8;
      overflow-x: auto;
      padding: 18px;
      white-space: pre-wrap;
    }

    pre code {
      background: transparent;
      border: 0;
      color: inherit;
      padding: 0;
    }

    table {
      border-collapse: collapse;
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.4;
      margin: 20px 0 28px;
      width: 100%;
    }

    th,
    td {
      border: 1px solid var(--line);
      padding: 8px 10px;
      text-align: left;
      vertical-align: top;
    }

    th {
      background: var(--soft);
      font-weight: 700;
    }

    hr {
      border: 0;
      border-top: 1px solid var(--line);
      margin: 34px 0;
    }

    @media (max-width: 720px) {
      body {
        font-size: 16px;
      }

      .page {
        padding: 28px 18px 52px;
      }

      .toc ol {
        columns: 1;
      }

      table {
        display: block;
        overflow-x: auto;
      }
    }

    @media print {
      @page {
        margin: 18mm 16mm;
      }

      body {
        background: white;
        font-size: 11.5pt;
      }

      .page {
        padding: 0;
        width: 100%;
      }

      .toc {
        break-after: page;
      }

      main > h1:not(:first-child) {
        break-before: page;
        border-top: 0;
        padding-top: 0;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="cover">
      <p>Version HTML de revision externa</p>
      <p>Fuente: <code>10_PUBLICACION/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA_COMPLETO.md</code></p>
      <p>Nota: imprimir desde el navegador permite obtener PDF mientras no haya Pandoc/LibreOffice instalado.</p>
    </header>
    <nav class="toc" aria-label="Indice">
      <h2>Indice</h2>
      <ol>
${tocItems}
      </ol>
    </nav>
    <main>
${content}
    </main>
  </div>
</body>
</html>`;
}

function stripMarkdown(text) {
  return text.replace(/[`*_]+/g, "");
}

function uniqueSlug(text, usedSlugs) {
  const base =
    stripMarkdown(text)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "seccion";
  const count = usedSlugs.get(base) ?? 0;
  usedSlugs.set(base, count + 1);
  return count === 0 ? base : `${base}-${count + 1}`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttr(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}
