# Extracción y programa de contenidos: “¿Code / No-Code?”

Versión limpia en Markdown para análisis, edición y reutilización editorial.

> Nota: este archivo fue generado desde el DOCX actualizado basado en las 16 imágenes aportadas. La versión visible en el canvas está más curada editorialmente; este `.md` conserva el contenido principal para descarga y edición.

---

Extracción y programa de contenidos
“¿Code / No-Code?”
Basado en 16 diapositivas aportadas en imagen por el usuario.
Versión actualizada con extracción visual manual asistida.
Objetivo. Consolidar el texto, la descripción visual, las ideas centrales y un programa de contenidos reutilizable para análisis, publicación o reutilización editorial.
Advertencia metodológica. Esta versión se basa en las imágenes subidas por el usuario. La transcripción es fiel a lo visible; en algunos pies o detalles muy pequeños podría requerirse una revisión final humana si se busca edición literal 100% exacta.

# Resumen ejecutivo

- La charla plantea que la IA cambió la forma de resolver problemas: ya no tiene sentido aceptar cajas negras, suscripciones caras y opacidad operativa como costo inevitable.
- El caso real es una sincronización de 8.000 productos entre cinco proveedores y tres ERPs hacia Shopify, usando Modern Dropship como destino intermedio.
- Se comparan tres enfoques: ETL tradicional (opaco y dependiente), n8n (más flexible pero frágil en escala) y agentes de IA apoyados sobre una knowledge base bien diseñada.
- La clave del enfoque exitoso no fue “magia de IA”, sino documentación estructurada, conocimiento capturado, visibilidad, observabilidad y operación propia.
- Los resultados declarados son fuertes: 2 horas de construcción del sistema visible, 8.000 productos en la primera corrida, 0 cajas negras, 512 MB de memoria pico y un costo de producción de 4 USD/mes.
- La conclusión redefine el rol del developer: menos obsesión con el framework de turno, más foco en identificar cuellos de botella reales, capturar conocimiento y construir alternativas transparentes.

# Programa de contenidos propuesto

# Extracción detallada por diapositiva

## Diapositiva 1: Portada

### Texto extraído

- MAX PLANCK DEV × MIA — MAKERS IA
- ¿Code / No-Code?
- Cómo la IA está rediseñando el trabajo del developer — y por qué dejamos de aceptar cajas negras, suscripciones caras y pesadillas de infraestructura.
- maxplanck.dev — Charla técnica — 2026

### Descripción visual / estructural

Portada minimalista en fondo oscuro con acentos neón verdes. Presenta el tema central: el impacto de la IA en la forma de construir software y cuestiona la dependencia de plataformas cerradas y costosas.

### Ideas y hallazgos

- Tema central: no se trata de code vs no-code como dicotomía superficial, sino de cómo la IA redefine el oficio del developer.
- La charla critica tres males: cajas negras, suscripciones caras y dolor de infraestructura.
- Promesa implícita: mostrar alternativas más transparentes y operables por el propio equipo.

### Posibles piezas de contenido derivadas

- Post de apertura: “La falsa dicotomía entre code y no-code en la era de la IA”.
- Video teaser con la tesis de la charla.
- Artículo marco sobre el cambio de rol del developer con IA.

## Diapositiva 2: Quiénes somos

### Texto extraído

- QUIÉNES SOMOS
- Brian Hume
- Max Planck Dev — desarrollo con IA, hombro a hombro.
- Desarrollamos software a medida, integraciones y agentes de IA para empresas que no se conforman con cajas negras. Acompañamos al cliente desde el MVP hasta la operación de plataforma — seguridad, performance, costos y trazabilidad incluidos.
- Etiquetas: Desarrollo a medida · Integraciones · Agentes de IA · Automatización · Buy vs. Build
- Contacto: brian@maxplanck.dev · linkedin.com/in/hume-brian · maxplanck.dev · 112 Capitol Trail, Newark, DE

### Descripción visual / estructural

Slide de presentación de Brian Hume y de la propuesta de valor de Max Planck Dev. Mezcla identidad personal, posicionamiento técnico y datos de contacto.

