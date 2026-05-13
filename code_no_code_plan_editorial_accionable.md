# Plan editorial accionable — “¿Code / No-Code?”

Plan basado en las 16 diapositivas de la charla. Objetivo: convertir el material en activos publicables para LinkedIn, blog, newsletter, lead magnet, charla y piezas comerciales.

---

## 1. Tesis editorial

La IA no elimina el trabajo del developer: desplaza el valor hacia la capacidad de identificar cuellos de botella reales, capturar conocimiento operativo, diseñar buenos inputs para agentes y construir sistemas transparentes, observables y baratos de operar.

La oposición “code vs no-code” queda corta. La pregunta correcta es:

> ¿Dónde estamos pagando demasiado por cajas negras que podríamos reemplazar por sistemas propios, observables y asistidos por IA?

---

## 2. Audiencias objetivo

### Audiencia primaria

**CTOs, tech leads, arquitectos, developers senior, DevOps/SRE y responsables de automatización** que ya han sufrido herramientas opacas, integraciones frágiles, workflows low-code que no escalan o vendors caros.

### Audiencia secundaria

**COOs, founders, responsables de operaciones, e-commerce managers y líderes de negocio** que pagan suscripciones recurrentes o servicios externos para resolver procesos repetitivos, mal integrados o difíciles de auditar.

### Audiencia terciaria

**Consultores, agencias técnicas y builders independientes** que buscan una narrativa comercial para vender soluciones con IA sin caer en humo genérico.

---

## 3. Posicionamiento recomendado

### Posicionamiento central

Max Planck Dev / MIA no vende “IA” en abstracto. Vende reemplazo de cajas negras por sistemas propios: documentados, observables, operables y baratos.

### Fórmula de posicionamiento

> Detectamos procesos caros y opacos, capturamos el conocimiento operativo, y construimos alternativas con agentes de IA que el equipo puede operar.

### Diferenciadores

- No vender “automatización mágica”; vender control operativo.
- No prometer “sin código”; prometer menos dependencia y mejor observabilidad.
- No vender “agentes” como moda; mostrar agentes alimentados por knowledge base real.
- No competir contra SaaS por features; competir contra lock-in, opacidad y costo recurrente.

---

## 4. Arquitectura narrativa

La historia funciona mejor como una secuencia de tensión → fracaso → aprendizaje → alternativa:

1. **Dolor inicial:** cajas negras, suscripciones caras, infraestructura dolorosa.
2. **Caso concreto:** 8.000 productos, cinco proveedores, tres ERPs, Shopify y Modern Dropship.
3. **Primer intento:** ETL tradicional. Promete simplicidad, entrega dependencia.
4. **Segundo intento:** n8n. Promete autonomía, falla en escala y observabilidad.
5. **Trabajo invisible:** ordenar documentación y knowledge base.
6. **Tercer enfoque:** agentes de IA con dashboard, sync on-demand, errores y métricas.
7. **Resultado:** menos costo, más control, mejor operación.
8. **Nueva oportunidad:** buscar cajas negras caras en otros procesos del cliente.
9. **Cierre:** el nuevo oficio del developer es hacer mejores preguntas.

---

# 5. Calendario editorial de 4 semanas

## Semana 1 — Instalar la tesis

### Objetivo

Abrir la conversación y posicionar el tema: la IA cambia el trabajo del developer, pero no por “no-code”, sino por propiedad, transparencia y operación.

### Piezas

1. Post LinkedIn: “La falsa discusión Code vs No-Code”
2. Carrusel LinkedIn: “3 cosas que ya no deberíamos aceptar como developers”
3. Newsletter corta: “La IA no reemplaza al developer; cambia qué parte del trabajo vale más”
4. Clip/video corto: tesis de 60 segundos

---

## Semana 2 — Contar el caso real

### Objetivo

Bajar la tesis a un caso concreto y creíble.

### Piezas

1. Caso de estudio blog: sincronizar 8.000 productos desde 5 proveedores y 3 ERPs
2. Carrusel LinkedIn: “El problema no era mover datos: era normalizar rarezas”
3. Post técnico: “Por qué la capa de sincronización era la pieza que faltaba”
4. Infografía: origen → capa de sincronización → destino

---

## Semana 3 — Mostrar los fracasos útiles

### Objetivo

