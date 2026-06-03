# Capítulo 4: Enfoque 2: herramienta low-code de workflows y el punto medio frágil

## Por qué parecía una buena opción

Después del primer intento con un vendor de ETL, el problema parecía claro: había que salir de la caja negra. El cliente necesitaba una capa de sincronización que pudiera verse, ajustarse y mantenerse sin depender de un especialista externo. En ese contexto, herramienta low-code de workflows aparecía como una alternativa razonable.

La promesa era atractiva: flujos visuales, cloud-hosted, mantenibles por el equipo, sin una caja negra comercial alrededor y sin el mismo nivel de lock-in del vendor anterior. Para un caso con cinco proveedores, tres ERPs, APIs custom y un destino común, una herramienta visual de automatización podía parecer el punto medio natural entre comprar una solución cerrada y escribir todo desde cero.

**Evidencia del caso**: La diapositiva del enfoque 2 presenta herramienta low-code de workflows como "el punto medio que prometía mucho" y resume la expectativa: "Flujos visuales, cloud-hosted, mantenibles por nosotros. Sin caja negra. Sin vendor lock-in."

**Inferencia**: El movimiento tenía sentido. No era una decisión ingenua. Venía de una frustración real con la opacidad del ETL tradicional y buscaba recuperar control operativo sin caer de inmediato en una implementación custom completa.

La discusión importante no es "herramienta low-code de workflows sí" o "herramienta low-code de workflows no". La discusión es qué tipo de problema se está intentando resolver. Una herramienta low-code puede ser excelente para conectar servicios, automatizar procesos internos, prototipar flujos o coordinar tareas de negocio. Pero una sincronización de catálogo multi-proveedor con miles de productos, errores parciales, estado intermedio, reintentos, imágenes, variantes y stock exige algo más que visualidad.

**Recomendación**: Evalúa una herramienta low-code por la operación que tendrá que sostener, no sólo por la velocidad con la que permite dibujar el primer flujo.

## Qué se probó

El segundo enfoque no falló por falta de esfuerzo. El equipo intentó llevar herramienta low-code de workflows a producción con varias estrategias. Eso es relevante porque separa un abandono prematuro de un diagnóstico técnico.

**Evidencia del caso**: La charla declara que se construyeron 8.000 productos de cinco proveedores y luego enumera intentos concretos: paginar por chunks, usar la nueva feature de data tables, correrlo en su cloud, dockerizarlo en máquinas locales y self-hostearlo en instancias más grandes.

| Intento | Qué buscaba resolver | Qué revela del problema |
|---|---|---|
| Paginar por chunks | Reducir presión de memoria y tamaño de ejecución | El volumen importaba, pero no era el único factor |
| Data tables | Manejar datos intermedios dentro de la herramienta | El estado del proceso necesitaba persistencia y control |
| Cloud-hosted | Delegar infraestructura a la plataforma | El problema no se resolvía sólo con hosting administrado |
| Docker local | Ganar control sobre ejecución y entorno | La operación requería inspección más profunda |
| Self-hosting en instancias más grandes | Aumentar recursos disponibles | Más capacidad puede retrasar el fallo sin explicar su causa |

**Inferencia**: La secuencia muestra una búsqueda progresiva. Primero se intentó ajustar la forma de procesar datos. Luego se probaron capacidades nuevas de la herramienta. Después se cambiaron modos de despliegue. Finalmente se aumentó infraestructura. Cuando una solución sobrevive sólo a base de mover el límite de caída, todavía no hay sistema productivo: hay experimentos alrededor de una fragilidad no entendida.

La diapositiva comparativa agrega otro dato: herramienta low-code de workflows tomó alrededor de 60 horas. Eso no significa que todas esas horas fueran inútiles. Significa que el equipo invirtió tiempo real antes de concluir que la herramienta no llegaba al nivel de escala y diagnóstico que el caso necesitaba.

**Recomendación**: Cuando pruebes una herramienta para producción, registra no sólo si funcionó, sino qué tuviste que cambiar para que funcionara. La lista de ajustes suele revelar el tipo de deuda operativa que estás acumulando.

## Dónde falló

La frase más importante del relato no es técnica, pero es precisa: "Y se cayó. Y se cayó de nuevo. Y se cayó otra vez."

En una integración de catálogo, una caída no es necesariamente grave si el sistema puede explicar qué ocurrió, reintentar de forma segura y continuar desde un punto conocido. El problema aparece cuando la caída corta el aprendizaje. Si el equipo no sabe qué producto, qué proveedor, qué chunk, qué transformación o qué recurso provocó el fallo, cada reintento se parece demasiado a una apuesta.

**Evidencia del caso**: La diapositiva de diagnóstico afirma: "A cierto volumen de datos, simplemente no escala."

**Inferencia**: El límite no debe leerse como una verdad universal sobre herramienta low-code de workflows en cualquier contexto. Debe leerse como una observación del caso: para esta sincronización, con este volumen, esta heterogeneidad y estas necesidades de operación, el enfoque no sostuvo la carga con suficiente confiabilidad.