### Ideas y hallazgos

- Posicionamiento: software a medida e integraciones con IA, no soluciones opacas de terceros.
- Propuesta punta a punta: del MVP a la operación productiva.
- Ejes de valor: seguridad, performance, costos, trazabilidad.

### Posibles piezas de contenido derivadas

- Ficha de speaker para evento o web.
- Página “about” o folleto institucional.
- Post sobre “Buy vs Build” con ejemplos de integraciones inteligentes.

## Diapositiva 3: Tesis

### Texto extraído

- TESIS
- En el último año, la IA cambió cómo encaramos los problemas.
- Ya no aceptamos cajas negras, suscripciones caras ni pesadillas de infraestructura.
- Hoy construimos soluciones transparentes, observables y baratas de operar — que son nuestras.

### Descripción visual / estructural

Declaración de tesis. Visualmente enfatiza el abandono de viejas dependencias y resalta en verde los atributos deseados: transparencia, observabilidad y bajo costo operativo.

### Ideas y hallazgos

- La IA cambia la forma de pensar soluciones, no solo la velocidad de escribir código.
- Se cuestiona el outsourcing de capacidades críticas hacia vendors opacos.
- El objetivo es control operativo y propiedad del sistema.

### Posibles piezas de contenido derivadas

- Artículo de opinión: “Qué dejó de ser aceptable en ingeniería después del boom de IA”.
- Carrusel comparando “antes” vs “ahora” en arquitectura y operación.
- Manifesto para equipos técnicos.

## Diapositiva 4: Caso real — dropshipping: el reto del cliente

### Texto extraído

- CASO REAL — DROPSHIPPING
- EL RETO DEL CLIENTE
- Sincronizar 8.000 productos desde cinco proveedores con ERPs propios hacia Shopify, vía Modern Dropship.
- El retailer no tenía stock propio. Los proveedores tampoco tenían cuenta en Modern Dropship. Nuestro trabajo: hacer que sus APIs custom se comporten como si la tuvieran.
- Origen: 5 proveedores, 3 ERPs distintos. Cada uno con su API custom, su esquema y sus rarezas.
- La pieza que faltaba: capa de sincronización. Traducción, normalización, manejo de errores y observabilidad.
- Destino: Modern Dropship → Shopify. Catálogo, variantes, stock e imágenes, listos para el retailer.

### Descripción visual / estructural

Slide que formula el problema de negocio y la necesidad técnica. Usa una estructura origen → capa de sincronización → destino.

### Ideas y hallazgos

- Caso concreto y suficientemente complejo como para probar tres enfoques.
- La complejidad no es solo mover datos: hay heterogeneidad de proveedores, APIs y ERPs.
- El valor está en la capa intermedia: normalización, errores y observabilidad.

### Posibles piezas de contenido derivadas

- Caso de estudio largo en blog.
- Infografía del flujo de sincronización.
- Whitepaper sobre integración multi-ERP hacia Shopify.

## Diapositiva 5: Enfoque 1 — ETL tradicional

### Texto extraído

- ENFOQUE 1 — ETL TRADICIONAL
- LO QUE PROBARON ANTES QUE NOSOTROS
- Contrataron un vendor de ETL. La promesa: extract, transform, load. Simple en teoría.
- Caja negra · Acceso restringido
- El cliente no podía ver dentro de los flujos.
- No podía ajustarlos ni mantenerlos.
- Suscripción cara, dependencia total del vendor.
- Para depurar, había que llamar a un especialista en Italia.
- Lección aprendida: Tercerizar a una caja negra resuelve el problema de hoy y crea la dependencia de mañana.

### Descripción visual / estructural

Crítica frontal al enfoque ETL tradicional tercerizado. La slide enfatiza la opacidad operacional y el lock-in del vendor.

### Ideas y hallazgos

- La promesa de simplicidad suele ocultar dependencia estructural.
- El problema no es solo costo, sino ausencia de mantenibilidad y autonomía.
- La depuración se vuelve lenta y dependiente de especialistas externos.