Construir autoridad técnica contando lo que no funcionó: ETL tradicional y n8n.

### Piezas

1. Post LinkedIn: “La caja negra resuelve hoy y te ata mañana”
2. Post técnico: “Qué probamos antes de abandonar n8n”
3. Newsletter: “La observabilidad importa más cuando todo se cae”
4. Checklist: “Señales de que tu low-code workflow no está listo para producción”

---

## Semana 4 — Presentar el enfoque ganador

### Objetivo

Mostrar el modelo replicable: knowledge base + agentes + observabilidad + operación propia.

### Piezas

1. Artículo largo: “El patrón: knowledge base primero, agentes después”
2. Carrusel LinkedIn: “Las 3 rarezas de hacerlo con IA”
3. Post comercial: “Buscá cajas negras caras: ahí está el próximo proyecto”
4. Lead magnet: “Guía para detectar procesos reemplazables por sistemas con IA”

---

# 6. Piezas listas para producir

## 6.1. LinkedIn — Post 1

### Título operativo

La falsa discusión Code vs No-Code

### Objetivo

Abrir conversación y provocar sin sonar anti-no-code por principio.

### Borrador

La pregunta “¿code o no-code?” ya quedó vieja.

La pregunta real es otra:

¿Estamos construyendo sistemas que entendemos, operamos y podemos mejorar, o estamos pagando por cajas negras?

En el último año, la IA cambió cómo encaramos problemas técnicos. No porque ahora todo sea “sin código”, sino porque podemos construir alternativas más rápido si tenemos los inputs correctos.

Pero hay una condición: la IA no arregla conocimiento desordenado.

Lo que sí cambia el juego:

- documentación clara,
- procesos observables,
- errores visibles,
- dashboards propios,
- infraestructura dimensionada con datos reales,
- agentes que trabajan sobre una knowledge base bien diseñada.

El nuevo skill del developer no es aprender otro framework por inercia.

Es hacer mejores preguntas:

¿Cuál es el cuello de botella real?
¿Qué conocimiento hay que capturar?
¿Qué caja negra estamos pagando sin necesidad?
¿Dónde puede ayudar la IA, en serio?

---

## 6.2. LinkedIn — Post 2

### Título operativo

La caja negra resuelve hoy y te ata mañana

### Objetivo

Usar el fracaso del ETL tradicional como aprendizaje comercial y técnico.

### Borrador

Un cliente tenía que sincronizar 8.000 productos desde cinco proveedores con ERPs distintos hacia Shopify.

Antes de construir una solución propia, probaron un vendor de ETL.

La promesa era perfecta:

extract, transform, load.
Simple en teoría.

El problema apareció en producción:

- el cliente no podía ver dentro de los flujos,
- no podía ajustarlos,
- no podía mantenerlos,
- pagaba una suscripción cara,
- dependía del vendor para depurar,
- y para investigar un error había que llamar a un especialista externo.

Lección:

Tercerizar a una caja negra puede resolver el problema de hoy, pero muchas veces crea la dependencia de mañana.

La pregunta no es sólo cuánto cuesta la herramienta.

La pregunta es:

¿Quién entiende el sistema cuando falla?

---

## 6.3. LinkedIn — Post 3

### Título operativo

n8n no era una caja negra, pero tampoco aguantó producción

### Objetivo

Mostrar criterio técnico y evitar una lectura simplista anti-vendor.

### Borrador

Después del ETL tradicional, probamos un punto medio:

n8n.

La promesa era razonable:

- flujos visuales,
- cloud-hosted,
- mantenibles por nosotros,
- sin caja negra,
- sin vendor lock-in fuerte.

Construimos la sincronización de 8.000 productos desde cinco proveedores.

Y se cayó.

Y se cayó de nuevo.

Y se cayó otra vez.

Probamos paginar por chunks, data tables, cloud, Docker local y self-hosting en instancias más grandes.

El problema no fue sólo que se cayera.

El problema fue que, cuando se caía, no había logs útiles.

Rebooteaba en silencio y entrábamos minutos después sin saber qué había pasado.

Conclusión incómoda:

Una herramienta puede no ser una caja negra comercial y aun así comportarse como una caja negra operativa en el momento que más importa.

---

## 6.4. LinkedIn — Post 4

### Título operativo

Antes de usar IA, ordenamos la documentación

