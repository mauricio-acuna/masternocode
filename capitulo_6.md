# Capítulo 6: Observabilidad como feature

## Medir desde el diseño

El capítulo anterior mostró el giro que sí funcionó: knowledge base, agentes con contexto y una interfaz operativa capaz de mostrar estado, errores y métricas. Este capítulo se detiene en una consecuencia de ese giro: cuando el sistema es propio, la observabilidad puede diseñarse desde el principio.

No como un agregado. No como una pantalla que se arma al final para tranquilizar a alguien. No como una colección de logs que sólo entiende ingeniería. Observabilidad como feature significa que el sistema nace con la obligación de explicar su comportamiento.

**Evidencia del caso**: La diapositiva 11 lo formula de manera explícita: "Monitoreo de recursos como feature, no como afterthought."

Esa frase importa porque corrige una costumbre muy extendida. Muchos equipos construyen primero la función principal y dejan la medición para después. Primero sincronizar. Después, si sobra tiempo, ver logs. Primero correr. Después, si se cae, agregar alertas. Primero publicar. Después, si el costo crece, mirar infraestructura.

En integraciones críticas, ese orden es caro. Si el sistema mueve catálogo, stock, variantes e imágenes, operar sin señales es trabajar a ciegas. No alcanza con que una corrida termine. Hay que saber cuánto tardó, qué consumió, qué fuente falló, qué quedó pendiente y qué cambió respecto de la corrida anterior.

**Inferencia**: La observabilidad fue parte del éxito porque atacó el problema central de los enfoques anteriores. El vendor de ETL era opaco por diseño. n8n tenía visualidad, pero no ofrecía diagnóstico útil en el momento de la caída. El sistema propio expuso señales operativas desde la interfaz.

**Recomendación**: Define las preguntas de operación antes de construir la automatización. Si no sabes qué debe ver el equipo cuando algo falla, todavía no estás diseñando un sistema productivo: estás diseñando una demo con suerte.

## De ver pantallas a entender comportamiento

Hay una diferencia importante entre interfaz y observabilidad. Una interfaz muestra algo. La observabilidad permite entender qué está pasando y por qué.

En el enfoque con n8n, el equipo podía ver flujos. Eso ayudaba a entender la intención: qué paso venía después de cuál, qué nodo conectaba con qué servicio, qué automatización debía ejecutarse. Pero cuando el sistema se caía, la interfaz dejaba de responder la pregunta central.

**Evidencia del caso**: En el diagnóstico de n8n, la charla declara que cuando se caía "no había logs útiles" y que el sistema "rebooteaba en silencio". La conclusión era "opacidad total en el momento que más importa."

La observabilidad como feature empieza justamente ahí: en el momento incómodo. No se prueba cuando todo sale bien, sino cuando el sistema necesita explicar una anomalía.

| Lo que se ve | Lo que falta si no hay observabilidad |
|---|---|
| Un flujo visual | Estado real por corrida, entidad y proveedor |
| Una corrida exitosa | Evidencia de qué se procesó y con qué consumo |
| Un error genérico | Causa probable, alcance y acción recomendada |
| Una métrica aislada | Tendencia, contexto y umbral útil |
| Un dashboard bonito | Decisiones que operación puede tomar sin pedir permiso |

**Inferencia**: La observabilidad no es una propiedad estética. Es una propiedad explicativa. Un sistema observable reduce el tiempo entre "algo pasó" y "sabemos qué hacer".

Esta diferencia cambia la forma de construir. Ya no se pide "un dashboard" como un accesorio. Se pide una superficie de diagnóstico: estado de vendors, última corrida, productos sincronizados, errores, memoria, CPU, red y acciones seguras.

**Recomendación**: Diseña cada dato visible con una pregunta asociada. Si una métrica no ayuda a decidir, es decoración. Si una pregunta crítica no tiene métrica, log o vista asociada, la operación todavía depende de intuición.

## CPU, memoria, red y errores

