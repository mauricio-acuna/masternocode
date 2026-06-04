# Guia de exportacion - version saneada

Version de trabajo: `v0.1-hibrida-saneada`
Fecha de preparacion: 2026-06-04

## Archivos base

| Uso | Archivo |
|---|---|
| Manuscrito completo | `10_PUBLICACION/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA_COMPLETO.md` |
| Capitulos separados | `10_PUBLICACION/v0_1_hibrida_saneada/` |
| HTML generado | `10_PUBLICACION/exportados/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA.html` |
| Exportador local | `10_PUBLICACION/exportar_version_saneada.mjs` |

## Generar HTML

Desde la raiz del repositorio:

```powershell
node 10_PUBLICACION/exportar_version_saneada.mjs
```

El resultado queda en:

```text
10_PUBLICACION/exportados/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA.html
```

## Generar PDF sin herramientas adicionales

1. Abrir el HTML generado en el navegador.
2. Usar imprimir.
3. Elegir destino `Guardar como PDF`.
4. Revisar saltos de pagina, tablas largas y enlaces internos.

## Generar PDF/DOCX con Pandoc

Si se instala Pandoc, usar como base:

```powershell
pandoc 10_PUBLICACION/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA_COMPLETO.md -o 10_PUBLICACION/exportados/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA.docx
pandoc 10_PUBLICACION/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA_COMPLETO.md -o 10_PUBLICACION/exportados/CODE_NO_CODE_V0_1_HIBRIDA_SANEADA.pdf
```

## Pendientes antes de publicar

| Pendiente | Decision requerida |
|---|---|
| Autor / titular | Completar portada y creditos |
| Licencia | Elegir una opcion y reemplazar el aviso de uso interno |
| Permisos de marcas | Confirmar si se publica solo la version saneada |
| Cifras exactas | Decidir si se mantienen como evidencia de caso |
| Revision final | Lectura completa del HTML o PDF exportado |

## Criterio recomendado

Mientras autor, licencia y permisos no esten cerrados, usar el HTML y cualquier PDF derivado solo como material de revision externa controlada.
