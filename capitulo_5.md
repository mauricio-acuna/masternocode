# Capítulo 5: Enfoque 3: knowledge base y agentes de IA

## El trabajo invisible antes de la IA

El tercer enfoque es el más fácil de malinterpretar. Si se cuenta rápido, parece una historia de sustitución: antes había un vendor opaco, después una herramienta low-code que no escaló, y finalmente llegaron agentes de IA que resolvieron el problema. Esa versión es cómoda, pero incompleta.

Lo importante no fue que "la IA lo hizo". Lo importante fue qué recibió la IA antes de hacer algo útil.

**Evidencia del caso**: La diapositiva previa al giro hacia agentes se titula "El trabajo que nadie quiere hacer" y declara: "Organizamos toda la documentación. Esto fue el arma secreta."

Esa frase cambia el centro de gravedad del caso. El arma secreta no fue un modelo específico, una librería brillante ni una interfaz futurista. Fue una knowledge base organizada: documentación de APIs, mapeo vendor -> ERP, notas cruzadas y saber tribal convertido en texto.

En una integración como esta, el conocimiento suele estar disperso. Una parte vive en documentación oficial. Otra vive en correos, tickets, conversaciones, pruebas fallidas y memoria del equipo. Otra aparece recién cuando el sistema se rompe: un proveedor que pagina distinto, un ERP que usa nombres raros, una imagen que llega en un formato inesperado, una regla de stock que nadie escribió.

Cuando ese conocimiento no se captura, cada intento tecnológico arranca débil. El vendor de ETL lo encierra. La herramienta low-code lo reparte entre nodos y ajustes. El equipo humano lo recuerda a medias. Los agentes, si no reciben contexto, improvisan.

**Inferencia**: El cambio decisivo del tercer enfoque fue convertir conocimiento disperso en insumo operativo. La IA no reemplazó el entendimiento del dominio; lo amplificó cuando ese entendimiento quedó escrito, estructurado y disponible.

**Recomendación**: Antes de pedirle a un agente que construya, pide al equipo que organice lo que ya sabe. Si el conocimiento crítico no puede leerse, versionarse y corregirse, todavía no es una base: es conversación acumulada.

## La knowledge base como arquitectura

En proyectos de IA se habla mucho de prompts, modelos y agentes. Se habla menos de la forma del conocimiento que esos agentes consumen. En este caso, esa forma fue explícita.

**Evidencia del caso**:

```text
knowledge-base/
├─ modern-dropship/
│  ├─ supplier-api.md
│  └─ webhooks.md
├─ vendors/
│  ├─ vendor-a/ -> ERP-X
│  ├─ vendor-b/ -> ERP-X
│  ├─ vendor-c/ -> ERP-Y
│  ├─ vendor-d/ -> ERP-Y
│  └─ vendor-e/ -> ERP-Z
├─ erps/
│  ├─ erp-x.md
│  ├─ erp-y.md
│  └─ erp-z.md
└─ cross-vendor-notes.md <- saber tribal
```

Esta estructura no es accidental. Separa el destino, los proveedores, los ERPs y las notas transversales. Esa separación permite que el sistema responda preguntas distintas sin mezclar niveles.

| Bloque de la base | Qué captura | Por qué importa |
|---|---|---|
| `modern-dropship/` | Contratos del destino, supplier API y webhooks | Define cómo debe verse un proveedor integrado |
| `vendors/` | Particularidades por proveedor | Evita tratar cinco fuentes como si fueran iguales |
| `erps/` | Patrones compartidos por sistema de origen | Permite reutilizar aprendizajes entre vendors |
| `cross-vendor-notes.md` | Saber tribal y errores repetibles | Convierte memoria informal en regla revisable |

La decisión de mapear vendor -> ERP es especialmente importante. Si dos proveedores usan el mismo ERP, un bug o una rareza puede repetirse. Si el sistema sabe eso, puede reutilizar patrones. Si no lo sabe, cada proveedor parece un caso nuevo.

