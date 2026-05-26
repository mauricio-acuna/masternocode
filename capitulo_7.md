# Capítulo 7: Interfaces operativas con IA

## Cuando la interfaz también captura conocimiento

Los capítulos anteriores mostraron dos condiciones para que el enfoque con IA funcionara: una knowledge base bien organizada y una observabilidad integrada desde el diseño. Este capítulo aborda una tercera condición, menos visible pero igual de importante: la interfaz por la que el sistema aprende y se opera.

En muchos proyectos, la interfaz se entiende como una capa final. Primero se construye el motor. Después se agrega una pantalla, un formulario, una consola o una documentación para que alguien lo use. Esa separación parece razonable, pero en sistemas donde el conocimiento cambia todo el tiempo puede crear una grieta peligrosa.

El operador aprende cosas que el sistema no sabe. El developer ajusta configuraciones que nadie documenta. El negocio decide pausar un flujo y el cambio termina escondido en una variable de entorno. Un proveedor nuevo llega con un ERP conocido, pero esa similitud no se reutiliza porque nadie convirtió el dato en regla.

**Evidencia del caso**: La diapositiva 12 presenta una "Skill interactiva Onboard Vendor" donde la IA hace preguntas estructuradas, completa su propio prompt y actualiza la knowledge base. La diapositiva 13 muestra una CLI conversacional para gestionar vendors sin tocar variables de entorno.

La idea común entre ambas rarezas es simple: la interfaz no sólo ejecuta órdenes. También captura conocimiento, lo estructura y lo deja en el lugar donde el sistema puede volver a usarlo.

**Inferencia**: La interfaz operativa con IA funcionó como una puerta de entrada al conocimiento del sistema. Permitió que una acción cotidiana, como dar de alta un proveedor o pausar un flow, actualizara una configuración formal y una base reutilizable sin exigir que el operador conociera la estructura interna.

**Recomendación**: Si un proceso depende de conocimiento operativo, diseña la interfaz para capturarlo mientras se trabaja. No esperes a que alguien documente después. La documentación posterior suele perder contexto, matices y decisiones pequeñas que luego explican errores grandes.

## Onboarding guiado por entrevista

Dar de alta un proveedor en una integración de catálogo no es llenar un formulario genérico. Es descubrir cómo ese proveedor entiende productos, variantes, stock, imágenes, categorías, paginación, límites de API, errores y credenciales. También es identificar si ese proveedor se parece a otro ya conocido.

La diapositiva 12 propone una escena concreta:

```text
MIA: Bienvenido. Voy a darte de alta un proveedor. ¿Nombre del vendor?
OPERADOR: Acme Supply Co.
MIA: ¿Qué ERP usan?
OPERADOR: ERP-Y.
MIA: Tengo el patrón de ERP-Y. Reuso el mapping.
```

La conversación termina con dos efectos visibles: se crea `knowledge-base/vendors/acme/` y se actualiza el prompt. No se trata de una charla decorativa. La entrevista produce artefactos.

| Paso de la entrevista | Qué captura | Qué produce |
|---|---|---|
| Nombre del vendor | Identidad operativa | Carpeta o registro del proveedor |
| ERP utilizado | Patrón técnico probable | Reuso de mapping existente |
| Endpoints y credenciales | Contratos de integración | Configuración segura y validable |
| Reglas de producto | Semántica del catálogo | Transformaciones y validaciones |
| Casos raros | Saber tribal temprano | Notas en knowledge base |
| Flows habilitados | Alcance inicial | Configuración por proceso |

**Inferencia**: El valor de la entrevista no está en que sea conversacional, sino en que ordena la captura. La IA hace preguntas que siguen la estructura del sistema y, al mismo tiempo, puede reconocer patrones previos.

Un formulario tradicional también podría pedir datos. La diferencia es que una entrevista guiada puede ajustar la siguiente pregunta según la respuesta anterior. Si el operador dice `ERP-Y`, el sistema no necesita tratar al proveedor como un desconocido total. Puede preguntar por excepciones al patrón existente, no por todo desde cero.

Esa diferencia reduce fricción y mejora calidad. El operador no queda frente a veinte campos ambiguos. El sistema tampoco queda esperando que alguien recuerde qué campos importan para cada ERP.