### Objetivo

Instalar la idea de knowledge base como activo fundacional.

### Borrador

La parte menos sexy del proyecto fue la que hizo que la IA funcionara.

Antes de pivotar a agentes, organizamos toda la documentación:

- docs de cada API,
- proveedores,
- webhooks,
- mapeo vendor → ERP,
- notas cruzadas,
- bugs compartidos,
- saber tribal,
- todo en Markdown plano.

Eso fue el arma secreta.

No porque Markdown sea mágico.

Sino porque era legible por humanos y parseable por agentes.

La IA no reemplazó la comprensión del problema.

La amplificó cuando el conocimiento estuvo ordenado.

La secuencia correcta no fue:

“metamos IA y vemos qué pasa”.

Fue:

1. entender el dominio,
2. capturar conocimiento,
3. estructurarlo,
4. recién ahí darle herramientas a los agentes.

---

## 6.5. LinkedIn — Post 5

### Título operativo

El sistema costó 4 dólares al mes en producción

### Objetivo

Convertir eficiencia técnica en argumento de negocio.

### Borrador

La victoria más visible fue sincronizar 8.000 productos sin caídas.

La victoria oculta fue otra:

0,5 GB de RAM en pico de carga.

Toda la sincronización corriendo cómoda en una EC2 micro.

Comparación:

- n8n + cloud: más de 100 USD/mes,
- nuestra infraestructura en producción: 4 USD/mes.

Y un detalle no menor:

sin pagar una suscripción cuando el sistema se cae.

La lección no es “siempre construí todo”.

Eso sería una mala generalización.

La lección es mejor:

cuando sos dueño del sistema, podés medir uso real, dimensionar infraestructura con evidencia y ajustar costos sin depender de un vendor.

La observabilidad no sólo mejora debugging.

También cambia decisiones económicas.

---

## 6.6. LinkedIn — Post 6

### Título operativo

Buscá cajas negras caras en los procesos del cliente

### Objetivo

Crear una pieza de prospección directa.

### Borrador

¿Dónde está el próximo proyecto de IA útil?

No necesariamente en un chatbot.

Buscá cajas negras caras en los procesos del cliente.

Ejemplos:

1. Inventario en un SaaS caro y poco integrado.
2. Marketing pasando leads a mano entre tres herramientas.
3. Logística pagando conciliación de envíos a un tercero.
4. Operaciones dependiendo de planillas imposibles de auditar.
5. Soporte copiando información entre sistemas.

El patrón se repite:

- proceso crítico,
- costo recurrente,
- integración pobre,
- baja visibilidad,
- dependencia de terceros,
- reglas de negocio que nadie documentó bien.

Ahí la IA puede servir.

No como decoración.

Como forma de capturar conocimiento, construir una alternativa propia y operar con transparencia.

---

# 7. Artículos largos sugeridos

## Artículo 1 — La falsa dicotomía Code / No-Code en la era de la IA

### Tesis

La IA no vuelve irrelevante el código ni convierte todo en no-code. Lo que cambia es el tipo de trabajo de mayor valor: capturar conocimiento, diseñar inputs, construir sistemas observables y reducir dependencia de cajas negras.

### Estructura

1. Introducción: por qué la pregunta “code vs no-code” se queda corta.
2. El problema real: opacidad, costo recurrente y dependencia.
3. El rol de la IA: acelerador de construcción, no sustituto del criterio técnico.
4. La nueva unidad de valor: knowledge base + observabilidad + operación.
5. Cierre: el developer como diseñador de sistemas transparentes.

### CTA

¿Dónde estás pagando hoy por una caja negra que tu equipo no puede auditar?

---

## Artículo 2 — Caso real: sincronizar 8.000 productos sin cajas negras

### Tesis

Un problema de integración multi-proveedor no se resolvió con ETL tradicional ni con low-code visual; se resolvió con una knowledge base estructurada y agentes que construyeron una solución observable.

### Estructura

1. Contexto del cliente.
2. Complejidad: 5 proveedores, 3 ERPs, APIs custom.
3. Intento 1: ETL tradicional.
4. Intento 2: n8n.
5. La base: documentación organizada.
6. Enfoque final: agentes + dashboard + sync on-demand.
7. Resultados: tiempo, costo, memoria, visibilidad.
8. Qué aprendimos.

