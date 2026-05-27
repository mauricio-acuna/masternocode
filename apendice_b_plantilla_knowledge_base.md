# Apéndice B: Plantilla de knowledge base para agentes

## Para qué sirve

Una knowledge base para agentes no es un repositorio de documentos sueltos. Es una estructura de trabajo para que humanos y agentes entiendan el dominio, reutilicen patrones y conviertan conocimiento operativo en comportamiento verificable.

Esta plantilla está pensada para integraciones, automatizaciones y sistemas internos donde hay APIs, vendors, reglas, errores y operación.

## Estructura base

```text
knowledge-base/
├─ README.md
├─ context/
│  ├─ negocio.md
│  ├─ glosario.md
│  └─ decisiones.md
├─ destino/
│  ├─ api.md
│  ├─ webhooks.md
│  ├─ errores.md
│  └─ ejemplos-payloads.md
├─ vendors/
│  ├─ vendor-a/
│  │  ├─ README.md
│  │  ├─ api.md
│  │  ├─ mapping.md
│  │  ├─ errores.md
│  │  └─ notas.md
│  └─ vendor-b/
├─ erps/
│  ├─ erp-x.md
│  ├─ erp-y.md
│  └─ erp-z.md
├─ reglas/
│  ├─ stock.md
│  ├─ productos.md
│  ├─ variantes.md
│  └─ imagenes.md
├─ operacion/
│  ├─ runbook.md
│  ├─ observabilidad.md
│  ├─ reintentos.md
│  └─ permisos.md
└─ prompts/
   ├─ onboard-vendor.md
   ├─ manage-vendors.md
   └─ sync-agent.md
```

## README.md

El archivo principal debe orientar al lector humano y al agente.

```markdown
# Knowledge base del sistema

## Objetivo

Explicar qué proceso opera este sistema, qué fuentes integra, qué destino actualiza y qué reglas deben respetarse.

## Alcance

- Incluye:
- No incluye:

## Sistemas involucrados

| Sistema | Rol | Dueño | Documentación |
|---|---|---|---|
| Vendor A | Fuente | Operación | `vendors/vendor-a/api.md` |
| ERP-X | Patrón origen | Tecnología | `erps/erp-x.md` |
| Destino | Plataforma final | Negocio | `destino/api.md` |

## Reglas de oro

1. No inventar mappings.
2. No sobrescribir stock sin validar fuente.
3. No reintentar errores no idempotentes sin revisión.
4. Registrar toda excepción repetida.

## Última revisión

Fecha:
Responsable:
Cambios principales:
```

## Contexto de negocio

`context/negocio.md` debe explicar por qué existe el sistema.

| Sección | Pregunta |
|---|---|
| Proceso | ¿Qué tarea de negocio sostiene? |
| Impacto | ¿Qué pasa si falla? |
| Usuarios | ¿Quién lo opera y quién consume resultados? |
| Frecuencia | ¿Cada cuánto corre o se actualiza? |
| Riesgos | ¿Qué errores son críticos? |

## Glosario

`context/glosario.md` evita que humanos y agentes usen palabras iguales para cosas distintas.

```markdown
| Término | Definición | Ejemplo | Nota |
|---|---|---|---|
| Producto | Ítem vendible base | Camiseta modelo X | Puede tener variantes |
| Variante | Opción concreta de producto | Talle M, color negro | Afecta stock |
| Vendor | Proveedor de origen | vendor-a | Puede compartir ERP |
| Flow | Proceso sincronizable | inventory, catalog | Se activa por vendor |
```

## Decisiones

`context/decisiones.md` registra criterios, no sólo resultados.

```markdown
## DEC-001 - Usar Markdown como formato base

Fecha:
Estado: aceptada

### Contexto

Necesitamos documentación legible por humanos y parseable por agentes.

### Decisión

Mantener knowledge base en Markdown versionado.

### Consecuencias

- Ventaja:
- Costo:
- Riesgo:
```