**Recomendación**: Diseña el onboarding como una entrevista con memoria. La pregunta central no es "qué campos necesitamos llenar", sino "qué debe aprender el sistema para operar este proveedor con seguridad y para reutilizar conocimiento cuando corresponda".

## Capturar conocimiento durante la operación

La frase más importante de la diapositiva 12 es "el conocimiento se captura solo". Conviene leerla con cuidado. No significa que el conocimiento aparezca mágicamente. Significa que la captura ocurre dentro del flujo normal de trabajo, sin depender de una ceremonia aparte.

En la práctica, esto cambia la economía de documentación. Si cada nuevo dato requiere abrir un documento, buscar la sección correcta, escribir una nota y avisar a ingeniería, muchas notas no se escribirán. Si la interfaz pregunta, valida y guarda en el lugar correcto, la documentación se vuelve una consecuencia natural de operar.

| Modo manual | Modo asistido por interfaz con IA |
|---|---|
| El operador avisa por chat que un vendor usa ERP-Y | La entrevista registra ERP-Y y lo vincula al patrón existente |
| Un developer copia variables en `.env` | La skill actualiza configuración estructurada |
| Una excepción queda en memoria del equipo | La interfaz la guarda como nota del vendor |
| La documentación se actualiza cuando alguien se acuerda | La base cambia durante el onboarding |
| Cada proveedor parece nuevo | El sistema propone reutilizar mappings |

**Evidencia del caso**: La diapositiva dice que, si la IA reconoce el ERP de otro vendor, reutiliza el patrón. Esa línea conecta la interfaz con la arquitectura de conocimiento presentada en el capítulo 5: vendors separados, ERPs separados y notas cruzadas.

**Inferencia**: La interfaz sólo puede capturar conocimiento de manera útil porque existe una base donde guardar ese conocimiento. Sin estructura, la entrevista produciría texto suelto. Con estructura, produce configuración, notas y relaciones.

El punto no es eliminar al developer. El punto es reservar su intervención para diseñar el sistema de captura, revisar patrones, definir límites y resolver casos nuevos. El operador puede incorporar variaciones conocidas sin esperar que ingeniería traduzca cada dato a mano.

**Recomendación**: Antes de automatizar onboarding con IA, define dónde vive cada tipo de conocimiento. Si el sistema no sabe distinguir proveedor, ERP, flow, credencial, mapping y excepción, la interfaz conversacional sólo hará más fácil guardar desorden.

## El prompt como artefacto vivo

La diapositiva afirma que la skill "completa su propio prompt". Esa frase puede sonar extraña si se piensa el prompt como un texto fijo escrito al comienzo del proyecto. En una operación viva, el prompt debería comportarse más como una especificación actualizable.

Cuando entra un proveedor nuevo, el sistema aprende cosas: qué ERP usa, qué endpoints expone, qué reglas comparte, qué excepciones trae, qué flows habilita. Parte de esa información debe convertirse en configuración. Parte debe quedar en knowledge base. Y parte puede modificar las instrucciones que guían a los agentes.

| Cambio operativo | Artefacto que debería actualizar |
|---|---|
| Nuevo vendor | Carpeta o registro del vendor |
| ERP ya conocido | Referencia a patrón existente |
| ERP nuevo | Documento de ERP y checklist de validación |
| Nueva regla de mapping | Knowledge base y tests |
| Flow pausado | Archivo de configuración |
| Error repetido | Vista de errores, nota y posible prompt |

**Inferencia**: El prompt deja de ser una ocurrencia y se vuelve parte del sistema. Si contiene reglas que afectan operación, debe tratarse con el mismo respeto que una configuración o una política interna: versionado, revisable y conectado a evidencia.

Esto también protege contra uno de los riesgos clásicos de la IA: instrucciones dispersas. Si cada operador le dice algo distinto al agente y esas instrucciones no se consolidan, el sistema acumula contradicciones invisibles. Un prompt vivo no es un chat infinito. Es una capa gobernada de instrucciones que cambia con criterio.

**Recomendación**: Versiona prompts, knowledge base y configuración como piezas del mismo sistema. Cada cambio relevante debería poder responder tres preguntas: quién lo cambió, por qué lo cambió y qué comportamiento espera modificar.