### CTA

Si tu integración depende de un vendor opaco, probablemente el problema no sea sólo técnico: es operativo.

---

## Artículo 3 — Knowledge base primero, agentes después

### Tesis

Los agentes útiles no nacen de prompts aislados, sino de conocimiento estructurado, actualizado y legible por humanos y máquinas.

### Estructura

1. Por qué “usar IA” no basta.
2. Qué debe contener una knowledge base operativa.
3. Markdown como formato pragmático.
4. Mapeos, notas cruzadas y saber tribal.
5. Cómo la knowledge base alimenta dashboards, CLIs y onboarding.
6. Riesgos: documentación muerta, prompts frágiles, conocimiento tácito.
7. Recomendaciones prácticas.

### CTA

Antes de pedirle más a la IA, preguntá si le diste el conocimiento correcto.

---

## Artículo 4 — Observabilidad como feature, no como afterthought

### Tesis

La observabilidad no es sólo una preocupación de SRE; es una feature del producto cuando el sistema debe ser operable por el equipo y económicamente eficiente.

### Estructura

1. El síntoma: sistemas que fallan sin explicar por qué.
2. El caso n8n: caída sin logs útiles.
3. El enfoque alternativo: dashboard propio.
4. Métricas mínimas: memoria, CPU, red, errores, última corrida.
5. Cómo la observabilidad cambia decisiones de costos.
6. Conclusión: si no podés observarlo, no podés operarlo.

### CTA

Tu sistema no está terminado cuando funciona; está terminado cuando se puede diagnosticar.

---

# 8. Lead magnet

## Título recomendado

Guía práctica para detectar cajas negras caras reemplazables con IA

## Promesa

Un checklist para identificar procesos donde una empresa paga demasiado por herramientas opacas, vendors recurrentes o integraciones manuales, y evaluar si conviene construir una alternativa propia asistida por IA.

## Índice sugerido

1. Señales de una caja negra cara.
2. Preguntas de discovery.
3. Matriz de decisión: comprar, mantener, construir o reemplazar parcialmente.
4. Checklist de conocimiento capturable.
5. Checklist de observabilidad mínima.
6. Estimación rápida de TCO.
7. Casos candidatos: inventario, marketing, logística, soporte, finanzas.
8. Plantilla de propuesta técnica.

## Checklist base

### Señales de oportunidad

- El cliente paga una suscripción alta por una función acotada.
- El proceso depende de un vendor para cambios simples.
- No hay logs útiles cuando falla.
- La operación se completa con planillas paralelas.
- Hay reglas de negocio repetitivas pero no documentadas.
- El equipo no sabe cuánto cuesta realmente operar el flujo.
- La herramienta actual integra mal con sistemas centrales.
- El proveedor cobra por volumen, usuarios o features que podrían ser internas.

### Preguntas de discovery

- ¿Qué proceso duele más cuando se cae?
- ¿Quién lo entiende de punta a punta?
- ¿Dónde vive la documentación?
- ¿Qué parte del proceso se hace manualmente?
- ¿Qué datos se copian entre sistemas?
- ¿Cuánto se paga por mes o por año?
- ¿Qué logs, métricas o errores están disponibles?
- ¿Qué decisiones dependen de información que hoy no se ve?
- ¿Qué reglas sabe el equipo pero no están escritas?
- ¿Qué pasaría si el vendor sube precios o corta una feature?

---

# 9. Newsletter de 4 entregas

## Newsletter 1 — El problema no era code vs no-code

### Asunto

La pregunta “Code o No-Code” ya no alcanza

### Idea central

La discusión útil no es si hay código o no. Es si el sistema es transparente, operable, observable y económicamente razonable.

### Cierre

Esta semana mirá un proceso de tu empresa y preguntá: ¿lo entendemos o sólo lo pagamos?

---

## Newsletter 2 — Cuando el ETL se convierte en dependencia

### Asunto

Una caja negra puede resolver hoy y complicar mañana

### Idea central

El ETL tradicional resolvía parte del problema, pero impedía ver, ajustar y depurar. La dependencia era más grave que la integración.

### Cierre

La próxima vez que evalúes un vendor, preguntá quién diagnostica el sistema cuando falla.

---

## Newsletter 3 — n8n parecía el punto medio, hasta producción

### Asunto