**Inferencia**: La knowledge base funcionó como una capa arquitectónica antes de que existiera el sistema visible. No era sólo documentación de apoyo; era el mapa de responsabilidades que permitió diseñar el sincronizador, el dashboard, la vista de errores y los flujos de operación.

Este punto también corrige una fantasía frecuente sobre agentes: no basta con darles una consigna grande. "Construye una sincronización de 8.000 productos" es una orden ambigua. "Aquí están los contratos del destino, las APIs de origen, las equivalencias por ERP, las notas cruzadas y las reglas raras que ya conocemos" es otra categoría de entrada.

**Recomendación**: Diseña la knowledge base con la misma seriedad con la que diseñarías una API interna. Debe tener fronteras claras, nombres consistentes, ejemplos, reglas y notas de decisión. Si una persona nueva no puede aprender de ella, un agente tampoco debería ser la primera línea de interpretación.

## Markdown como formato humano y parseable

La diapositiva nombra una decisión simple: Markdown plano. Puede parecer un detalle menor, pero en este caso tiene peso estratégico.

**Evidencia del caso**: La base se describe como "Markdown plano: leíble por humanos, parseable por agentes."

Markdown tiene una virtud rara: no exige elegir entre documentación para personas y documentación para máquinas. Un operador puede abrir un archivo y entenderlo. Un developer puede versionarlo en Git. Un agente puede leerlo, resumirlo, extraer reglas y proponer cambios. El formato no resuelve la calidad del contenido, pero reduce fricción.

Esto importa porque el conocimiento de integración cambia. Un proveedor modifica un endpoint. Otro expone un campo nuevo. Un mapping se corrige. Una nota de ERP-X también aplica a vendor-a y vendor-b. Si la base vive en un formato pesado, encerrado o demasiado visual, cada actualización compite contra la inercia. Si vive en texto plano, actualizarla se parece más a corregir código.

| Decisión | Ventaja operativa | Riesgo si se descuida |
|---|---|---|
| Markdown plano | Fácil de leer, versionar y entregar a agentes | Documentación sin estructura puede volverse ruido |
| Carpetas por dominio | Ubica rápido destino, vendors y ERPs | La estructura puede duplicar reglas si no hay criterio |
| Notas cruzadas | Captura bugs y patrones compartidos | Puede convertirse en cajón de sastre |
| Git como historial | Permite ver qué cambió y cuándo | Requiere disciplina mínima de commits y revisión |

**Inferencia**: La elección de Markdown no fue sólo comodidad. Fue una forma de mantener la base dentro del flujo normal de ingeniería: texto, revisión, cambios pequeños, historial y reutilización.

La clave está en no confundir formato simple con contenido pobre. Una buena knowledge base para agentes necesita más que archivos sueltos. Necesita contratos claros, ejemplos de payloads, reglas de validación, casos límite, decisiones tomadas y dudas abiertas.

**Recomendación**: Si vas a preparar una base para agentes, escribe para dos lectores al mismo tiempo: una persona que tiene que operar el sistema mañana y un agente que tiene que usar esa información sin inventar huecos. La prueba de calidad es sencilla: si una regla no está escrita, no deberías asumir que el sistema la conoce.

## Agentes con contexto

Después de organizar la base, el equipo pudo hacer una petición más concreta.

**Evidencia del caso**: La diapositiva del enfoque 3 dice: "Le dimos el knowledge base a nuestros agentes. Pedimos dashboard, visibilidad, sync on-demand y vista de errores."

La frase contiene dos partes. Primero, se entrega contexto. Después, se pide una herramienta operativa. El orden importa.

Sin knowledge base, un agente puede generar código que parece correcto pero no entiende el dominio. Puede conectar endpoints, crear pantallas y escribir transformaciones genéricas. Pero en una sincronización multi-proveedor, el valor no está en producir archivos; está en respetar reglas concretas: cómo se modela stock, qué proveedores comparten ERP, qué errores son recuperables, qué significa que una corrida terminó bien, qué debe ver operación cuando algo falla.