La diapositiva 11 muestra cuatro señales concretas: memoria, CPU, red y gráfico de RAM. La diapositiva 9 suma productos sincronizados, errores, última corrida y estado por vendor. Juntas forman una observabilidad mínima para una sincronización como esta.

**Evidencia del caso**:

| Métrica visible | Valor declarado |
|---|---|
| Memoria pico | 512 MB / 1 GB |
| CPU promedio 60s | 23% |
| Red de salida | 1,2 MB/s |
| RAM últimos 10 min | Gráfico en dashboard |
| Productos sincronizados | 8.014 |
| Errores | 0 |
| Última corrida | 12s |
| Vendors | vendor-a a vendor-e en OK |

Estas métricas cubren dos dimensiones. La primera es técnica: recursos, carga, red, memoria. La segunda es de negocio: productos, errores, vendors y corridas. Separarlas demasiado sería un error. En producción, ambas se explican mutuamente.

Si la memoria sube durante un proveedor específico, puede haber un problema de payload, paginación o acumulación innecesaria. Si la red cae pero la corrida sigue activa, puede haber timeout o espera de API externa. Si el CPU se mantiene bajo pero los tiempos crecen, quizá el cuello está en I/O o rate limits. Si los errores se concentran en un ERP, el problema no es global.

| Señal | Pregunta operativa | Posible acción |
|---|---|---|
| Memoria pico | ¿La corrida cabe en la instancia actual? | Ajustar chunks, streaming o tamaño de instancia |
| CPU promedio | ¿El proceso está limitado por cómputo? | Optimizar transformación o paralelismo |
| Red out | ¿La salida hacia destino es estable? | Revisar API, rate limits o payloads |
| Errores por vendor | ¿Qué fuente requiere atención? | Aislar proveedor y reintentar |
| Última corrida | ¿El sistema está fresco? | Disparar sync on-demand o investigar demora |
| Productos sincronizados | ¿El volumen coincide con lo esperado? | Detectar faltantes o duplicados |

**Inferencia**: La combinación de métricas técnicas y de dominio permitió dimensionar, diagnosticar y operar sin depender de una caja negra. El sistema no sólo decía "falló" o "funcionó"; mostraba señales para entender su estado.

**Recomendación**: No midas sólo infraestructura ni sólo negocio. Un dashboard operativo debe conectar ambas capas. La pregunta no es "cuánta RAM uso" ni "cuántos productos importé" por separado. La pregunta útil es: "¿qué relación hay entre volumen, proveedor, duración, errores y recursos?"

## Errores como insumo de aprendizaje

La vista de errores apareció en el capítulo anterior como parte del pedido inicial a los agentes. Aquí conviene darle más peso. En una integración viva, el error no es sólo una falla: es información sobre la distancia entre el modelo del sistema y la realidad del proveedor.

Un error bien capturado puede revelar un campo nuevo, una validación incompleta, un cambio de API, una excepción de stock, una imagen inválida o una regla de negocio que estaba sólo en la cabeza de alguien. Si el error queda visible, clasificado y vinculado a una entidad, puede convertirse en conocimiento. Si queda oculto, se convierte en desgaste.

**Evidencia del caso**: La diapositiva del enfoque 3 destaca "vista de errores para retroalimentar a la IA" como parte de las cero cajas negras.

Esa retroalimentación es una pieza clave. No se trata de que la IA corrija todo sola. Se trata de que los errores generen material útil para actualizar la knowledge base, ajustar validaciones, mejorar prompts, agregar tests o modificar reglas.

| Tipo de error | Qué debe capturar | Qué puede producir |
|---|---|---|
| Error de API | Endpoint, respuesta, proveedor, timestamp | Nota de contrato o manejo de retry |
| Error de datos | Campo, producto, regla violada | Validación o regla de normalización |
| Error de mapping | Origen, destino, transformación aplicada | Corrección en knowledge base |
| Error de recurso | Memoria, CPU, duración, chunk | Ajuste de procesamiento |
| Error de destino | Payload, respuesta de Modern Dropship o Shopify | Corrección de formato o reintento seguro |