## CLI conversacional

La diapositiva 13 presenta otro problema cotidiano: gestionar vendors y flows mediante variables de entorno dispersas.

**Evidencia del caso**: La charla resume el dolor así: "5 flujos x 5 combinaciones vendor-ERP = 25 variables de entorno dispersas. Inmantenible."

El ejemplo muestra una CLI:

```text
mia > manage-vendors

vendor-a · ERP-X · activo   4/4 flows
vendor-b · ERP-X · activo   4/4 flows
vendor-c · ERP-Y · activo   4/4 flows
vendor-d · ERP-Y · pausado  3/4 flows
vendor-e · ERP-Z · activo   4/4 flows

mia > toggle vendor-d:inventory off
vendor-d.inventory -> off
flows.config.json actualizado
```

El cambio parece pequeño, pero resuelve una fricción profunda. Las variables de entorno son útiles para secretos y parámetros de despliegue, pero son una mala interfaz para operar combinaciones de negocio que cambian con frecuencia.

| Gestión por variables dispersas | Gestión por CLI conversacional |
|---|---|
| Difícil ver el estado completo | Estado consolidado por vendor y flow |
| Alto riesgo de editar la variable equivocada | Comandos con intención explícita |
| Cambios opacos para operación | Respuesta legible y confirmación |
| Configuración repartida | Archivo estructurado actualizado |
| Requiere conocimiento técnico bajo presión | Permite operar con lenguaje del dominio |

**Inferencia**: La CLI conversacional no reemplaza la configuración estructurada. La protege. Arriba, el operador usa lenguaje cercano al negocio. Abajo, el sistema edita un archivo formal, validable y versionable.

Esta separación es clave. La interfaz puede ser flexible, pero el estado del sistema no debería ser ambiguo. Si un vendor está pausado para inventario, esa decisión debe existir en una estructura clara, no sólo en el historial de una conversación.

**Recomendación**: Usa lenguaje natural para expresar intención, no como único lugar donde vive la verdad. La verdad operativa debe quedar en archivos, base de datos o configuración estructurada que el sistema pueda validar, auditar y reproducir.

## Configuración estructurada debajo del lenguaje natural

Una de las trampas de las interfaces con IA es creer que, porque el usuario habla de forma natural, el sistema puede guardar decisiones de forma natural. Eso es peligroso.

El lenguaje natural es excelente para entrada, exploración y aclaración. Pero la operación necesita estado determinista. Un sistema que maneja vendors, flows y sincronizaciones no puede depender de frases ambiguas para saber qué está activo.

La arquitectura correcta combina dos capas:

| Capa | Función | Ejemplo |
|---|---|---|
| Conversacional | Entender intención, preguntar, explicar | "Pausa inventario de vendor-d" |
| Estructurada | Guardar estado validable | `vendor-d.inventory = off` |

Entre ambas capas debe existir una traducción controlada. La IA puede proponer la acción, pero el sistema debe validar que el vendor existe, que el flow existe, que el cambio es permitido y que no rompe una regla de operación.

| Riesgo | Control necesario |
|---|---|
| Pausar el flow equivocado | Confirmación con nombre de vendor y flow |
| Cambiar estado sin trazabilidad | Registro de auditoría |
| Dejar configuración inconsistente | Validación de schema |
| Exponer secretos en conversación | Separar credenciales de comandos operativos |
| Ejecutar acciones peligrosas | Permisos y pasos de confirmación |
| Perder contexto del cambio | Mensaje de razón o ticket asociado |

**Inferencia**: La interfaz conversacional sólo es productiva si descansa sobre contratos estrictos. Sin esos contratos, la facilidad de uso aumenta el riesgo operativo.

**Recomendación**: Diseña cada comando conversacional como si fuera una API. Debe tener inputs claros, validaciones, permisos, efectos esperados, errores comprensibles y registro. La naturalidad de la interfaz no elimina la disciplina de ingeniería; la vuelve más necesaria.

## Onboarding sin developer en el medio

La diapositiva 12 dice "sin developer en el medio". Esa frase también requiere precisión editorial. No significa que el developer desaparezca del sistema. Significa que no participa manualmente en cada incorporación rutinaria cuando el patrón ya existe.

