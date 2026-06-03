# Capítulo 3: Enfoque 1: ETL tradicional

## La promesa de extract, transform, load

El primer enfoque del caso no fue exótico. Fue el camino que muchas empresas tomarían ante un problema de integración: contratar un vendor de ETL.

ETL significa extract, transform, load: extraer datos de una fuente, transformarlos a un formato útil y cargarlos en un destino. Como modelo mental es claro. Como promesa comercial también: el cliente no quiere pelearse con APIs, esquemas raros, stock, variantes e imágenes; quiere que los datos lleguen donde tienen que llegar.

En abstracto, ETL no es el problema. Un buen proceso ETL puede ser robusto, auditable, repetible y perfectamente adecuado para sincronizar sistemas. El problema aparece cuando el ETL se entrega como caja negra: una solución que parece resolver la complejidad, pero en realidad la desplaza hacia un lugar donde el cliente ya no puede verla ni intervenirla.

**Evidencia del caso**: La diapositiva del enfoque 1 dice: "Contrataron un vendor de ETL. La promesa: extract, transform, load. Simple en teoría."

**Inferencia**: El cliente buscaba reducir incertidumbre. Tenía cinco proveedores, tres ERPs, APIs custom y un destino de e-commerce. La contratación de un vendor especializado parecía una manera razonable de sacar complejidad de la operación interna.

La trampa está en confundir "no tener que construirlo" con "no tener que entenderlo". En integraciones críticas, tercerizar la ejecución no elimina la responsabilidad operativa. Si el catálogo se rompe, si el stock queda desactualizado o si una variante desaparece, el negocio sigue necesitando respuestas.

## La caja negra

La charla describe el resultado con dos señales fuertes: caja negra y acceso restringido. El cliente no podía ver dentro de los flujos. No podía ajustarlos. No podía mantenerlos.

Esta es la frontera entre una herramienta útil y una dependencia peligrosa. Un sistema puede ser externo, tercerizado o administrado por un proveedor sin ser opaco. Pero cuando el equipo que opera el negocio no puede inspeccionar lo que ocurre, la integración deja de ser una capacidad y se vuelve una apuesta.

**Evidencia del caso**:

| Señal observada | Consecuencia operativa |
|---|---|
| Caja negra | El cliente no podía ver dentro de los flujos |
| Acceso restringido | No podía ajustar ni mantener |
| Suscripción cara | El costo recurrente seguía aunque el control fuera bajo |
| Dependencia total del vendor | Los cambios y diagnósticos dependían de terceros |
| Especialista externo para depurar | La respuesta ante fallos quedaba fuera del equipo |

**Inferencia**: El sistema podía estar funcionando en algún nivel, pero no era operable por el cliente. Esa diferencia importa. "Funciona" significa que completa una tarea bajo ciertas condiciones. "Es operable" significa que el equipo puede entenderlo, corregirlo, auditarlo y adaptarlo cuando las condiciones cambian.

En el caso de un catálogo multi-proveedor, las condiciones cambian todo el tiempo. Un proveedor cambia un campo. Otro modifica la forma de paginar. Un ERP expone stock con una regla distinta. Una imagen llega en un formato inesperado. Un producto se publica, pero una variante queda incompleta. Si cada excepción exige abrir un ticket y esperar a alguien que conoce la caja por dentro, el sistema no está liberando al negocio: lo está atando a otro cuello de botella.

## Dependencia del vendor

La dependencia no siempre se ve al principio. En la fase de venta, la promesa de un proveedor externo puede sonar como alivio: menos implementación interna, menos mantenimiento, menos decisiones técnicas. Pero la dependencia se revela cuando ocurre algo que no encaja en el flujo feliz.

**Evidencia del caso**: Para depurar, había que llamar a un especialista en Italia. La diapositiva concluye: "Tercerizar a una caja negra resuelve el problema de hoy y crea la dependencia de mañana."

Esta frase no condena toda tercerización. Condena una forma específica de tercerización: aquella en la que el cliente pierde capacidad de diagnóstico sobre un proceso que sigue siendo crítico para su operación.

Hay vendors que conviene contratar. Hay herramientas que sería absurdo reconstruir. Hay integraciones donde la estandarización del proveedor vale más que el control total. Pero para distinguir una buena compra de una dependencia peligrosa hay que mirar más allá de la demo.

**Recomendación**: Antes de contratar un vendor de integración, pide evidencia de operabilidad, no sólo de funcionalidad. La pregunta no es únicamente "¿puede sincronizar productos?". También es "¿quién explica qué pasó cuando no sincronizó?".

## Dónde estaba el costo real

Una suscripción cara es visible en una factura. La dependencia operativa, en cambio, se paga de formas menos ordenadas: demoras, tickets, llamadas, incertidumbre, trabajo manual, pérdida de confianza en el dato y decisiones tomadas sin diagnóstico.

En este caso, el costo del vendor no era sólo económico. Era un costo de aprendizaje. Cada fallo quedaba encapsulado fuera del equipo. Cada rareza descubierta por el proveedor podía no convertirse en conocimiento interno. Cada ajuste dependía de disponibilidad externa.

**Inferencia**: Cuando un proceso crítico se resuelve con una caja negra, el cliente no acumula capacidad. Paga por resultado, pero no necesariamente construye comprensión. Eso puede ser aceptable en procesos comoditizados; es peligroso cuando el proceso contiene reglas propias del negocio.