Con contexto, la conversación cambia. El agente deja de trabajar desde una consigna vaga y empieza a trabajar desde una representación del sistema.

| Entrada débil para un agente | Entrada fuerte para un agente |
|---|---|
| "Haz un sync de productos" | "Estos son los contratos, ERPs, vendors y reglas conocidas" |
| "Agrega logs" | "Necesito logs por vendor, corrida, producto y tipo de error" |
| "Haz un dashboard" | "El operador debe ver productos, errores, memoria, última corrida y estado por vendor" |
| "Que sea escalable" | "Debe procesar 8.000 productos, reintentar fallos y mostrar checkpoints" |

**Inferencia**: El desarrollo agéntico funcionó porque el equipo invirtió en inputs correctos. La IA aceleró la construcción visible, pero la dirección del sistema vino de la base, del diagnóstico de los enfoques anteriores y de las preguntas operativas correctas.

Este matiz protege al capítulo de una lectura mágica. La IA no aparece como sustituto de arquitectura, sino como herramienta de ejecución y síntesis sobre una base de conocimiento ya curada.

**Evidencia del caso**: La comparación final indica para agentes de IA: "10-12 h base + 2 h build". La diapositiva del enfoque 3 aclara que las 2 horas corresponden a "desarrollo agéntico, no de tipear código humano."

**Recomendación**: Mide el trabajo de IA en dos tiempos: preparación de contexto y construcción visible. Si sólo cuentas el segundo, puedes vender una ilusión peligrosa. Si reconoces el primero, entiendes dónde está el nuevo oficio: preparar el terreno para que la IA pueda producir algo operable.

## Dashboard, sync on-demand y vista de errores

El resultado no fue sólo una sincronización que corrió. Fue una sincronización con una superficie operativa.

**Evidencia del caso**: La diapositiva del enfoque 3 muestra un dashboard con 8.014 productos sincronizados, 0 errores, memoria pico de 512 MB, última corrida de 12 segundos y vendors a-e en estado OK.

Esos datos importan porque responden a las preguntas que los enfoques anteriores no respondían. El vendor de ETL escondía el flujo. n8n permitía ver la intención del flujo, pero fallaba sin logs útiles. El tercer enfoque expuso señales de operación desde el diseño.

| Señal visible | Pregunta que responde |
|---|---|
| Productos sincronizados | ¿Cuánto procesó el sistema? |
| Errores | ¿Hay fallos pendientes de revisar? |
| Memoria pico | ¿La infraestructura está dimensionada con margen? |
| Última corrida | ¿Cuándo se ejecutó y cuánto tardó? |
| Estado por vendor | ¿Qué fuente está sana y cuál requiere atención? |
| Sync on-demand | ¿Puede operación disparar una corrida controlada? |
| Vista de errores | ¿Qué debe corregirse o retroalimentarse a la IA? |

El dashboard no es decoración. Es una respuesta arquitectónica a los fracasos anteriores. Si el problema fue opacidad, la solución debe producir visibilidad. Si el problema fue caída sin diagnóstico, la solución debe exponer errores. Si el problema fue dependencia del vendor, la solución debe permitir que el equipo opere.

**Inferencia**: El éxito del tercer enfoque no debe medirse sólo por "anduvo". Debe medirse por la combinación de ejecución, explicación y control. En producción, un sistema que completa una corrida pero no permite diagnosticar la siguiente sigue siendo frágil.

La vista de errores tiene un valor adicional: retroalimenta la base y los agentes. Un error bien clasificado puede convertirse en una nota de knowledge base, una regla nueva, una validación o un test. Un error silencioso sólo consume confianza.

**Recomendación**: Cuando pidas una herramienta a un agente, no pidas únicamente la acción principal. Pide la operación completa: estado, errores, reintentos, métricas, historial y controles seguros. La interfaz debe mostrar lo que el equipo necesita para decidir, no sólo lo que queda bien en una demo.

## Primera corrida y prudencia editorial