## Plantilla por vendor

Cada vendor debería tener una carpeta propia.

```markdown
# Vendor: nombre

## Identidad

| Campo | Valor |
|---|---|
| Nombre operativo | |
| ERP asociado | |
| Estado | activo / pausado / prueba |
| Responsable | |

## APIs

| Recurso | Endpoint | Método | Auth | Notas |
|---|---|---|---|---|
| Productos | | | | |
| Stock | | | | |
| Imágenes | | | | |

## Mapping principal

| Campo origen | Campo destino | Regla | Ejemplo | Riesgo |
|---|---|---|---|---|
| | | | | |

## Casos raros

| Caso | Cómo detectarlo | Acción |
|---|---|---|
| | | |

## Errores conocidos

| Error | Causa probable | Acción | Actualizado |
|---|---|---|---|
| | | | |
```

## Plantilla por ERP

La capa por ERP permite reutilizar patrones.

```markdown
# ERP-X

## Vendors asociados

- vendor-a
- vendor-b

## Patrones compartidos

| Patrón | Aplica a | Regla |
|---|---|---|
| Paginación | Productos | |
| Stock | Inventario | |
| Imágenes | Media | |

## Diferencias por vendor

| Vendor | Diferencia | Impacto |
|---|---|---|
| | | |

## Bugs recurrentes

| Bug | Vendors afectados | Solución |
|---|---|---|
| | | |
```

## Operación

`operacion/runbook.md` debe explicar qué hacer, no sólo qué existe.

| Situación | Qué revisar | Acción segura | Escalar si |
|---|---|---|---|
| Vendor con errores | Vista de errores, logs, última corrida | Reintentar flow afectado | El error se repite |
| Memoria alta | Métricas de RAM y volumen | Reducir chunk o pausar | Se acerca al límite |
| Productos faltantes | Conteo esperado vs procesado | Revisar mapping | Hay riesgo de duplicado |

## Observabilidad mínima

`operacion/observabilidad.md` debe definir señales y umbrales.

| Métrica | Pregunta | Umbral inicial | Acción |
|---|---|---|---|
| Duración de corrida | ¿Está tardando más de lo normal? | | |
| Errores por vendor | ¿Qué fuente falla? | | |
| Memoria pico | ¿La instancia tiene margen? | | |
| Productos procesados | ¿El volumen coincide? | | |
| Reintentos | ¿Hay falla persistente? | | |

## Prompts versionados

Los prompts deben estar conectados a la base.

```markdown
# Prompt: onboard-vendor

## Objetivo

Guiar el alta de un vendor y actualizar knowledge base/configuración.

## Debe preguntar

1. Nombre del vendor.
2. ERP usado.
3. Endpoints disponibles.
4. Flows requeridos.
5. Excepciones conocidas.

## Debe validar

- Si el ERP ya existe.
- Si el vendor ya existe.
- Si los flows son válidos.
- Si faltan campos críticos.

## No debe hacer

- Inventar mappings.
- Guardar credenciales en texto libre.
- Activar flows críticos sin confirmación.
```

## Reglas de mantenimiento

1. Toda regla repetida debe pasar de conversación a Markdown.
2. Todo error recurrente debe vincularse a vendor, ERP o destino.
3. Todo cambio operativo debe tener fecha y responsable.
4. Todo prompt que afecte operación debe versionarse.
5. Todo dato sensible debe quedar fuera de prompts y ejemplos.

## Checklist de calidad

| Criterio | Sí/No |
|---|---|
| La base puede entenderla una persona nueva |
| Un agente puede encontrar APIs, vendors y reglas |
| Los errores recurrentes están documentados |
| Los prompts tienen límites explícitos |
| Las credenciales no aparecen en texto plano |
| Las decisiones importantes tienen fecha |
| Las reglas de negocio no están mezcladas con código |
| Existe runbook para fallos comunes |
