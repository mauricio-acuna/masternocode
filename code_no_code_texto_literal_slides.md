# Texto literal de las 16 diapositivas — “¿Code / No-Code?”

Extracción enfocada sólo en el texto visible de las diapositivas. Se omiten análisis, interpretaciones, programa de contenidos y descripciones visuales.

> Nota: transcripción basada en lectura visual de las imágenes aportadas. En elementos muy pequeños o parcialmente cubiertos, conviene validación humana si se requiere precisión editorial absoluta.

---

## Diapositiva 1

MAX PLANCK DEV × MIA — MAKERS IA

# ¿Code / No-Code?

Cómo la IA está rediseñando el trabajo del developer — y por qué dejamos de aceptar cajas negras, suscripciones caras y pesadillas de infraestructura.

maxplanck.dev — Charla técnica — 2026

---

## Diapositiva 2

QUIÉNES SOMOS

# Brian Hume

Max Planck Dev — desarrollo con IA, hombro a hombro.

Desarrollamos software a medida, integraciones y agentes de IA para empresas que no se conforman con cajas negras. Acompañamos al cliente desde el MVP hasta la operación de plataforma — seguridad, performance, costos y trazabilidad incluidos.

Desarrollo a medida

Integraciones

Agentes de IA

Automatización

Buy vs. Build

Max Planck.Dev

EMAIL  
brian@maxplanck.dev

LINKEDIN  
linkedin.com/in/hume-brian

SITIO  
maxplanck.dev

SEDE  
112 Capitol Trail, Newark, DE

---

## Diapositiva 3

• TESIS

En el último año, la IA cambió cómo encaramos los problemas.

Ya no aceptamos cajas negras, suscripciones caras ni pesadillas de infraestructura.

Hoy construimos soluciones transparentes, observables y baratas de operar — que son nuestras.

---

## Diapositiva 4

• CASO REAL — DROPSHIPPING

04

EL RETO DEL CLIENTE

# Sincronizar 8.000 productos desde cinco proveedores con ERPs propios hacia Shopify, vía Modern Dropship.

El retailer no tenía stock propio. Los proveedores tampoco tenían cuenta en Modern Dropship. Nuestro trabajo: hacer que sus APIs custom se comporten como si la tuvieran.

ORIGEN

5 proveedores  
3 ERPs distintos

Cada uno con su API custom, su esquema y sus rarezas.

LA PIEZA QUE FALTABA

Capa de sincronización

Traducción, normalización, manejo de errores y observabilidad — el problema que vinimos a resolver.

DESTINO

Modern Dropship  
→ Shopify

Catálogo, variantes, stock e imágenes, listos para el retailer.

---

## Diapositiva 5

• ENFOQUE 1 — ETL TRADICIONAL

05 / 16

LO QUE PROBARON ANTES QUE NOSOTROS

# Contrataron un vendor de ETL. La promesa: extract, transform, load. Simple en teoría.

CAJA NEGRA

ACCESO RESTRINGIDO

→ El cliente no podía ver dentro de los flujos.

→ No podía ajustarlos ni mantenerlos.

→ Suscripción cara, dependencia total del vendor.

→ Para depurar, había que llamar a un especialista en Italia.

Tercerizar a una caja negra resuelve el problema de hoy y crea la dependencia de mañana.

LECCIÓN APRENDIDA

---

## Diapositiva 6

• ENFOQUE 2 — n8n

EL PUNTO MEDIO QUE PROMETÍA MUCHO

# Flujos visuales, cloud-hosted, mantenibles por nosotros. Sin caja negra. Sin vendor lock-in. Construimos 8.000 productos de cinco proveedores.

Y se cayó.

Y se cayó de nuevo.

Y se cayó otra vez.

---

## Diapositiva 7

• ENFOQUE 2 — DIAGNÓSTICO

07 / 16

POR QUÉ N8N NO AGUANTÓ

# Probamos todo. A cierto volumen de datos, simplemente no escala.

01 Paginar por chunks

