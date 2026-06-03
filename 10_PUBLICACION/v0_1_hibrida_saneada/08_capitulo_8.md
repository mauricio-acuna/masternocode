# Capítulo 8: El nuevo oficio del developer

## La pregunta dejó de ser code o no-code

Esta obra empezó con una tensión conocida: code contra no-code, construir contra comprar, escribir software contra usar plataformas visuales. El caso mostró que esa tensión era útil para iniciar la conversación, pero insuficiente para decidir.

El vendor de ETL prometía resolver el problema sin que el cliente tuviera que mirar dentro. herramienta low-code de workflows prometía control visual, velocidad y menor dependencia. Los agentes de IA prometían otra forma de construir, pero sólo funcionaron cuando recibieron una knowledge base organizada, objetivos operativos claros y una interfaz observable.

El aprendizaje no es que una categoría ganó para siempre. El aprendizaje es que la pregunta correcta cambió.

**Evidencia del caso**: La diapositiva final afirma: "El skill no es aprender el framework más nuevo. Es hacer mejores preguntas: ¿cuál es el cuello de botella real?, ¿qué conocimiento hay que capturar?, ¿en qué puede ayudar la IA, en serio?"

Esa frase resume el giro completo. El developer deja de ser sólo quien implementa una solución después de que otros definieron el problema. Pasa a ser quien ayuda a formular el problema de manera operable.

**Inferencia**: El nuevo oficio del developer no consiste en reemplazar criterio por IA. Consiste en usar IA para ampliar la capacidad de construcción cuando el criterio ya identificó dónde está la caja negra, qué conocimiento importa y qué operación necesita sostenerse.

**Recomendación**: Antes de discutir herramientas, formula el problema en términos de dependencia, visibilidad, conocimiento y operación. Si una decisión tecnológica no mejora al menos una de esas dimensiones, quizás sólo está cambiando la forma de la caja negra.

## De frameworks a preguntas mejores

Durante años, una parte del prestigio técnico se organizó alrededor de stacks, frameworks y patrones de implementación. Eso no desaparece. Las herramientas siguen importando. Pero en proyectos atravesados por IA, vendors, automatización y operación, saber elegir preguntas empieza a valer tanto como saber elegir librerías.

Una mala pregunta produce una solución elegante al problema equivocado. "¿Qué herramienta usamos para sincronizar productos?" es una pregunta incompleta. "¿Qué parte de la sincronización debe ser visible, editable y aprendible por el equipo?" abre otro tipo de conversación.

| Pregunta débil | Pregunta más útil |
|---|---|
| ¿Code o no-code? | ¿Qué nivel de control necesita este proceso? |
| ¿Qué vendor compramos? | ¿Qué dependencia estamos aceptando y cómo salimos si falla? |
| ¿Qué framework usamos? | ¿Qué conocimiento debe quedar estructurado para sostener el sistema? |
| ¿Podemos automatizar esto? | ¿Podemos operarlo, diagnosticarlo y mejorarlo cuando cambie? |
| ¿Cuánto tarda construirlo? | ¿Cuánto tarda capturar el contexto correcto y validar el resultado? |
| ¿La IA puede hacerlo? | ¿Qué necesita saber la IA para hacerlo sin inventar? |

**Evidencia del caso**: La diapositiva 14 llama al nuevo skill "invertir en los inputs correctos para la IA". No dice "pedirle más cosas a la IA". Dice invertir en los inputs.

Ese matiz es decisivo. Los inputs correctos incluyen documentación, reglas, ejemplos, límites, criterios de éxito, métricas y decisiones de operación. También incluyen saber qué no pedirle a la IA: magia, garantías universales o interpretación de conocimiento que nunca fue escrito.

**Inferencia**: La ventaja del equipo no estuvo en usar una herramienta misteriosa, sino en hacer una pregunta mejor después de dos enfoques fallidos: qué tendría que saber y mostrar el sistema para no repetir la opacidad anterior.

**Recomendación**: Trata las preguntas como parte del diseño. Escríbelas, revísalas y mejóralas. Una buena pregunta reduce alcance falso, revela conocimiento faltante y evita construir una solución rápida que nadie puede sostener.

## Identificar cuellos de botella reales

Una de las habilidades centrales del developer en este nuevo escenario es distinguir entre síntoma y cuello de botella.