**Inferencia**: La vista de errores vuelve al sistema más inteligente con el tiempo sólo si existe un ciclo de aprendizaje. Ver errores no alcanza. Hay que decidir qué errores se documentan, cuáles se reintentan, cuáles bloquean y cuáles actualizan reglas.

**Recomendación**: Trata cada error repetido como una deuda de conocimiento. Si un fallo aparece dos veces y no deja una regla, una nota o una validación, el sistema está desperdiciando aprendizaje.

## Costos basados en uso real

La observabilidad también cambia la conversación económica. Sin medición, el costo se discute con miedo. Con medición, se discute con evidencia.

**Evidencia del caso**: La diapositiva 10 declara que toda la sincronización corre cómoda en una EC2 micro, con medio giga de RAM en pico de carga. Compara una suscripción n8n + cloud de aproximadamente 100 USD o más al mes contra una infraestructura propia de 4 USD al mes.

Estos números son llamativos y deben tratarse con cuidado. No prueban que toda integración pueda costar 4 USD al mes. Sí prueban algo más útil: en este caso, medir recursos permitió dimensionar la infraestructura con precisión.

La frase clave de la diapositiva 11 es: "dimensionamos la infra observando uso real, no adivinando."

Ese es el principio. Cuando no se sabe cuánto consume un proceso, se suele pagar de más por seguridad o pagar de menos y sufrir caídas. En ambos casos, la decisión es reactiva. La observabilidad convierte el costo en una variable que puede ajustarse.

| Sin observabilidad | Con observabilidad |
|---|---|
| Se sobredimensiona por miedo | Se dimensiona por uso real |
| El costo mensual se acepta como paquete cerrado | El costo se vincula a carga, memoria, CPU y red |
| Las caídas se explican tarde | Los límites aparecen en métricas |
| La comparación de vendors es incompleta | Se compara costo contra control y diagnóstico |
| El ahorro se vende como promesa | El ahorro se presenta como resultado contextual |

**Inferencia**: La reducción de costo no vino sólo de "usar IA". Vino de ser dueño de la arquitectura, medir el consumo real y evitar pagar una plataforma recurrente que no resolvía el problema operativo.

**Decisión pendiente**: Antes de publicar, confirmar si se mantienen los valores exactos de 100 USD o más, 4 USD al mes, EC2 micro y 0,5 GB. En versión pública conviene aclarar que son datos del caso y que dependen de volumen, arquitectura, proveedor cloud, frecuencia de corrida y requisitos de disponibilidad.

**Recomendación**: No uses el costo bajo como primer argumento. Úsalo como consecuencia verificable de una arquitectura observable. Primero muestra qué se midió. Después muestra qué decisión de infraestructura permitió esa medición.

## La observabilidad como producto para operación

Un sistema observable no está diseñado sólo para developers. También está diseñado para quien tiene que operar el proceso.

En el caso de sincronización de catálogo, operación necesita responder preguntas simples, urgentes y concretas: ¿corrió?, ¿qué proveedor falló?, ¿cuántos productos entraron?, ¿qué errores quedan?, ¿puedo reintentar?, ¿el sistema está sano?, ¿hay que llamar a alguien?

Si cada respuesta exige abrir logs crudos, revisar una consola cloud o preguntarle a ingeniería, el sistema sigue dependiendo de especialistas. Puede ser técnicamente propio, pero operativamente estrecho.

**Evidencia del caso**: La diapositiva del enfoque 3 incluye dashboard, sync on-demand, vista de errores y estado OK por vendor. La diapositiva 11 agrega CPU y memoria en vivo "sobre el dashboard, sin add-ons ni vendors."

La frase "sobre el dashboard" es importante. La medición no quedó encerrada en herramientas externas. Apareció en la superficie donde el equipo toma decisiones.