02 Su feature nueva de data tables

03 Correrlo en su cloud

04 Dockerizado en máquinas locales

05 Self-hosting en instancias más grandes

Cuando se caía, no había logs útiles. Rebooteaba en silencio y entrábamos cinco minutos después sin saber qué pasó.

OPACIDAD TOTAL EN EL MOMENTO QUE MÁS IMPORTA

---

## Diapositiva 8

• EL TRABAJO QUE NADIE QUIERE HACER

08 / 16

ANTES DE PIVOTAR A IA — LA BASE

# Organizamos toda la documentación. Esto fue el arma secreta.

```text
# estructura del knowledge base
knowledge-base/
├─ modern-dropship/
│  ├─ supplier-api.md
│  └─ webhooks.md
├─ vendors/
│  ├─ vendor-a/ → ERP-X
│  ├─ vendor-b/ → ERP-X
│  ├─ vendor-c/ → ERP-Y
│  ├─ vendor-d/ → ERP-Y
│  └─ vendor-e/ → ERP-Z
├─ erps/
│  ├─ erp-x.md
│  ├─ erp-y.md
│  └─ erp-z.md
└─ cross-vendor-notes.md ← saber tribal
```

01 Docs de cada API — proveedores y Modern Dropship, en un solo lugar.

02 Mapeo vendor → ERP — quién usa qué, y por qué eso importa.

03 Notas cruzadas — si arreglamos un bug en ERP-X, hay que aplicarlo en todos los vendors que lo usan.

04 Markdown plano — leíble por humanos, parseable por agentes.

---

## Diapositiva 9

• ENFOQUE 3 — AGENTES DE IA

09 / 16

LO QUE SÍ FUNCIONÓ

# Le dimos el knowledge base a nuestros agentes. Pedimos dashboard, visibilidad, sync on-demand y vista de errores.

sync-dashboard · prod

• live

PRODUCTOS SINCRONIZADOS  
8.014

ERRORES  
0

MEMORIA PICO  
512 MB

ÚLTIMA CORRIDA  
12s

vendor-a · ERP-X — OK

vendor-b · ERP-Y — OK

vendor-c · ERP-Y — OK

vendor-d · ERP-Y — OK

vendor-e · ERP-Z — OK

2 h

TIEMPO DE CONSTRUCCIÓN

De desarrollo agéntico — no de tipear código humano.

8.000

PRODUCTOS EN LA PRIMERA CORRIDA

Sin caídas. Andó bien en el primer intento.

0

CAJAS NEGRAS

Visibilidad completa, sync on-demand, vista de errores para retroalimentar a la IA.

---

## Diapositiva 10

• LA VICTORIA OCULTA

10 / 16

EFICIENCIA DE RECURSOS EN PRODUCCIÓN

# 0,5 GB

Medio giga de RAM en pico de carga. Toda la sincronización corre cómoda en una EC2 micro.

SUSCRIPCIÓN N8N + CLOUD

$100+ / mes

NUESTRA INFRA EN PRODUCCIÓN

$4 / mes

Y ADEMÁS

Sin pagar la suscripción cuando se cae.

---

## Diapositiva 11

• RAREZA 1 DE 3

11 / 16

01 / 03 LAS TRES RAREZAS DE HACERLO CON IA

# Monitoreo de recursos como feature, no como afterthought.

Como somos dueños del sistema, decidimos qué se mide. CPU y memoria en vivo sobre el dashboard, sin add-ons ni vendors.

Resultado: dimensionamos la infra observando uso real, no adivinando. La observabilidad cambia las decisiones de costos.

MEMORIA · T-PEAK  
512 MB / 1 GB

CPU · AVG 60S  
23%

RED · OUT  
1,2 MB/S

RAM ÚLTIMOS 10 min

---

## Diapositiva 12

• RAREZA 2 DE 3

12 / 16

02 / 03 LAS TRES RAREZAS DE HACERLO CON IA

# Onboarding de vendor guiado por entrevista — el conocimiento se captura solo.

