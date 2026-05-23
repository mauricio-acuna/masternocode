# Capítulo 2: El caso: sincronizar 8.000 productos

## El reto del cliente

El caso empieza con una necesidad aparentemente simple: hacer que un catálogo de 8.000 productos llegue desde varios proveedores hasta una tienda online. Dicho así, suena a integración clásica. Se extraen datos, se transforman, se cargan en destino y el negocio sigue funcionando.

Pero esa descripción es demasiado limpia para el problema real.

**Evidencia del caso**: La diapositiva del reto declara: "Sincronizar 8.000 productos desde cinco proveedores con ERPs propios hacia Shopify, vía Modern Dropship."

El cliente no operaba con stock propio. Su negocio dependía de que los productos, variantes, stock e imágenes de terceros quedaran disponibles para el retailer en el destino correcto. Los proveedores, además, no tenían cuenta propia en Modern Dropship. La integración no consistía sólo en conectar sistemas existentes: había que construir una capa capaz de hacer que APIs custom se comportaran como si esos proveedores ya estuvieran integrados al ecosistema esperado.

**Inferencia**: El problema no era "mover datos". Era traducir comportamientos operativos entre organizaciones, ERPs, APIs y expectativas comerciales distintas. Eso cambia la naturaleza del trabajo: ya no alcanza con un script de importación; hace falta una capa de sincronización con reglas explícitas, manejo de errores y capacidad de diagnóstico.

**Recomendación**: Antes de elegir herramienta, describe el flujo de negocio completo. Si el mapa sólo dice "API A -> API B", probablemente todavía no entendiste el sistema. Pregunta quién genera el dato, quién lo consume, qué pasa cuando falta, qué significa que esté desactualizado y quién responde cuando falla.

## Cinco proveedores y tres ERPs

La complejidad del caso aparece en el origen. Cinco proveedores no implican cinco copias del mismo problema. Cada proveedor puede tener su propia forma de nombrar productos, modelar variantes, exponer stock, publicar imágenes, paginar resultados, manejar errores o interpretar disponibilidad.

La charla resume esa heterogeneidad en una frase breve pero importante: cinco proveedores, tres ERPs distintos, APIs custom, esquemas propios y rarezas. Ahí está el núcleo técnico del caso.

No todos los proveedores son únicos en todo. Algunos comparten ERP. Eso abre una oportunidad: si dos proveedores usan el mismo ERP, ciertos patrones pueden reutilizarse. Pero también introduce un riesgo: si se descubre una rareza en un ERP compartido, el arreglo puede tener que aplicarse a todos los vendors que dependen de ese patrón.

**Evidencia del caso**:

| Elemento | Dato declarado |
|---|---|
| Volumen inicial | 8.000 productos |
| Origen | 5 proveedores |
| Sistemas de origen | 3 ERPs distintos |
| Integración | APIs custom |
| Dificultad explícita | Cada esquema tiene sus rarezas |

**Inferencia**: La unidad real de diseño no era el proveedor aislado, sino la combinación proveedor-ERP-regla de negocio. Si el sistema no captura esa relación, cada nuevo proveedor se convierte en un proyecto manual. Si la captura bien, el onboarding puede volverse repetible.

Este punto será importante más adelante, cuando aparezca la knowledge base. La documentación no es burocracia: es la forma de convertir rarezas dispersas en conocimiento reutilizable.

## Shopify y Modern Dropship como destino

El destino del flujo también importa. El objetivo era llegar a Shopify vía Modern Dropship con catálogo, variantes, stock e imágenes listos para el retailer. Esto coloca a la sincronización en un lugar delicado: entre sistemas que producen información y sistemas que la convierten en experiencia comercial.

Un error de integración no es neutro. Puede mostrar un producto sin stock, ocultar un producto disponible, duplicar variantes, romper imágenes o generar una expectativa de compra que luego operación no puede cumplir. En e-commerce, la integración de catálogo no es una tarea secundaria: afecta ventas, soporte, reputación y operación diaria.

**Decisión pendiente**: Antes de publicar, confirmar si se mantendrán los nombres Shopify y Modern Dropship como marcas visibles o si se reemplazarán por categorías genéricas como "plataforma de e-commerce" y "hub de dropshipping". En borrador técnico se pueden conservar como evidencia del caso; en versión pública requieren criterio editorial.

**Recomendación**: Trata el destino como contrato operativo, no sólo como endpoint. Define qué significa "producto válido", "stock confiable", "imagen lista", "variante correcta" y "sincronización exitosa" antes de construir.

## La capa de sincronización que faltaba

La diapositiva del caso nombra la pieza central: una capa de sincronización. Esa capa debía encargarse de traducción, normalización, manejo de errores y observabilidad.