No toda herramienta visual está lista para escala real

### Idea central

n8n prometía autonomía, pero falló en escala y observabilidad. La lección no es descartar low-code siempre, sino exigir criterios de producción.

### Cierre

Un flujo visual sin logs útiles sigue siendo una caja negra operativa.

---

## Newsletter 4 — Knowledge base primero, agentes después

### Asunto

La IA funcionó cuando ordenamos el conocimiento

### Idea central

El salto vino después de estructurar documentación, mapeos, notas cruzadas y saber tribal. Los agentes fueron útiles porque tenían contexto real.

### Cierre

Antes de pedirle más a la IA, preguntá si le diste conocimiento suficiente para razonar.

---

# 10. Guion para charla de 20 minutos

## 0:00–2:00 — Apertura

- Presentar la pregunta “¿Code / No-Code?”.
- Reformular: no se trata de código, sino de control, transparencia y operación.
- Instalar tesis: la IA cambió cómo encaramos problemas.

## 2:00–5:00 — Caso real

- Explicar el problema: 8.000 productos, 5 proveedores, 3 ERPs, Shopify, Modern Dropship.
- Mostrar por qué no era sólo una integración simple.
- Introducir la capa de sincronización como pieza crítica.

## 5:00–8:00 — Enfoque 1: ETL tradicional

- Promesa: extract, transform, load.
- Problema: caja negra, acceso restringido, dependencia, costo.
- Lección: resuelve hoy, ata mañana.

## 8:00–11:00 — Enfoque 2: n8n

- Promesa: flujos visuales, mantenibles, sin vendor lock-in.
- Fallo: caídas repetidas.
- Diagnóstico: sin logs útiles en el momento crítico.
- Lección: sin observabilidad, no hay operación real.

## 11:00–14:00 — La base invisible

- Mostrar knowledge base.
- Explicar Markdown plano, docs de APIs, mapeo vendor-ERP, notas cruzadas.
- Mensaje: la IA necesita conocimiento estructurado.

## 14:00–17:00 — Enfoque 3: agentes de IA

- Dashboard, sync on-demand, vista de errores.
- Resultados: 2 h de construcción, 8.000 productos, 0 cajas negras.
- Eficiencia: 512 MB, 4 USD/mes.

## 17:00–19:00 — Las tres rarezas

- Monitoreo como feature.
- Onboarding guiado por entrevista.
- CLI conversacional para gestionar vendors.

## 19:00–20:00 — Cierre

- Nuevo oficio del developer: hacer mejores preguntas.
- Preguntas finales:
  - ¿Cuál es el cuello de botella real?
  - ¿Qué conocimiento hay que capturar?
  - ¿En qué puede ayudar la IA, en serio?

---

# 11. Guion para video corto de 60 segundos

## Hook

“Code vs No-Code” es la pregunta equivocada.

## Desarrollo

El problema real no es si escribís código o usás una herramienta visual.

El problema es si tu sistema es una caja negra.

En un caso real tuvimos que sincronizar 8.000 productos desde cinco proveedores con tres ERPs distintos hacia Shopify.

Primero probaron ETL tradicional: caro, opaco y dependiente del vendor.

Después probamos n8n: más flexible, pero a cierto volumen se caía y no había logs útiles.

Lo que funcionó fue otra cosa:

ordenar la documentación, armar una knowledge base y usar agentes de IA para construir una solución observable, con dashboard, sync on-demand y vista de errores.

## Cierre

El nuevo skill del developer no es aprender el framework de moda.

Es hacer mejores preguntas y construir sistemas que el equipo realmente pueda operar.

---

# 12. Carruseles de LinkedIn

## Carrusel 1 — “3 cosas que ya no deberíamos aceptar”

1. Portada: 3 cosas que ya no deberíamos aceptar como developers
2. Caja negra: si no podés ver qué pasa, no podés operar.
3. Suscripción cara: pagar todos los meses no siempre compra control.
4. Infraestructura dolorosa: si escalar requiere adivinar, falta observabilidad.
5. Lo nuevo: soluciones transparentes, observables y baratas de operar.
6. La IA ayuda cuando hay conocimiento estructurado.
7. Cierre: el futuro no es no-code; es menos dependencia.

## Carrusel 2 — “El caso de los 8.000 productos”