La capa de sincronización descrita en el capítulo anterior tenía cuatro responsabilidades centrales: traducción, normalización, manejo de errores y observabilidad. En una caja negra, esas responsabilidades no desaparecen. Sólo quedan ubicadas en un lugar donde el cliente no puede analizarlas.

| Responsabilidad | Pregunta que el vendor debe poder responder |
|---|---|
| Traducción | ¿Cómo se mapea cada campo de origen al destino? |
| Normalización | ¿Qué reglas corrigen formatos, variantes, stock e imágenes? |
| Manejo de errores | ¿Qué errores se reintentan, cuáles bloquean y cuáles se ignoran? |
| Observabilidad | ¿Qué ve el cliente sin llamar a soporte? |
| Cambio | ¿Cómo se actualiza el flujo si un proveedor cambia su API? |

Si esas respuestas no están disponibles para el equipo, el sistema puede estar automatizado pero no gobernado.

## Cuándo un ETL sí puede ser una buena opción

Para no caricaturizar el enfoque, conviene decirlo con claridad: ETL puede ser una excelente opción cuando el problema está bien acotado, las fuentes son estables, las transformaciones son conocidas y el equipo tiene suficiente visibilidad sobre el pipeline.

Un ETL también puede ser adecuado cuando:

1. Las fuentes y destinos son estándar.
2. Los conectores están maduros y bien mantenidos.
3. Los errores quedan expuestos con claridad.
4. El cliente puede exportar logs y métricas.
5. Las reglas de transformación son auditables.
6. El costo recurrente es proporcional al valor.
7. El vendor permite cambios sin bloquear la operación.
8. Existe un plan claro de salida o migración.

El problema del caso no fue que el enfoque tuviera siglas tradicionales. Fue que, para una operación con rarezas de proveedores y necesidad de diagnóstico, la implementación elegida encerraba demasiado conocimiento fuera del equipo.

**Recomendación**: No preguntes "¿ETL sí o no?". Pregunta "¿este ETL vuelve el proceso más observable o sólo más distante?".

## Checklist para evaluar vendors de ETL

Antes de aceptar una solución tercerizada para una integración crítica, conviene pasarla por una lista incómoda. Si el proveedor no puede responder con precisión, la opacidad aparecerá más tarde, probablemente en producción.

| Criterio | Pregunta de evaluación | Señal de alerta |
|---|---|---|
| Visibilidad | ¿Puedo ver flujos, reglas y estado sin pedir soporte? | Sólo hay reportes resumidos |
| Logs | ¿Qué logs recibo por corrida, proveedor y error? | Logs internos no accesibles |
| Errores | ¿Cómo se clasifican fallos recuperables y bloqueantes? | Todo se convierte en ticket |
| Cambios | ¿Quién puede ajustar un mapping simple? | Sólo el vendor puede tocar reglas |
| Propiedad | ¿Puedo exportar configuración y documentación? | No hay salida clara |
| Costos | ¿Cómo escala el precio por volumen, proveedor o corrida? | El precio crece sin relación con uso real |
| SLA | ¿Qué tiempo de respuesta hay para fallos críticos? | Soporte genérico sin contexto técnico |
| Conocimiento | ¿Qué aprende el equipo interno después de cada incidente? | El aprendizaje queda en el proveedor |

Esta tabla no busca descartar vendors. Busca separar proveedores que aumentan capacidad de proveedores que venden tranquilidad aparente a cambio de ceguera operativa.

## Preguntas prácticas para el lector

Si hoy tu equipo depende de un ETL administrado por terceros, estas preguntas ayudan a medir el riesgo:

1. ¿Podemos explicar el flujo completo sin llamar al vendor?
2. ¿Sabemos qué transformación se aplica a cada campo crítico?
3. ¿Tenemos logs por corrida, por fuente y por destino?
4. ¿Podemos distinguir un error de datos de un error de infraestructura?
5. ¿Cuánto tarda un cambio pequeño de mapping?
6. ¿Qué pasa si el proveedor sube precios o elimina una feature?
7. ¿Podemos migrar la configuración a otro sistema?
8. ¿El equipo interno aprende después de cada incidente?
9. ¿La operación mejora con el tiempo o sólo acumula tickets?
10. ¿Estamos pagando por una capacidad o por no mirar el problema?

## Lección aprendida

El primer enfoque enseña una lección que atraviesa toda la obra: una solución puede ser técnicamente correcta y estratégicamente mala si vuelve invisible una operación crítica.

**Evidencia del caso**: El vendor de ETL prometía extract, transform, load, pero el cliente no podía ver dentro de los flujos, ajustarlos ni mantenerlos.

**Inferencia**: El valor perdido no estaba sólo en la factura. Estaba en la falta de autonomía para aprender, diagnosticar y adaptar la sincronización.

**Recomendación**: Usa vendors cuando aceleren sin ocultar. Compra herramientas cuando agreguen capacidad sin confiscar conocimiento. Y si un proceso contiene reglas específicas del negocio, exige que esas reglas queden visibles, documentadas y recuperables.

El siguiente intento buscó corregir esa opacidad. herramienta low-code de workflows prometía flujos visuales, mantenimiento interno y menos lock-in. Parecía el punto medio razonable. Pero una herramienta puede dejar de ser caja negra comercial y convertirse, bajo presión, en caja negra operativa.