En el caso, el síntoma era claro: había que sincronizar 8.000 productos desde cinco proveedores hacia plataforma de e-commerce vía hub de dropshipping. Pero el cuello de botella no era simplemente mover datos. Era mover datos con traducción, normalización, manejo de errores, visibilidad, bajo costo y autonomía operativa.

Si el problema se definía como "hacer un ETL", el vendor parecía razonable. Si se definía como "armar flujos visuales", herramienta low-code de workflows parecía razonable. Si se definía como "construir una capacidad propia y observable", la solución necesitaba otra arquitectura.

| Síntoma visible | Cuello de botella real posible |
|---|---|
| La integración no existe | Falta una capa de traducción entre proveedores y destino |
| El vendor tarda o cobra demasiado | El conocimiento crítico está fuera del equipo |
| El flujo se cae | No hay diagnóstico útil ni control de recursos |
| El costo recurrente crece | La infraestructura se dimensiona sin uso real |
| Cada proveedor exige trabajo nuevo | No se capturan patrones por ERP |
| Operación depende de ingeniería | La interfaz no traduce intención en configuración segura |

**Evidencia del caso**: La diapositiva 15 propone buscar "cajas negras caras en los procesos del cliente" porque ahí está el próximo proyecto.

Buscar cajas negras no significa asumir que todo vendor es malo. Significa mirar dónde una organización paga por algo que no puede inspeccionar, ajustar o aprender. Algunas cajas negras son aceptables porque resuelven una función no estratégica. Otras son peligrosas porque contienen reglas centrales del negocio.

**Inferencia**: El cuello de botella real suele estar donde se juntan dependencia, opacidad y conocimiento tácito. La IA puede ayudar a construir alternativas, pero primero hay que encontrar ese punto de fricción.

**Recomendación**: Cuando evalúes un proceso, pregunta qué duele más: costo, lentitud, falta de visibilidad, dependencia de especialistas, errores repetidos o imposibilidad de cambiar. La respuesta ayuda a decidir si conviene comprar, mejorar, reemplazar parcialmente o construir.

## Capturar conocimiento como ventaja técnica

El caso repite una lección desde distintos ángulos: el conocimiento que no se captura se vuelve dependencia.

En el ETL tradicional, el conocimiento vivía dentro del vendor. En herramienta low-code de workflows, parte del conocimiento vivía en flujos, nodos y ajustes frágiles. En el enfoque con agentes, el conocimiento se convirtió en una knowledge base, una interfaz de onboarding y una configuración estructurada.

Ese movimiento redefine qué significa "hacer software". No se trata sólo de escribir código que ejecute una tarea. Se trata de crear un sistema donde el conocimiento del negocio pueda entrar, corregirse, versionarse y convertirse en comportamiento.

| Conocimiento tácito | Riesgo | Artefacto útil |
|---|---|---|
| "Este proveedor usa el mismo ERP que otro" | Duplicar trabajo y errores | Mapeo vendor -> ERP |
| "Este campo llega mal a veces" | Fallos repetidos | Regla de validación |
| "Este flow no debe correr para vendor-d" | Cambios manuales dispersos | Configuración por flow |
| "El sistema se cae con payloads grandes" | Diagnóstico tardío | Métricas y límites |
| "Este costo sólo aplica a este volumen" | Claim comercial exagerado | Nota editorial contextual |

**Inferencia**: La captura de conocimiento es una forma de arquitectura. Define qué puede aprender el sistema, qué puede operar el equipo y qué puede reutilizar la IA.

El developer que entiende esto diseña más que endpoints. Diseña rutas de aprendizaje: cómo entra una regla, dónde se guarda, quién la revisa, cómo se prueba, cómo se muestra y cuándo se convierte en automatización.

**Recomendación**: En cada proyecto con IA, separa tres capas desde el inicio: conocimiento del dominio, configuración operativa y código ejecutable. Si esas capas se mezclan sin criterio, el sistema puede funcionar al principio y volverse inmantenible justo cuando empieza a importar.

## Decidir buy, build o reemplazo parcial

El cierre de la obra no debería leerse como una defensa ingenua de construir todo. La pregunta buy vs. build sigue vigente, pero ahora necesita más matices.