El developer sigue siendo necesario para diseñar la entrevista, definir el modelo de configuración, establecer validaciones, crear controles de seguridad, revisar cambios sensibles y ampliar la capacidad cuando aparece un caso nuevo.

| Tarea | Puede operar sin developer | Requiere developer o revisión técnica |
|---|---|---|
| Alta de vendor con ERP conocido | Sí, si el patrón está validado | Revisión posterior opcional |
| Reuso de mapping existente | Sí, con confirmación | Si hay excepciones nuevas |
| Pausar un flow | Sí, con permisos | Si afecta SLA o datos críticos |
| Crear soporte para ERP nuevo | No completamente | Sí, requiere diseño y pruebas |
| Cambiar reglas de stock | Depende del alcance | Sí, si afecta negocio crítico |
| Modificar credenciales | Sólo con flujo seguro | Sí, por seguridad y auditoría |

**Inferencia**: La autonomía operativa tiene límites. Un buen sistema con IA no entrega todas las llaves a cualquier conversación. Distingue acciones rutinarias, acciones sensibles y acciones que cambian arquitectura.

Esta distinción protege tanto al equipo como al cliente. Si todo requiere developer, la operación se atasca. Si nada requiere revisión, el sistema se vuelve frágil por exceso de confianza.

**Recomendación**: Define una matriz de permisos desde el primer diseño de la interfaz. La pregunta no es sólo "qué puede hacer la IA", sino "qué debería poder hacer cada rol, bajo qué condiciones y con qué evidencia".

## La interfaz como producto interno

Una CLI conversacional o una skill de onboarding no son juguetes técnicos. Son producto interno. Tienen usuarios, flujos, errores, permisos, estados vacíos, confirmaciones, mensajes y mantenimiento.

Esto obliga a diseñarlas con la misma seriedad que cualquier herramienta que sostenga operación. Una interfaz interna mal diseñada puede producir incidentes aunque el motor técnico sea correcto. Un comando ambiguo, una confirmación pobre o una falta de historial pueden convertir una mejora en un punto de riesgo.

| Elemento de interfaz | Pregunta de calidad |
|---|---|
| Estado actual | ¿El operador entiende qué está activo y qué está pausado? |
| Acción disponible | ¿El comando expresa intención de forma clara? |
| Confirmación | ¿Se muestra exactamente qué va a cambiar? |
| Resultado | ¿El sistema confirma el cambio y el artefacto actualizado? |
| Error | ¿El mensaje indica causa y próximo paso? |
| Historial | ¿Puede auditarse quién cambió qué y cuándo? |
| Permisos | ¿Cada rol ve sólo acciones apropiadas? |

**Inferencia**: La interfaz operativa reduce dependencia sólo si aumenta claridad. Si una herramienta interna requiere que todos sepan sus trucos, vuelve a crear una caja negra, pero ahora dentro de la organización.

**Recomendación**: Prueba la interfaz con el usuario real de operación, no sólo con developers. Si el operador no puede explicar qué cambió después de ejecutar una acción, la interfaz todavía no está lista para producción.

## Riesgos de las interfaces con IA

El entusiasmo por interfaces conversacionales puede ocultar riesgos concretos. Una interfaz con IA se siente cómoda porque permite hablar. Pero un sistema operativo no necesita sólo comodidad; necesita precisión.

| Riesgo | Cómo aparece | Mitigación |
|---|---|---|
| Ambigüedad | "Apaga vendor-d" sin decir qué flow | Preguntas de aclaración |
| Exceso de autonomía | La IA ejecuta cambios sensibles sin confirmación | Permisos y approval steps |
| Estado invisible | El cambio queda en conversación, no en config | Persistencia estructurada |
| Drift de conocimiento | Prompts y base se contradicen | Versionado y revisión |
| Falsa confianza | La interfaz suena segura aunque no validó | Validaciones y errores explícitos |
| Seguridad | Secretos aparecen en prompts o logs | Separación estricta de credenciales |

**Inferencia**: Una interfaz con IA no debe evaluarse por lo bien que conversa, sino por lo bien que protege la operación. Su éxito se mide en menos errores, menos dependencia, mejor documentación y cambios más trazables.