Esta frase es más importante que la herramienta elegida. Cuando una integración falla, muchas veces se discute si conviene usar ETL, low-code, scripts, agentes o un SaaS especializado. Pero antes de discutir la herramienta hay que entender qué responsabilidad tendrá la capa intermedia.

En este caso, la capa de sincronización debía:

| Responsabilidad | Qué significa en la práctica |
|---|---|
| Traducción | Convertir conceptos de cada API al modelo esperado por el destino |
| Normalización | Hacer consistentes campos, formatos, variantes, stock e imágenes |
| Manejo de errores | Detectar, clasificar y exponer fallos recuperables o bloqueantes |
| Observabilidad | Mostrar estado, métricas, últimos resultados y puntos de falla |
| Repetibilidad | Permitir que un nuevo proveedor no obligue a redescubrir todo desde cero |

**Inferencia**: La capa de sincronización era el producto real. Las APIs, ERPs y plataformas eran el entorno; la ventaja estaba en construir una pieza que volviera operable la complejidad entre ellos.

Cuando esa capa no existe, la complejidad queda repartida en tickets, planillas, conocimiento tribal, conversaciones de soporte y dependencias con terceros. Cuando existe pero es opaca, el problema se esconde. Cuando existe y es observable, el equipo puede aprender del sistema mientras lo opera.

## Lo que vuelve difícil el problema

La dificultad del caso no viene sólo del número 8.000. Ese número impresiona, pero el volumen por sí solo no explica el reto. El problema se vuelve serio por la combinación de volumen, heterogeneidad, reglas de negocio y necesidad de operación confiable.

**Riesgos técnicos y operativos del caso**:

| Riesgo | Por qué importa | Mitigación editorial/técnica |
|---|---|---|
| APIs custom | Cada proveedor puede responder distinto | Documentar contratos y excepciones por proveedor |
| ERPs compartidos | Un bug puede repetirse en varios vendors | Mapear vendor -> ERP y notas cruzadas |
| Catálogo cambiante | Stock, variantes e imágenes no son estáticos | Diseñar sync repetible y verificable |
| Errores silenciosos | El negocio no sabe qué quedó fuera | Exponer vista de errores y últimas corridas |
| Marcas reales | Hay riesgos de permisos y uso público | Decidir anonimización antes de publicar |
| Claims fuertes | 8.000 productos puede sonar a promesa | Presentarlo como resultado específico del caso |

**Recomendación**: Evalúa una integración por su capacidad de sostener operación, no sólo por completar una primera corrida. Una demo que importa 8.000 productos una vez puede ser útil; un sistema que explica qué pasó, qué falló y qué cambió es otra categoría.

## Preguntas prácticas para discovery

Antes de proponer ETL, no-code, agentes o desarrollo custom, conviene hacer preguntas que revelen la forma real del problema:

1. ¿Cuántas fuentes de datos existen y quién es dueño de cada una?
2. ¿Qué sistemas de origen se repiten entre proveedores?
3. ¿Qué campos son obligatorios para que un producto sea publicable?
4. ¿Qué diferencias hay entre producto, variante, stock e imagen?
5. ¿Qué errores puede resolver operación y cuáles requieren intervención técnica?
6. ¿Cómo se detecta hoy que una sincronización falló?
7. ¿Qué información necesita ver el retailer antes de confiar en el catálogo?
8. ¿Qué reglas de negocio viven sólo en la cabeza del equipo?
9. ¿Qué pasa si un proveedor cambia su API?
10. ¿Qué parte del proceso debe ser visible para soporte, negocio y tecnología?

Estas preguntas bajan la discusión a tierra. También preparan el terreno para comparar los tres enfoques que vienen después. El ETL tradicional, n8n y los agentes de IA no se evalúan en abstracto: se evalúan contra estas responsabilidades.

## Cierre: el caso no era una integración, era una operación

El capítulo anterior planteó que la pregunta code/no-code quedó corta. Este caso muestra por qué. La decisión técnica no estaba entre escribir código o dibujar flujos. La decisión real era cómo construir una operación transparente entre proveedores, ERPs, Modern Dropship y Shopify.

**Evidencia del caso**: La pieza faltante se definió como "capa de sincronización" con traducción, normalización, manejo de errores y observabilidad.

**Inferencia**: Ese énfasis anticipa toda la obra. Los enfoques que fallen no lo harán sólo por usar una herramienta incorrecta, sino por no entregar suficiente control operativo. El enfoque que funcione tendrá que hacer visible el sistema, no sólo automatizarlo.

Los próximos capítulos revisan esa comparación. Primero, el ETL tradicional: una promesa familiar, simple en teoría, pero peligrosa cuando la solución se convierte en caja negra.