| Usuario | Qué necesita ver | Qué decisión puede tomar |
|---|---|---|
| Operación | Estado por vendor, errores, última corrida | Reintentar, pausar o escalar |
| Ingeniería | Logs, métricas, payloads, recursos | Corregir causa raíz |
| Negocio | Productos sincronizados, salud general | Confiar en el catálogo o investigar |
| Finanzas/gestión | Consumo, costo mensual, tendencia | Evaluar TCO real |

**Inferencia**: La observabilidad integrada reduce dependencia interna. No elimina la necesidad de ingeniería, pero evita que ingeniería sea el único traductor del estado del sistema.

**Recomendación**: Diseña dashboards por decisión, no por organigrama. La misma métrica puede interesar a varios perfiles, pero cada perfil necesita contexto distinto. Operación quiere acción; ingeniería quiere causa; negocio quiere confianza; gestión quiere tendencia y costo.

## Umbrales, alertas y límites conocidos

Medir no alcanza si nadie sabe cuándo una medición importa. Un dashboard lleno de números puede seguir siendo confuso si no distingue normalidad de riesgo.

La observabilidad madura necesita umbrales. No necesariamente sofisticados al principio. Basta con responder: qué se considera sano, qué se considera sospechoso y qué requiere intervención.

En este caso, algunas preguntas de umbral aparecen de forma natural:

1. ¿Cuánta memoria pico es aceptable para una EC2 micro?
2. ¿Cuándo una corrida de 12 segundos deja de ser normal?
3. ¿Cuántos errores por proveedor obligan a pausar una integración?
4. ¿Qué caída de red indica problema externo?
5. ¿Qué diferencia entre productos esperados y sincronizados requiere revisión?
6. ¿Cuántos reintentos son seguros antes de escalar?

| Señal | Estado sano | Señal de alerta |
|---|---|---|
| Memoria | Pico estable y con margen | Crecimiento sostenido o cercano al límite |
| CPU | Uso compatible con carga esperada | Picos largos que degradan corridas |
| Red | Throughput estable por proveedor | Cortes, timeouts o caídas abruptas |
| Errores | Cero o casos conocidos aislados | Errores repetidos por ERP o proveedor |
| Duración | Similar a corridas previas | Aumento sin cambio de volumen |
| Volumen | Coincide con expectativa | Faltantes, duplicados o saltos bruscos |

**Inferencia**: La observabilidad tiene valor cuando permite detectar desviaciones. Para eso, el sistema debe acumular contexto histórico o, al menos, comparar cada corrida contra expectativas explícitas.

**Recomendación**: Empieza con umbrales simples y revisables. No esperes una plataforma perfecta de monitoreo para decidir qué significa "normal". Documenta los límites conocidos y actualízalos cuando el sistema aprenda.

## Por qué no hay operación sin diagnóstico

La palabra operación suele sonar menos atractiva que construcción. Construir tiene épica: una idea, una herramienta, una primera corrida exitosa. Operar es más silencioso: revisar, medir, ajustar, reintentar, explicar, sostener.

Pero en sistemas que tocan procesos críticos, operar es donde se prueba la arquitectura.

El caso completo puede leerse como una búsqueda de diagnóstico. El ETL tradicional no daba acceso suficiente. n8n daba control visual, pero no diagnóstico en las caídas. El enfoque con agentes y sistema propio entregó no sólo una sincronización, sino una forma de mirar la sincronización.

**Evidencia del caso**: La comparación final resume que agentes de IA ofrecían visibilidad total: logs, métricas y errores. También dice que el mantenimiento lo opera el equipo.

Eso es lo que separa automatización de capacidad operativa. Automatizar es hacer que algo ocurra. Operar es poder entenderlo, corregirlo y mejorarlo cuando deja de comportarse como esperabas.

| Automatización | Operación |
|---|---|
| Ejecuta un flujo | Sostiene un proceso |
| Celebra la corrida exitosa | Aprende de la corrida fallida |
| Reduce trabajo manual | Reduce incertidumbre |
| Puede ocultar complejidad | Expone complejidad manejable |
| Depende de que todo siga igual | Está preparada para cambios |

**Inferencia**: La observabilidad no es un lujo técnico porque sin diagnóstico no hay autonomía. Puede haber software funcionando, pero no capacidad interna.