La cifra más potente del capítulo es también la que requiere más cuidado.

**Evidencia del caso**: La diapositiva declara: "8.000 productos en la primera corrida: sin caídas. Andó bien en el primer intento." También afirma: "0 cajas negras: visibilidad completa, sync on-demand, vista de errores para retroalimentar a la IA."

El dato es fuerte porque contrasta con los dos enfoques anteriores. Meses de vendor opaco. Unas 60 horas de n8n con caídas repetidas. Luego una primera corrida exitosa con agentes apoyados en knowledge base.

Pero una obra técnica seria no convierte un caso en garantía universal. Este resultado pertenece a un contexto: volumen específico, proveedores específicos, ERPs específicos, equipo específico, base preparada y objetivo bien delimitado.

**Decisión pendiente**: Antes de publicar, validar si se conservarán las cifras exactas de 8.014 productos, 512 MB, 12 segundos, 2 horas y 4 USD/mes, y bajo qué nota editorial. En borrador interno funcionan como evidencia del caso; en versión pública conviene aclarar contexto para evitar lectura de promesa comercial.

| Claim tentador | Formulación más responsable |
|---|---|
| "Los agentes siempre ganan" | "En este caso, los agentes ganaron porque recibieron una base sólida" |
| "La IA construyó todo en 2 horas" | "La construcción visible tomó 2 horas después de preparar la base" |
| "Cualquier integración puede costar 4 USD/mes" | "Esta integración corrió con ese costo en el contexto descrito" |
| "No-code ya no sirve" | "Este flujo exigía control y observabilidad que los enfoques previos no entregaron" |

**Inferencia**: La victoria del enfoque 3 no fue sólo tecnológica. Fue metodológica. El equipo aprendió de los fracasos anteriores, convirtió conocimiento en base reutilizable y pidió a la IA una herramienta orientada a operación.

**Recomendación**: Usa los números como evidencia, no como slogan. Los números son útiles cuando ayudan a preguntar mejor: qué se preparó, qué se midió, qué cambió, qué límites tenía el caso y qué condiciones habría que replicar para esperar algo parecido.

## Qué significa que el sistema sea propio

La tesis de la charla dice que hoy se construyen soluciones transparentes, observables y baratas de operar "que son nuestras". Esa última parte puede sonar posesiva, pero en realidad habla de responsabilidad.

Un sistema propio no significa necesariamente escribir cada línea desde cero. Significa que el equipo conserva control sobre las reglas críticas, la observabilidad, el despliegue, el costo y la evolución. Puede usar APIs externas, plataformas, modelos de IA y servicios cloud. Lo que no delega a ciegas es el entendimiento de su operación.

**Evidencia del caso**: En la comparación final, agentes de IA aparece con visibilidad total, logs, métricas y errores; mantenimiento operado por el equipo; escala de 8.000 productos; y costo recurrente de 4 USD/mes.

La propiedad se ve en decisiones concretas:

| Dimensión | Sistema propio en este caso |
|---|---|
| Conocimiento | La base documenta APIs, ERPs, vendors y saber tribal |
| Operación | El equipo ve estado, errores y métricas |
| Ejecución | Hay sync on-demand y control sobre corridas |
| Infraestructura | El consumo real permite dimensionar con evidencia |
| Mantenimiento | Los cambios vuelven a la base y al sistema |
| Salida | Las reglas quedan en archivos legibles, no atrapadas en una caja negra |

**Inferencia**: La propiedad real no está en evitar todo proveedor. Está en evitar que el corazón operativo del negocio quede encerrado en lugares que el equipo no puede inspeccionar, aprender ni modificar.

Esta distinción es importante para no caer en una nueva ortodoxia. El mensaje no es "compra nada" ni "construye todo". El mensaje es: identifica dónde está el conocimiento crítico y asegúrate de que ese conocimiento siga siendo tuyo, visible y operable.