El fallo también muestra una diferencia entre automatizar un flujo y diseñar un motor de sincronización. Un flujo visual puede describir pasos: llamar API, transformar, cargar, registrar. Un motor de sincronización debe sostener invariantes operativas: idempotencia, reintentos, checkpoints, aislamiento por proveedor, trazabilidad por entidad, límites de memoria, manejo de errores recuperables y visibilidad por corrida.

| Automatización visual | Sincronización productiva |
|---|---|
| Optimizada para expresar pasos | Optimizada para sostener operación |
| Buena para flujos lineales o moderados | Necesita manejar volumen, estado y fallos parciales |
| La interfaz muestra el diseño | La observabilidad muestra el comportamiento real |
| El éxito suele verse en una corrida completa | El valor aparece cuando algo falla y se puede diagnosticar |
| Puede depender de semánticas internas de la herramienta | Debe exponer contratos y datos propios del dominio |

**Recomendación**: Si el proceso es crítico, pregunta qué pasa después de una caída. ¿Se puede reanudar? ¿Se puede saber qué quedó pendiente? ¿Hay riesgo de duplicar productos, stock o variantes? ¿El operador puede distinguir entre error de datos, error de API y error de infraestructura?

## Observabilidad ausente

La caída por sí sola no condena una herramienta. La falta de observabilidad sí cambia la conversación.

**Evidencia del caso**: Cuando herramienta low-code de workflows se caía, "no había logs útiles". El sistema "rebooteaba en silencio" y el equipo entraba cinco minutos después "sin saber qué pasó". La diapositiva lo resume con una frase fuerte: "Opacidad total en el momento que más importa."

Esta es la ironía del segundo enfoque. herramienta low-code de workflows se eligió para escapar de una caja negra comercial, pero bajo presión terminó produciendo otra forma de opacidad: una caja negra operativa. El equipo podía ver el flujo, pero no podía entender el comportamiento real del sistema en el instante crítico.

**Inferencia**: La visibilidad visual no equivale a observabilidad. Ver nodos conectados ayuda a entender intención. Ver logs, métricas, errores, estado intermedio y recursos ayuda a operar realidad.

Para este caso, la observabilidad mínima debía responder preguntas como estas:

| Pregunta operativa | Por qué importa |
|---|---|
| ¿Qué proveedor estaba corriendo cuando cayó? | Aisla el problema por fuente |
| ¿Qué chunk o página falló? | Permite reintentar sin repetir todo |
| ¿Qué producto o variante estaba en proceso? | Evita pérdida silenciosa de entidades |
| ¿Fue error de datos, API, red, memoria o timeout? | Define quién puede resolverlo |
| ¿Qué quedó sincronizado y qué quedó pendiente? | Protege consistencia del catálogo |
| ¿Cuánta memoria y CPU había antes de caer? | Permite dimensionar con evidencia |
| ¿Qué cambió entre la corrida anterior y la actual? | Ayuda a detectar regresiones |

Sin esas respuestas, el equipo queda atrapado en una paradoja: tiene más acceso que con el vendor de ETL, pero no necesariamente más capacidad de diagnóstico.

**Recomendación**: Antes de poner un flujo low-code en una operación crítica, define el contrato de observabilidad. No lo trates como un add-on. Decide qué logs, métricas, checkpoints y vistas de error necesita el negocio para confiar en el proceso.

## Cuando low-code no alcanza para producción

Low-code no falla por ser visual. Falla cuando se usa para esconder complejidad que en realidad necesita diseño explícito.

En este caso, la complejidad no estaba sólo en conectar APIs. Estaba en normalizar esquemas, procesar volumen, manejar estado, detectar errores parciales y explicar fallos. Esas responsabilidades son demasiado importantes para quedar dispersas en nodos visuales si la herramienta no expone suficiente control sobre ejecución, memoria, reintentos y diagnóstico.

**Evidencia del caso**: En la comparación final, herramienta low-code de workflows aparece con estos atributos: tiempo aproximado de 60 horas, costo recurrente de suscripción más cloud, visibilidad aparente hasta que se cae, mantenimiento frágil al cambio de versión y escala que no llegó.

**Inferencia**: El costo de herramienta low-code de workflows no era sólo la suscripción. Era la incertidumbre operativa. Cuando la herramienta no explica sus fallos, cada caída consume tiempo de ingeniería, confianza del cliente y energía del equipo.

La fragilidad al cambio de versión también importa. En herramientas visuales, parte del comportamiento vive en la plataforma: nodos, conectores, features nuevas, semánticas de ejecución, límites internos y decisiones de UI. Si un flujo depende demasiado de esos detalles, mantenerlo puede volverse delicado. No porque el equipo no sepa programar, sino porque el comportamiento real no siempre está expresado en código propio, testeable y versionable con la misma granularidad.

**Nota editorial**: Esta versión usa una categoría genérica para la herramienta low-code de workflows. La crítica debe leerse como observación del caso, no como afirmación universal sobre una plataforma específica.

## Cuándo herramienta low-code de workflows sí puede ser una buena opción