**Recomendación**: Antes de dar permisos de escritura a una interfaz con IA, úsala en modo lectura y simulación. Que primero explique estado, proponga cambios y muestre el diff esperado. Luego habilita acciones de bajo riesgo. Después, acciones sensibles con aprobación.

## Checklist para interfaces operativas con IA

Antes de incorporar una skill de onboarding o una CLI conversacional, conviene revisar si están dadas las condiciones mínimas.

| Criterio | Pregunta | Señal de alerta |
|---|---|---|
| Knowledge base | ¿Existe una estructura donde guardar lo aprendido? | La IA sólo responde en chat |
| Configuración | ¿El estado vive en archivos o tablas validadas? | Todo depende de variables dispersas |
| Validación | ¿Cada acción revisa schema, permisos y existencia? | El comando ejecuta con texto libre |
| Auditoría | ¿Se registra quién cambió qué y cuándo? | No hay historial operativo |
| Confirmación | ¿Las acciones sensibles piden aprobación clara? | La IA cambia estado sin mostrar impacto |
| Seguridad | ¿Los secretos quedan fuera de prompts y logs? | Credenciales copiadas en conversación |
| Reuso | ¿El sistema detecta patrones existentes? | Cada alta empieza desde cero |
| Reversibilidad | ¿Puede deshacerse o corregirse un cambio? | Un error exige intervención manual urgente |
| Observabilidad | ¿La interfaz muestra resultado y estado posterior? | El operador no sabe si el cambio aplicó |

Esta checklist ayuda a evitar una confusión frecuente: la interfaz con IA no es madura porque entiende lenguaje natural. Es madura cuando convierte lenguaje natural en operación segura.

## Preguntas prácticas para el lector

Si estás pensando en construir interfaces operativas con IA, empieza por estas preguntas:

1. ¿Qué tareas operativas se repiten y hoy requieren intervención técnica?
2. ¿Qué conocimiento se pierde durante el onboarding de un proveedor, cliente o proceso?
3. ¿Qué patrones podrían reutilizarse si el sistema los reconociera?
4. ¿Qué configuraciones están dispersas en variables, documentos o memoria del equipo?
5. ¿Qué acciones deberían poder ejecutarse por conversación y cuáles no?
6. ¿Qué necesita confirmar el sistema antes de escribir cambios?
7. ¿Dónde queda guardado el estado real después de una conversación?
8. ¿Quién puede auditar los cambios y revertirlos?
9. ¿Qué errores debería explicar la interfaz sin llamar a ingeniería?
10. ¿Qué parte de la operación seguiría siendo una caja negra aunque uses IA?

Estas preguntas devuelven la conversación al centro de la obra. No se trata de agregar IA porque suene moderno. Se trata de usarla para capturar conocimiento, reducir fricción y hacer más operable un sistema que antes dependía de cajas negras o configuraciones frágiles.

## Lección aprendida

Las interfaces operativas con IA cambian el punto de contacto entre personas y sistemas. En lugar de obligar al operador a aprender la estructura interna, permiten que el sistema pregunte, explique y traduzca intención en configuración formal.

**Evidencia del caso**: La skill de onboarding entrevista al operador, reconoce ERPs conocidos, reutiliza mappings, crea entradas en la knowledge base y actualiza prompts. La CLI conversacional muestra estado de vendors y flows, permite pausar combinaciones concretas y actualiza `flows.config.json`.

**Inferencia**: La ganancia no está en conversar por conversar. Está en convertir conversación en artefactos operativos: documentación, configuración, reglas, prompts y trazabilidad.

**Recomendación**: Construye interfaces con IA donde haya repetición, conocimiento tácito y configuración frágil. Pero hazlo sobre una base estructurada, observable y gobernada. La IA puede hacer más amable la operación; no debe volverla menos verificable.

El siguiente capítulo cierra la obra volviendo al oficio del developer. Después de revisar ETL, n8n, agentes, observabilidad e interfaces operativas, la pregunta ya no es qué herramienta gana. La pregunta es qué tipo de criterio necesita un equipo para encontrar cajas negras caras, capturar conocimiento y construir alternativas propias sin vender magia.