### Posibles piezas de contenido derivadas

- Artículo: “Por qué una caja negra de ETL no es transformación digital”.
- Checklist de evaluación de vendors ETL.
- Contenido comercial comparando build vs outsourcing.

## Diapositiva 6: Enfoque 2 — n8n

### Texto extraído

- ENFOQUE 2 — n8n
- EL PUNTO MEDIO QUE PROMETÍA MUCHO
- Flujos visuales, cloud-hosted, mantenibles por nosotros. Sin caja negra. Sin vendor lock-in. Construimos 8.000 productos de cinco proveedores.
- Y se cayó.
- Y se cayó de nuevo.
- Y se cayó otra vez.

### Descripción visual / estructural

Slide de contraste. Lo que parecía un equilibrio ideal entre visualidad, autonomía y velocidad se desploma por problemas operativos.

### Ideas y hallazgos

- No toda herramienta “más abierta” aguanta producción real.
- La ausencia de caja negra no garantiza escalabilidad ni confiabilidad.
- El relato usa repetición para mostrar fragilidad recurrente.

### Posibles piezas de contenido derivadas

- Post: “Cuándo un low-code workflow engine deja de escalar”.
- Video corto con aprendizajes sobre n8n en producción.
- Tabla de riesgos de automatización visual en cargas medianas/altas.

## Diapositiva 7: Enfoque 2 — diagnóstico

### Texto extraído

- ENFOQUE 2 — DIAGNÓSTICO
- POR QUÉ N8N NO AGUANTÓ
- Probamos todo. A cierto volumen de datos, simplemente no escala.
- 01 Paginar por chunks
- 02 Su feature nueva de data tables
- 03 Correrlo en su cloud
- 04 Dockerizado en máquinas locales
- 05 Self-hosting en instancias más grandes
- Cuando se caía, no había logs útiles. Rebooteaba en silencio y entrábamos cinco minutos después sin saber qué pasó.
- Opacidad total en el momento que más importa.

### Descripción visual / estructural

Slide de post-mortem técnico. Lista experimentos fallidos y destaca la falta de observabilidad como principal obstáculo.

### Ideas y hallazgos

- El problema no fue falta de intentos: se evaluaron múltiples variantes de despliegue y tuning.
- Escalabilidad y observabilidad son inseparables en producción.
- La herramienta falla precisamente cuando más se necesita diagnóstico.

### Posibles piezas de contenido derivadas

- Post-mortem detallado.
- Seminario sobre observabilidad como criterio de selección tecnológica.
- Checklist de readiness para automatización en producción.

## Diapositiva 8: La base antes de pivotar a IA

### Texto extraído

- EL TRABAJO QUE NADIE QUIERE HACER
- ANTES DE PIVOTAR A IA — LA BASE
- Organizamos toda la documentación. Esto fue el arma secreta.
- Estructura de knowledge base:
- knowledge-base/
- ├─ modern-dropship/ · supplier-api.md · webhooks.md
- ├─ vendors/ · vendor-a → ERP-X · vendor-b → ERP-X · vendor-c → ERP-Y · vendor-d → ERP-Y · vendor-e → ERP-Z
- ├─ erps/ · erp-x.md · erp-y.md · erp-z.md
- └─ cross-vendor-notes.md ← saber tribal
- 01 Docs de cada API — proveedores y Modern Dropship, en un solo lugar.
- 02 Mapeo vendor → ERP — quién usa qué, y por qué eso importa.
- 03 Notas cruzadas — si arreglamos un bug en ERP-X, hay que aplicarlo en todos los vendors que lo usan.
- 04 Markdown plano — leíble por humanos, parseable por agentes.

### Descripción visual / estructural

Slide clave: muestra que la IA funciona mejor cuando hay una base de conocimiento bien organizada. La documentación se presenta como activo estratégico.

### Ideas y hallazgos

- La base no es el agente, es el conocimiento estructurado que el agente puede consumir.
- Markdown plano permite doble uso: humano y máquina.
- Capturar “saber tribal” reduce dependencia de personas específicas.