Comprar puede ser correcto cuando el problema es estándar, la diferenciación es baja, el costo es razonable y el vendor ofrece buena visibilidad. Construir puede ser correcto cuando el proceso contiene conocimiento estratégico, el costo de dependencia es alto o la operación necesita control fino. Reemplazar parcialmente puede ser la opción más inteligente cuando un vendor resuelve una parte, pero encierra otra.

| Opción | Cuándo tiene sentido | Señal de alerta |
|---|---|---|
| Comprar | Problema común, bajo riesgo, buen soporte | No hay salida clara si el vendor falla |
| Low-code | Flujo simple, volumen moderado, cambios frecuentes | La herramienta oculta errores críticos |
| Construir custom | Proceso estratégico, reglas propias, necesidad de control | El equipo subestima operación y mantenimiento |
| Agentes con knowledge base | Hay conocimiento estructurable y tareas de construcción acelerables | Se espera que la IA invente contexto |
| Reemplazo parcial | El vendor sirve en una capa, pero otra requiere autonomía | Nadie define frontera entre ambos mundos |

**Evidencia del caso**: La comparación de la diapositiva 14 muestra tres enfoques lado a lado: ETL tradicional, herramienta low-code de workflows y agentes de IA. Compara tiempo, costo recurrente, visibilidad, mantenimiento y escala.

La tabla funciona porque no evalúa herramientas en abstracto. Las evalúa contra dimensiones operativas. Esa es la forma correcta de decidir: no "qué está de moda", sino qué opción ofrece mejor combinación de control, costo, visibilidad, mantenimiento y escala para este caso.

**Inferencia**: La IA amplía el rango de soluciones posibles. Permite construir alternativas que antes parecían demasiado caras o lentas. Pero no elimina la necesidad de comparar tradeoffs.

**Recomendación**: Antes de reemplazar un vendor, escribe una matriz de decisión. Incluye costo recurrente, costo de construir, costo de operar, visibilidad, salida, seguridad, datos, mantenimiento y riesgo de conocimiento. Si sólo comparas precio mensual contra horas de desarrollo, estás dejando fuera la parte más importante.

## Las nuevas oportunidades no son atajos

La diapositiva 15 abre una línea comercial potente: buscar cajas negras caras en procesos del cliente. Menciona inventario en un SaaS poco integrado, marketing procesando leads entre tres herramientas y logística pagando conciliación a un tercero.

Estos ejemplos muestran oportunidades reales, pero también un riesgo de lectura superficial. No todo SaaS caro merece reemplazo. No toda automatización manual debe convertirse en agente. No todo tercero debe desaparecer. La oportunidad aparece cuando el proceso combina costo alto, integración pobre, conocimiento interno y capacidad de mejorar con un sistema propio.

| Oportunidad | Qué habría que validar antes |
|---|---|
| Inventario en SaaS caro | Reglas de stock, fuentes de datos, integraciones, costo de error |
| Marketing entre tres herramientas | Calidad de leads, criterios de scoring, permisos, atribución |
| Conciliación logística tercerizada | Excepciones, reglas contractuales, auditoría, responsabilidad |
| Soporte interno repetitivo | Base de conocimiento, límites de respuesta, escalamiento |
| Reportes manuales | Fuentes confiables, definiciones de métricas, frecuencia |

**Nota editorial**: Claims como "costo operativo -70%" o "el vendor deja de ser necesario" deben tratarse como hipótesis comerciales sujetas a validación, no como garantía.

**Inferencia**: El developer encuentra proyectos valiosos cuando sabe leer procesos, no sólo requerimientos. La caja negra cara no siempre se anuncia como problema técnico. A veces aparece como una factura, una espera, una dependencia, una tarea manual o una persona que traduce entre sistemas.

**Recomendación**: Usa la búsqueda de cajas negras como método de descubrimiento, no como promesa de reemplazo automático. Primero entiende qué se paga, qué se oculta, qué se aprende y qué se arriesga. Después decide si la IA puede ayudar de verdad.

## Construir alternativas, no ilusiones

La diapositiva final marca una transición:

```text
Aceptamos cajas negras.
Pagamos suscripciones por features que podríamos tener.
Asumimos que escalar es difícil.

Construimos transparencia.
Construimos las alternativas.
Construimos sistemas que se monitorean solos.
```