1. Portada: Cómo sincronizamos 8.000 productos sin cajas negras
2. El contexto: 5 proveedores, 3 ERPs, Shopify.
3. El problema: APIs custom, esquemas distintos, rarezas.
4. Lo que faltaba: capa de sincronización.
5. Intento 1: ETL tradicional.
6. Intento 2: n8n.
7. La base: knowledge base.
8. Resultado: agentes + dashboard + observabilidad.
9. Cierre: la IA funcionó porque tenía contexto.

## Carrusel 3 — “Las 3 rarezas de hacerlo con IA”

1. Portada: Las 3 rarezas de hacerlo con IA
2. Rareza 1: monitoreo como feature.
3. CPU, memoria y red visibles desde el dashboard.
4. Rareza 2: onboarding guiado por entrevista.
5. La IA captura conocimiento mientras opera.
6. Rareza 3: CLI conversacional.
7. Operadores gestionan vendors sin tocar variables de entorno.
8. Cierre: la IA útil no tapa el sistema; lo vuelve más operable.

---

# 13. Matriz de reutilización por canal

| Activo | LinkedIn | Blog | Newsletter | Comercial | Webinar |
|---|---:|---:|---:|---:|---:|
| Tesis Code / No-Code | Alta | Alta | Alta | Media | Alta |
| Caso 8.000 productos | Alta | Alta | Media | Alta | Alta |
| Crítica ETL | Alta | Media | Alta | Alta | Media |
| Fallo n8n | Alta | Alta | Alta | Media | Alta |
| Knowledge base | Alta | Alta | Alta | Alta | Alta |
| Agentes + dashboard | Alta | Alta | Media | Alta | Alta |
| Eficiencia $4/mes | Alta | Media | Media | Alta | Alta |
| Tres rarezas | Alta | Alta | Media | Media | Alta |
| Nuevas oportunidades | Alta | Alta | Alta | Alta | Media |
| Nuevo oficio developer | Alta | Alta | Alta | Media | Alta |

---

# 14. Métricas recomendadas

## Awareness

- Impresiones en LinkedIn.
- Tasa de retención en carruseles.
- Reproducciones de videos cortos.
- Suscripciones a newsletter.

## Engagement cualificado

- Comentarios de CTOs, developers senior, founders y operadores.
- Guardados en posts técnicos.
- Respuestas a newsletter.
- Preguntas recibidas sobre casos similares.

## Conversión

- Descargas del lead magnet.
- Solicitudes de diagnóstico.
- Reuniones agendadas.
- Procesos candidatos identificados.
- Propuestas enviadas.

## Señales de buen posicionamiento

- La audiencia empieza a usar frases como “caja negra”, “observabilidad”, “knowledge base” y “reemplazo de vendor”.
- Los prospectos llegan con procesos concretos, no con pedidos genéricos de “usar IA”.
- Las conversaciones comerciales giran en torno a costo, control y operación, no sólo a automatización.

---

# 15. Riesgos de comunicación

## Riesgo 1: sonar anti no-code por principio

Corrección: el mensaje no debe ser “no uses no-code”. Debe ser “no aceptes opacidad operativa en procesos críticos”.

## Riesgo 2: vender IA como magia

Corrección: insistir en que lo que funcionó fue knowledge base + contexto + observabilidad + agentes.

## Riesgo 3: prometer que siempre conviene construir

Corrección: no todas las suscripciones son malas. Conviene construir cuando hay costo alto, proceso crítico, reglas específicas, mala integración y dependencia operativa.

## Riesgo 4: usar el caso como prueba universal

Corrección: presentarlo como patrón replicable, no como ley absoluta. Un caso no demuestra que n8n no sirva nunca ni que agentes sean siempre mejores.

## Riesgo 5: exagerar los números

Corrección: mantener los números como resultados del caso específico. No convertir “$4/mes” en promesa general.

---

# 16. Próximos pasos recomendados

1. Convertir el caso en un artículo largo con narrativa completa.
2. Publicar una serie de 6 posts LinkedIn durante dos semanas.
3. Crear el lead magnet de checklist para discovery.
4. Preparar una landing simple: “Detectamos cajas negras caras en tus procesos”.
5. Usar el guion de 20 minutos para webinar o charla técnica.
6. Crear una plantilla de diagnóstico comercial basada en las preguntas del lead magnet.