### Posibles piezas de contenido derivadas

- Guía: cómo estructurar una knowledge base para agentes.
- Plantillas Markdown para documentación operable por IA.
- Workshop sobre captura de conocimiento tácito.

## Diapositiva 9: Enfoque 3 — agentes de IA

### Texto extraído

- ENFOQUE 3 — AGENTES DE IA
- LO QUE SÍ FUNCIONÓ
- Le dimos el knowledge base a nuestros agentes. Pedimos dashboard, visibilidad, sync on-demand y vista de errores.
- Dashboard: 8.014 productos sincronizados · 0 errores · memoria pico 512 MB · última corrida 12s · vendors a-e en OK.
- 2 h — Tiempo de construcción: de desarrollo agéntico, no de tipear código humano.
- 8.000 — Productos en la primera corrida: sin caídas. Andó bien en el primer intento.
- 0 — Cajas negras: visibilidad completa, sync on-demand, vista de errores para retroalimentar a la IA.

### Descripción visual / estructural

Presenta el punto de inflexión: la IA funciona cuando opera sobre una base de conocimiento y genera herramientas con observabilidad integrada.

### Ideas y hallazgos

- El sistema no sólo sincroniza; también expone estado, errores y métricas.
- El tiempo de construcción cae drásticamente.
- El resultado operativo es superior a los enfoques anteriores.

### Posibles piezas de contenido derivadas

- Caso de éxito principal.
- Demo del dashboard y sync on-demand.
- Artículo sobre desarrollo agéntico y velocidad de delivery.

## Diapositiva 10: La victoria oculta — eficiencia de recursos

### Texto extraído

- LA VICTORIA OCULTA
- EFICIENCIA DE RECURSOS EN PRODUCCIÓN
- 0,5 GB
- Medio giga de RAM en pico de carga. Toda la sincronización corre cómoda en una EC2 micro.
- Suscripción n8n + cloud ~ $100+ / mes
- Nuestra infra en producción $4 / mes
- Y además: sin pagar la suscripción cuando se cae.

### Descripción visual / estructural

Slide de impacto económico. Vincula arquitectura, observabilidad y eficiencia de costos.

### Ideas y hallazgos

- La eficiencia técnica produce ahorro medible.
- Controlar la infraestructura permite dimensionar con datos reales.
- Se rompe la equivalencia “menos código” = “menos costo”.

### Posibles piezas de contenido derivadas

- Calculadora comparativa de TCO.
- Post “De $100+ a $4/mes: qué cambió en realidad”.
- Caso comercial orientado a CFO/CTO.

## Diapositiva 11: Rareza 1 de 3 — monitoreo como feature

### Texto extraído

- RAREZA 1 DE 3
- 01 / 03 LAS TRES RAREZAS DE HACERLO CON IA
- Monitoreo de recursos como feature, no como afterthought.
- Como somos dueños del sistema, decidimos qué se mide. CPU y memoria en vivo sobre el dashboard, sin add-ons ni vendors.
- Resultado: dimensionamos la infra observando uso real, no adivinando. La observabilidad cambia las decisiones de costos.
- Métricas mostradas: memoria 512 MB / 1 GB · CPU avg 60s 23% · red out 1,2 MB/s · gráfico RAM últimos 10 min.

### Descripción visual / estructural

Primera “rareza”: el monitoreo no se agrega al final; se diseña como parte del producto.

### Ideas y hallazgos

- La observabilidad deja de ser un accesorio y se vuelve producto.
- Medir en vivo permite decisiones de costo basadas en hechos.
- Ser dueños del sistema habilita instrumentación relevante.

### Posibles piezas de contenido derivadas

- Artículo técnico sobre observabilidad embebida.
- Tutorial para exponer CPU/memoria en dashboards operativos.
- Charla “observabilidad como diseño, no como parche”.

## Diapositiva 12: Rareza 2 de 3 — onboarding guiado por entrevista

### Texto extraído