El pasaje es fuerte porque no celebra simplemente "hacer más software". Celebra recuperar capacidad. Transparencia, alternativas y monitoreo son formas de autonomía.

Pero construir alternativas exige responsabilidad. Si se reemplaza una caja negra externa por una caja negra interna, el problema cambia de dueño pero no desaparece. Si se reemplaza un vendor caro por un sistema sin observabilidad, el ahorro inicial puede convertirse en deuda. Si se usa IA sin knowledge base, la velocidad puede producir fragilidad.

| Alternativa sólida | Ilusión peligrosa |
|---|---|
| Expone reglas y errores | Oculta complejidad detrás de una demo |
| Tiene knowledge base versionada | Depende de prompts dispersos |
| Mide recursos y costos reales | Promete ahorro sin evidencia |
| Permite operación segura | Requiere intervención técnica para todo |
| Reconoce límites y riesgos | Vende resultados del caso como universales |

**Inferencia**: La alternativa no es valiosa por ser propia. Es valiosa si es más transparente, más operable y más aprendible que aquello que reemplaza.

Esta es una disciplina incómoda porque obliga a resistir dos excesos. El primero es aceptar cualquier caja negra por comodidad. El segundo es construir cualquier cosa propia por orgullo técnico. El nuevo oficio vive entre esos extremos.

**Recomendación**: Construye alternativas sólo cuando puedas mejorar la capacidad del equipo. Capacidad significa entender, operar, corregir y evolucionar. Si el sistema propio no aumenta esas cuatro cosas, todavía no es una alternativa madura.

## El developer como diseñador de contexto

En un proyecto con agentes de IA, el developer no desaparece. Cambia el centro de su trabajo.

Parte de su valor pasa a estar en diseñar contexto: qué documentos existen, cómo están organizados, qué ejemplos se incluyen, qué reglas son explícitas, qué límites se declaran, qué errores retroalimentan la base y qué puede ejecutar la IA sin supervisión.

Diseñar contexto no es una tarea menor. Es una forma de arquitectura orientada a agentes y humanos.

| Responsabilidad clásica | Responsabilidad ampliada |
|---|---|
| Elegir stack | Elegir qué debe quedar bajo control propio |
| Escribir código | Preparar inputs correctos para IA y equipo |
| Implementar endpoints | Diseñar contratos de conocimiento |
| Revisar errores | Convertir errores repetidos en reglas |
| Configurar despliegue | Medir uso real y costo operativo |
| Hacer herramientas internas | Diseñar interfaces que capturan conocimiento |

**Evidencia del caso**: El resultado exitoso combinó 10-12 horas de base y 2 horas de build agéntico. Esa proporción dice mucho: la velocidad visible dependió del trabajo previo de contexto.

**Inferencia**: A medida que la IA abarata parte de la construcción, sube el valor de formular bien, documentar bien, acotar bien y verificar bien. El developer no compite con la IA en velocidad de generación; la dirige con contexto, criterio y pruebas.

**Recomendación**: Mide tu aporte no sólo por líneas de código, sino por la calidad de las decisiones que vuelven al sistema más claro. Una buena estructura de conocimiento puede ahorrar más trabajo futuro que una implementación rápida sin memoria.

## El developer como diseñador de operación

La otra ampliación del oficio aparece en operación. El developer ya no puede pensar que su trabajo termina cuando el flujo corre. En sistemas críticos, el trabajo termina cuando el equipo puede operar el flujo con confianza.

Operar implica ver estado, entender errores, reintentar con seguridad, pausar partes, cambiar configuración, auditar decisiones y aprender de incidentes. Los capítulos 6 y 7 mostraron que esto no se improvisa al final.

| Pregunta de construcción | Pregunta de operación |
|---|---|
| ¿Funciona? | ¿Cómo sabemos que funcionó? |
| ¿Corre rápido? | ¿Qué pasa cuando corre lento? |
| ¿Procesa datos? | ¿Qué queda pendiente y cómo se reintenta? |
| ¿Tiene logs? | ¿Los logs permiten decidir? |
| ¿Tiene dashboard? | ¿El dashboard reduce dependencia? |
| ¿Se puede configurar? | ¿La configuración es segura y auditable? |