**Recomendación**: Antes de decidir buy, build, low-code o agentes, pregunta qué parte del sistema debe convertirse en capacidad interna. Si una regla define cómo opera tu negocio, debería estar documentada y gobernada por tu equipo, aunque la implementación use piezas externas.

## Checklist para preparar agentes en una integración real

Antes de pedir a agentes que construyan una alternativa a una caja negra, conviene revisar si el terreno está listo.

| Criterio | Pregunta | Señal de alerta |
|---|---|---|
| Contexto | ¿Existe una base con APIs, vendors, ERPs y reglas? | El conocimiento vive en conversaciones |
| Estructura | ¿La documentación está separada por dominio? | Todo está en un documento largo y ambiguo |
| Ejemplos | ¿Hay payloads, errores y casos límite? | Sólo hay descripción conceptual |
| Operación | ¿Sabemos qué debe ver el dashboard? | Se pide "visibilidad" sin definir señales |
| Errores | ¿Los fallos tienen clasificación accionable? | Todo error termina en revisión manual genérica |
| Reintentos | ¿El sync puede repetirse sin duplicar o romper datos? | Una caída obliga a empezar de cero |
| Métricas | ¿Se miden recursos y tiempos reales? | El costo se estima por intuición |
| Actualización | ¿La base se corrige después de cada incidente? | La documentación se congela tras el build |
| Claims | ¿Los resultados se presentan con contexto? | El caso se convierte en promesa universal |

Esta checklist también sirve como filtro comercial. Si un cliente quiere "usar IA" pero no puede responder estas preguntas, el primer proyecto quizá no sea construir agentes. Quizá sea crear la base que hará útiles a esos agentes.

## Preguntas prácticas para el lector

Si estás considerando agentes para reemplazar o complementar una integración existente, empieza por estas preguntas:

1. ¿Qué sabe hoy el equipo que no está escrito en ningún lugar?
2. ¿Qué proveedores comparten patrones técnicos o reglas de negocio?
3. ¿Qué documentación de APIs está vigente y cuál está desactualizada?
4. ¿Qué errores se repiten y cómo se resuelven?
5. ¿Qué debe poder ver operación sin llamar a ingeniería?
6. ¿Qué acciones deberían estar disponibles on-demand?
7. ¿Qué datos necesita una vista de errores para ser accionable?
8. ¿Qué métricas demostrarían que la infraestructura está bien dimensionada?
9. ¿Qué parte del sistema debe quedar versionada en texto?
10. ¿Qué resultado del caso propio no deberías convertir en promesa universal?

Estas preguntas ayudan a poner la IA en su lugar correcto. No como atajo para evitar entender el problema, sino como acelerador cuando el problema ya fue observado, documentado y formulado con precisión.

## Lección aprendida

El tercer enfoque enseña la lección central de la obra: la IA cambia la economía de construir software, pero no elimina la necesidad de criterio. Al contrario, vuelve más valioso preparar buenos inputs, separar conocimiento de ruido y pedir sistemas que se puedan operar.

**Evidencia del caso**: El equipo organizó la documentación en una knowledge base, la entregó a agentes y pidió dashboard, visibilidad, sync on-demand y vista de errores. El resultado declarado fue una primera corrida de 8.000 productos sin caídas, visibilidad completa y cero cajas negras.

**Inferencia**: La diferencia no estuvo sólo en la herramienta. Estuvo en pasar de probar plataformas a diseñar una capacidad propia: conocimiento estructurado, agentes con contexto e interfaz operativa.

**Recomendación**: No empieces por "qué agente usamos". Empieza por "qué conocimiento debe capturar el sistema". Después pregunta qué interfaz necesita operación, qué métricas necesita negocio y qué errores deben volver a la base. Ahí la IA deja de ser promesa y se vuelve parte de un método.

El siguiente capítulo profundiza en una de las consecuencias más importantes de este giro: cuando el sistema es propio, la observabilidad puede dejar de ser un agregado tardío y convertirse en una feature central. Medir CPU, memoria, red, errores y costos reales no es un lujo técnico; es lo que permite operar con criterio.