- RAREZA 2 DE 3
- 02 / 03 LAS TRES RAREZAS DE HACERLO CON IA
- Onboarding de vendor guiado por entrevista — el conocimiento se captura solo.
- Skill interactiva “Onboard Vendor”: la IA hace preguntas estructuradas, completa su propio prompt y actualiza el knowledge base.
- Si reconoce el ERP de otro vendor, reutiliza el patrón. Sin developer en el medio. Sin documentación olvidada.
- Diálogo ejemplo: MIA pregunta por nombre del vendor y ERP; el operador responde “Acme Supply Co.” y “ERP-Y.”; MIA reutiliza el mapping y crea knowledge-base/vendors/acme/.

### Descripción visual / estructural

Segunda “rareza”: la IA se usa para capturar y estructurar conocimiento operativo durante el onboarding.

### Ideas y hallazgos

- El onboarding deja de depender de un developer que traduzca lo que un operador dice.
- La IA aprende patrones reutilizables por ERP.
- El conocimiento se captura durante la operación, no después.

### Posibles piezas de contenido derivadas

- Demo de onboarding conversacional.
- Artículo sobre captura de conocimiento mediante entrevistas guiadas.
- Casos de uso de skill-based interfaces para operaciones.

## Diapositiva 13: Rareza 3 de 3 — CLI conversacional

### Texto extraído

- RAREZA 3 DE 3
- 03 / 03 LAS TRES RAREZAS DE HACERLO CON IA
- Una CLI conversacional para gestionar vendors — sin tocar variables de entorno.
- 5 flujos × 5 combinaciones vendor-ERP = 25 variables de entorno dispersas. Inmantenible.
- Skill “Manage Vendors”: estado de todo, drill-down, on/off por flow. Por debajo edita el archivo de config; arriba, el operador habla en su idioma.
- Ejemplo de estado: vendor-a ERP-X activo 4/4 flows; vendor-d ERP-Y pausado 3/4 flows.
- Ejemplo de acción: toggle vendor-d:inventory off → flows.config.json actualizado.

### Descripción visual / estructural

Tercera “rareza”: se construye una interfaz operativa conversacional sobre una capa de configuración real.

### Ideas y hallazgos

- La IA simplifica la operación sin ocultar la configuración subyacente.
- Se abstrae complejidad accidental, no se pierde control.
- El operador interactúa en lenguaje natural; el sistema aplica cambios estructurados.

### Posibles piezas de contenido derivadas

- Tutorial de CLI conversacional.
- Artículo sobre capas de abstracción operativa sin sacrificar control.
- Demo “antes/después” de variables de entorno dispersas.

## Diapositiva 14: Comparación de los tres enfoques

### Texto extraído

- TIEMPO Y COSTO, LADO A LADO
- LOS TRES ENFOQUES, COMPARADOS
- El nuevo skill del developer: invertir en los inputs correctos para la IA.
- ETL tradicional — tiempo: meses · costo recurrente: suscripción cara · visibilidad: caja negra, vendor opaco · mantenimiento: vendor en retainer · escala: costosa.
- n8n — tiempo: ~60 h · costo recurrente: suscripción + cloud · visibilidad: aparente, hasta que se cae · mantenimiento: frágil al cambio de versión · escala: no llegó.
- Agentes de IA — tiempo: 10–12 h base + 2 h build · costo recurrente: $4/mes · visibilidad: total, logs, métricas, errores · mantenimiento: el equipo lo opera · escala: 8.000 productos sin sudar.

### Descripción visual / estructural

Tabla comparativa que resume la tesis empírica de la charla.

### Ideas y hallazgos

- La ventaja competitiva no es “usar IA” en abstracto, sino preparar buenos inputs y conocimiento.
- El enfoque con agentes gana en tiempo, costo, visibilidad y operación.
- La comparación es útil como marco de decisión para clientes.

### Posibles piezas de contenido derivadas

- Tabla descargable para ventas o discovery.
- Artículo comparativo “ETL vs low-code vs agentes de IA”.
- Framework para seleccionar enfoque por contexto.

## Diapositiva 15: Nuevas oportunidades

### Texto extraído