**Inferencia**: La operación se convierte en parte del producto. No basta con entregar una automatización. Hay que entregar la capacidad de entenderla.

**Recomendación**: Incluye operación en la definición de terminado. Para un sistema como el del caso, "terminado" debería significar: sincroniza, mide, explica, permite intervención segura y actualiza conocimiento cuando aparecen errores.

## Checklist del nuevo oficio

El nuevo oficio del developer puede resumirse como una serie de capacidades prácticas.

| Capacidad | Pregunta guía | Evidencia de madurez |
|---|---|---|
| Leer procesos | ¿Dónde hay una caja negra cara o frágil? | Mapa de dependencias y costos |
| Formular problemas | ¿Cuál es el cuello de botella real? | Tesis técnica antes de elegir herramienta |
| Capturar conocimiento | ¿Qué debe quedar escrito y versionado? | Knowledge base útil para humanos y agentes |
| Diseñar con IA | ¿Qué inputs necesita el agente? | Prompts, reglas, ejemplos y límites |
| Evaluar opciones | ¿Comprar, construir o reemplazar parcialmente? | Matriz de tradeoffs |
| Diseñar observabilidad | ¿Qué debe explicar el sistema? | Métricas, errores, estado y umbrales |
| Diseñar operación | ¿Quién puede cambiar qué, con qué control? | Interfaces, permisos y auditoría |
| Cuidar claims | ¿Qué es evidencia del caso y qué es promesa? | Notas editoriales y contexto |

Esta checklist no reemplaza experiencia técnica. La ordena. Ayuda a que la conversación con clientes, equipos y agentes no se reduzca a "hagamos algo con IA".

## Preguntas finales para el lector

Si esta obra cumplió su función, el lector debería salir con mejores preguntas, no sólo con entusiasmo por una herramienta.

1. ¿Qué caja negra aceptaste porque antes no había una alternativa razonable?
2. ¿Qué suscripción pagas por una feature que quizá ya podrías construir y operar?
3. ¿Qué proceso crítico no puedes explicar cuando falla?
4. ¿Qué conocimiento vive en personas, chats o tickets y todavía no está en una base?
5. ¿Qué parte de tu sistema debería ser observable desde el primer día?
6. ¿Qué interfaces internas podrían capturar conocimiento mientras se trabaja?
7. ¿Qué vendor conviene mantener porque resuelve algo no estratégico?
8. ¿Qué vendor conviene reemplazar parcial o totalmente porque encierra reglas del negocio?
9. ¿Qué le estás pidiendo a la IA sin haberle dado contexto suficiente?
10. ¿Qué decisión tecnológica estás tratando como moda cuando en realidad es una decisión de operación?

Estas preguntas no llevan siempre a construir. A veces llevan a comprar mejor. A veces a renegociar. A veces a documentar antes de tocar código. A veces a reemplazar una parte pequeña que desbloquea mucho. Ese es el punto: pensar mejor antes de ejecutar más rápido.

## Conclusión

El caso de sincronización de productos no demuestra que la IA resuelva cualquier integración. Demuestra algo más interesante: cuando un equipo captura conocimiento, observa el sistema y diseña interfaces operativas, la IA puede cambiar la economía de construir alternativas.

**Evidencia del caso**: La comparación final muestra que el enfoque con agentes ofreció menor tiempo visible de construcción, menor costo recurrente, visibilidad total, mantenimiento operado por el equipo y escala suficiente para 8.000 productos en el contexto descrito.

**Inferencia**: La diferencia no estuvo sólo en la herramienta. Estuvo en el método: aprender de cajas negras, organizar documentación, invertir en inputs, medir recursos, crear interfaces operativas y tratar los resultados como evidencia contextual.

**Recomendación**: No adoptes IA como consigna. Úsala como parte de un oficio más exigente: encontrar el cuello de botella real, capturar el conocimiento que lo explica, construir sistemas que se puedan observar y dejar al equipo con más capacidad que antes.

La pregunta inicial era "¿Code / No-Code?". La respuesta final es menos binaria y más útil: construye o compra según el contexto, pero no entregues a ciegas el conocimiento crítico de tu operación. Ahí está el nuevo oficio del developer: hacer mejores preguntas, diseñar mejores inputs y convertir tecnología en autonomía real.