Skill interactiva “Onboard Vendor”: la IA hace preguntas estructuradas, completa su propio prompt y actualiza el knowledge base.

Si reconoce el ERP de otro vendor, reutiliza el patrón. Sin developer en el medio. Sin documentación olvidada.

MIA

Bienvenido. Voy a darte de alta un proveedor. ¿Nombre del vendor?

OPERADOR

Acme Supply Co.

MIA

¿Qué ERP usan?

OPERADOR

ERP-Y.

MIA · AUTO

Tengo el patrón de ERP-Y. Reuso el mapping.

↳ knowledge-base/vendors/acme/ creado · prompt actualizado

---

## Diapositiva 13

• RAREZA 3 DE 3

03 / 03 LAS TRES RAREZAS DE HACERLO CON IA

# Una CLI conversacional para gestionar vendors — sin tocar variables de entorno.

5 flujos × 5 combinaciones vendor-ERP = 25 variables de entorno dispersas. Inmantenible.

Skill “Manage Vendors”: estado de todo, drill-down, on/off por flow. Por debajo edita el archivo de config; arriba, el operador habla en su idioma.

```text
mia > manage-vendors
# estado actual de vendors y flows

vendor-a · ERP-X · ● activo   4/4 flows
vendor-b · ERP-X · ● activo   4/4 flows
vendor-c · ERP-Y · ● activo   4/4 flows
vendor-d · ERP-Y · ○ pausado  3/4 flows
vendor-e · ERP-Z · ● activo   4/4 flows

mia > toggle vendor-d:inventory off
✓ vendor-d.inventory → off
  flows.config.json actualizado
```

---

## Diapositiva 14

• TIEMPO Y COSTO, LADO A LADO

LOS TRES ENFOQUES, COMPARADOS

# El nuevo skill del developer: invertir en los inputs correctos para la IA.

| | ETL TRADICIONAL | N8N | AGENTES DE IA |
|---|---|---|---|
| TIEMPO | Meses | ~60 h | 10–12 h base · + 2 h build |
| COSTO RECURRENTE | Suscripción cara | Suscripción + cloud | $4 / mes |
| VISIBILIDAD | Caja negra. Vendor opaco. | Aparente — hasta que se cae. | Total. Logs, métricas, errores. |
| MANTENIMIENTO | Vendor en retainer. | Frágil al cambio de versión. | El equipo lo opera. |
| ESCALA | Costosa. | No llegó. | 8.000 productos sin sudar. |

---

## Diapositiva 15

• EL CAMBIO DE MENTALIDAD

15 / 16

NUEVAS OPORTUNIDADES

# Buscá cajas negras caras en los procesos del cliente. Ahí está el próximo proyecto.

01

Inventario en un SaaS caro y poco integrado.

Reemplazá la suscripción por un sistema custom con agentes que se conectan a las fuentes reales de datos del cliente.

Costo operativo -70%.

02

Marketing procesando leads a mano entre tres herramientas.

Pipeline con IA que conecta las herramientas, automatiza el procesado y centraliza todo en un solo dashboard.

Vendors recurrentes: eliminados.

03

Logística pagando conciliación de envíos a un tercero.

Sistema que aprende las reglas del negocio, automatiza los casos comunes y marca excepciones con criterio.

El vendor deja de ser necesario.

---

## Diapositiva 16

• CIERRE

16 / 16

EL NUEVO OFICIO DEL DEVELOPER

Aceptamos cajas negras.

Pagamos suscripciones por features que podríamos tener.

Asumimos que escalar es difícil.

Construimos transparencia.

Construimos las alternativas.

Construimos sistemas que se monitorean solos.

El skill no es aprender el framework más nuevo. Es hacer mejores preguntas: ¿cuál es el cuello de botella real?, ¿qué conocimiento hay que capturar?, ¿en qué puede ayudar la IA, en serio?

MAX PLANCK DEV · MIA — MAKERS IA

MAXPLANCK.DEV · INFO@MAXPLANCK.DEV