Para que la crítica sea útil, hay que evitar la caricatura. herramienta low-code de workflows puede ser una gran herramienta cuando el problema encaja con su zona natural.

Puede funcionar muy bien para:

1. Automatizaciones internas de bajo o mediano volumen.
2. Conexiones entre SaaS donde el error no compromete una operación crítica.
3. Flujos disparados por eventos humanos o administrativos.
4. Prototipos que validan rápidamente un proceso.
5. Integraciones donde los datos son pequeños, estables y fáciles de reintentar.
6. Operaciones donde los logs disponibles alcanzan para diagnosticar.
7. Equipos que necesitan que negocio y tecnología compartan una vista del flujo.
8. Casos donde el estado crítico vive fuera de la herramienta, en sistemas observables.

El problema aparece cuando se le pide actuar como núcleo productivo de una sincronización pesada sin el nivel de observabilidad y control que ese rol exige.

**Recomendación**: No descartes low-code por principio. Úsalo donde acelera sin quitarte capacidad de operar. Y cuando el flujo empiece a contener reglas críticas del negocio, evalúa si esas reglas deben migrar a una capa propia, testeable y observable.

## Checklist de readiness para low-code en producción

Antes de convertir un flujo visual en infraestructura crítica, conviene pasarlo por una lista incómoda:

| Criterio | Pregunta | Señal de alerta |
|---|---|---|
| Volumen | ¿La herramienta fue probada con carga real? | Sólo se probó con muestras pequeñas |
| Reintentos | ¿Puedo reanudar desde el último punto seguro? | Cada caída obliga a correr todo de nuevo |
| Idempotencia | ¿Puedo repetir una operación sin duplicar datos? | El reintento puede crear inconsistencias |
| Logs | ¿Hay logs útiles por entidad, proveedor y corrida? | Sólo hay error genérico o reboot silencioso |
| Métricas | ¿Veo CPU, memoria, tiempos y red durante la corrida? | El dimensionamiento se hace a ciegas |
| Estado | ¿Dónde vive el estado intermedio? | Queda implícito dentro de la herramienta |
| Versiones | ¿Un cambio de versión puede romper el flujo? | No hay estrategia clara de regresión |
| Salida | ¿Puedo migrar reglas y datos si necesito salir? | La lógica queda demasiado acoplada a nodos |
| Operación | ¿Quién entiende el fallo a las 3 de la tarde de un lunes? | Sólo ingeniería puede mirar, y aun así sin datos |

Esta checklist no busca asustar. Busca ubicar cada herramienta en su lugar correcto. Un flujo visual puede ser excelente como interfaz de automatización, pero si se convierte en el punto donde vive la verdad operativa del negocio, debe comportarse como infraestructura.

## Preguntas prácticas para el lector

Si tu equipo usa o evalúa low-code para procesos críticos, estas preguntas ayudan a separar velocidad inicial de capacidad productiva:

1. ¿Qué parte del proceso puede fallar sin afectar al cliente?
2. ¿Qué parte requiere trazabilidad completa?
3. ¿Dónde vive el estado de cada entidad procesada?
4. ¿Qué ocurre si el flujo se corta a mitad de una corrida?
5. ¿Hay logs suficientes para reconstruir el incidente?
6. ¿El operador puede ver errores accionables sin pedir ayuda técnica?
7. ¿Qué métricas de recursos se registran durante carga real?
8. ¿Qué reglas de negocio están escondidas en nodos visuales?
9. ¿Cómo se prueban cambios antes de producción?
10. ¿Qué costo tiene migrar si la herramienta deja de alcanzar?

La pregunta de fondo no es si low-code es profesional o no. La pregunta es si el sistema resultante permite aprender, corregir y sostener la operación cuando la realidad deja de parecerse a la demo.

## Lección aprendida

El segundo enfoque enseña una lección más sutil que el primero. El ETL tradicional era una caja negra evidente: el cliente no podía entrar. herramienta low-code de workflows parecía lo contrario: flujos visibles, control del equipo, menos dependencia. Pero en producción, cuando el sistema se caía sin logs útiles, la opacidad volvía por otra puerta.

**Evidencia del caso**: El equipo probó chunks, data tables, cloud, Docker local y self-hosting en instancias más grandes. Aun así, a cierto volumen, el sistema no escaló y no explicó bien sus fallos.

**Inferencia**: La transparencia no es una propiedad estética de la interfaz. Es una propiedad operativa del sistema. No alcanza con ver cómo debería funcionar; hay que poder saber qué hizo, qué no hizo, dónde falló y cómo recuperarse.

**Recomendación**: Usa herramientas visuales para acelerar donde el riesgo lo permita, pero no confundas visualidad con control. En procesos críticos, la observabilidad debe diseñarse desde el inicio.

El siguiente capítulo muestra el giro que sí funcionó. Pero el punto de partida no fue pedirle magia a la IA. Fue hacer el trabajo que nadie quería hacer: ordenar documentación, capturar conocimiento tribal y convertirlo en una knowledge base que humanos y agentes pudieran usar.