- EL CAMBIO DE MENTALIDAD
- NUEVAS OPORTUNIDADES
- Buscá cajas negras caras en los procesos del cliente. Ahí está el próximo proyecto.
- 01 Inventario en un SaaS caro y poco integrado. Reemplazá la suscripción por un sistema custom con agentes que se conectan a las fuentes reales de datos del cliente. Costo operativo -70%.
- 02 Marketing procesando leads a mano entre tres herramientas. Pipeline con IA que conecta las herramientas, automatiza el procesado y centraliza todo en un solo dashboard. Vendors recurrentes: eliminados.
- 03 Logística pagando conciliación de envíos a un tercero. Sistema que aprende las reglas del negocio, automatiza los casos comunes y marca excepciones con criterio. El vendor deja de ser necesario.

### Descripción visual / estructural

Slide orientada a negocio y prospección. Identifica patrones de problemas donde el enfoque puede replicarse.

### Ideas y hallazgos

- El patrón se generaliza a otros procesos con alto costo, poca integración y dependencia de terceros.
- El foco comercial es detectar fricción operativa sostenida por vendors caros.
- La IA se propone como medio para construir alternativas específicas y más baratas.

### Posibles piezas de contenido derivadas

- Serie de tres casos comerciales por industria.
- Checklist de discovery para identificar cajas negras caras.
- Lead magnet para CTO/COO sobre oportunidades de automatización con IA.

## Diapositiva 16: Cierre — el nuevo oficio del developer

### Texto extraído

- CIERRE
- EL NUEVO OFICIO DEL DEVELOPER
- Aceptamos cajas negras. (tachado)
- Pagamos suscripciones por features que podríamos tener. (tachado)
- Asumimos que escalar es difícil. (tachado)
- Construimos transparencia.
- Construimos las alternativas.
- Construimos sistemas que se monitorean solos.
- El skill no es aprender el framework más nuevo. Es hacer mejores preguntas: ¿cuál es el cuello de botella real?, ¿qué conocimiento hay que capturar?, ¿en qué puede ayudar la IA, en serio?
- MAX PLANCK DEV • MIA — MAKERS IA · MAXPLANCK.DEV • INFO@MAXPLANCK.DEV

### Descripción visual / estructural

Cierre conceptual. Resume el cambio de mentalidad y redefine el rol del developer como diseñador de sistemas transparentes y preguntas correctas.

### Ideas y hallazgos

- La habilidad central ya no es acumular frameworks, sino identificar cuellos de botella y conocimiento capturable.
- Se enfatiza construir alternativas propias y observables.
- La IA es útil cuando se aplica a problemas concretos y bien entendidos.

### Posibles piezas de contenido derivadas

- Artículo de cierre/manifiesto.
- Key takeaways para newsletter.
- Resumen ejecutivo para compartir con clientes potenciales.

# Síntesis transversal

Problema recurrente identificado: Procesos importantes resueltos con herramientas o vendors opacos, caros y difíciles de operar o depurar.
Principio de diseño: Antes de usar IA, ordenar el conocimiento y volverlo reusable por humanos y agentes.
Cambio de skill: El developer deja de ser solo implementador y pasa a ser diseñador de inputs, observabilidad e interfaces operativas.
Patrón replicable: Detectar un proceso con vendor costoso y reglas repetitivas; capturar su conocimiento; construir una alternativa observable y operable por el equipo.
Riesgo a evitar: Confundir velocidad de prototipado con aptitud para producción. Un flujo “visual” puede seguir siendo frágil si no escala y no expone fallos.
Mensaje comercial: Las mejores oportunidades aparecen donde el cliente paga mucho por una caja negra que podría reemplazarse con una solución propia asistida por IA.

# Anexos sugeridos para una próxima versión

- Convertir esta extracción en un artículo largo, un carrusel de LinkedIn y una charla de 20 minutos.
- Añadir un cuadro de citas textuales seleccionadas para material promocional.
- Crear una versión en Markdown o Notion con enlaces, tags y tareas editoriales.
- Preparar un guion de video o podcast basado en las 16 diapositivas.