**Recomendación**: Evalúa cualquier sistema crítico con una pregunta simple: si falla hoy, ¿quién puede explicar qué pasó con evidencia? Si la respuesta depende de una caja negra, un vendor o una persona que "más o menos sabe", la operación todavía está incompleta.

## Checklist de observabilidad mínima

Para una integración de catálogo, una observabilidad razonable debería cubrir al menos estas áreas:

| Área | Pregunta | Evidencia necesaria |
|---|---|---|
| Corrida | ¿Cuándo empezó, terminó y cuánto tardó? | Historial por ejecución |
| Fuente | ¿Qué proveedor y ERP participó? | Estado por vendor y ERP |
| Volumen | ¿Cuántos productos, variantes e imágenes se procesaron? | Conteos por entidad |
| Resultado | ¿Qué se sincronizó y qué quedó pendiente? | Resumen y detalle |
| Errores | ¿Qué falló y qué acción requiere? | Vista de errores clasificada |
| Recursos | ¿Cuánta CPU, memoria y red consumió? | Métricas técnicas por ventana |
| Reintentos | ¿Qué se reintentó y con qué resultado? | Registro de retries |
| Costos | ¿Qué infraestructura sostiene el proceso? | Consumo y costo mensual estimado |
| Cambios | ¿Qué versión de reglas o config corrió? | Referencia a commit/config |

Esta lista no obliga a construir una plataforma compleja desde el día uno. Obliga a no confundir "ya corre" con "ya se puede operar".

## Preguntas prácticas para el lector

Si tienes una automatización importante en producción, estas preguntas ayudan a medir su nivel real de observabilidad:

1. ¿Sabes qué pasó en la última corrida sin abrir logs crudos?
2. ¿Puedes ver errores por proveedor, entidad y tipo de fallo?
3. ¿El equipo de operación sabe cuándo reintentar y cuándo escalar?
4. ¿Tienes métricas de CPU, memoria, red y duración por carga real?
5. ¿Puedes explicar el costo mensual a partir del uso observado?
6. ¿Existe una vista de salud que negocio pueda entender?
7. ¿Los errores repetidos actualizan documentación, reglas o tests?
8. ¿Sabes qué versión de configuración produjo cada resultado?
9. ¿Hay umbrales que separen normalidad de riesgo?
10. ¿La herramienta explica sus fallos en el momento en que más importa?

La última pregunta conecta con todo lo anterior. Un sistema puede tener pantallas, flujos y automatización, pero si no explica sus fallos, todavía conserva una caja negra adentro.

## Lección aprendida

La observabilidad como feature significa que medir, explicar y operar son parte del producto. No viven fuera del sistema. No se agregan cuando algo se rompe. No dependen únicamente de un vendor externo ni de un especialista que mira logs en soledad.

**Evidencia del caso**: El sistema propio mostró memoria pico de 512 MB, CPU promedio de 23%, red de salida de 1,2 MB/s, última corrida de 12 segundos, cero errores y estado OK por vendor. Esos datos permitieron dimensionar infraestructura observando uso real y sostener una operación de bajo costo.

**Inferencia**: La ventaja no fue sólo ahorrar frente a una suscripción. Fue cambiar la base de decisión: de adivinar a medir, de depender a diagnosticar, de ejecutar flujos a operar un sistema.

**Recomendación**: Si una automatización importa, construye su observabilidad junto con ella. La primera versión no necesita ser perfecta, pero sí debe responder las preguntas que sostienen la operación: qué pasó, dónde pasó, cuánto costó, qué consume, qué falló y qué hacemos ahora.

El siguiente capítulo aborda otra consecuencia del sistema propio: las interfaces operativas con IA. Una vez que el conocimiento está estructurado y la observabilidad existe, la pregunta deja de ser sólo cómo corre el sistema. También importa cómo un operador lo configura, incorpora nuevos vendors y cambia flujos sin tocar variables dispersas ni depender de un developer para cada ajuste.
