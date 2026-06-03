# Apéndice D: Guion de charla de 20 minutos

## Objetivo

Presentar la tesis de la obra en formato charla técnica breve: la pregunta code/no-code quedó corta; el criterio útil es construir o elegir sistemas transparentes, observables, operables y apoyados en conocimiento estructurado.

## Audiencia

- Developers senior.
- Tech leads.
- CTOs.
- Responsables de automatización.
- Operaciones o negocio con exposición a procesos caros y opacos.

## Estructura general

| Minuto | Bloque | Objetivo |
|---:|---|---|
| 0:00-2:00 | Apertura | Reformular la pregunta code/no-code |
| 2:00-5:00 | Caso real | Mostrar el problema concreto |
| 5:00-8:00 | Enfoque 1 | Explicar la caja negra del ETL |
| 8:00-11:00 | Enfoque 2 | Explicar el límite operativo de herramienta low-code de workflows |
| 11:00-14:00 | Knowledge base | Mostrar el trabajo invisible |
| 14:00-17:00 | Agentes + observabilidad | Presentar el enfoque que funcionó |
| 17:00-19:00 | Tres rarezas | Mostrar consecuencias operativas |
| 19:00-20:00 | Cierre | Instalar el nuevo oficio del developer |

## 0:00-2:00 - Apertura

### Mensaje

La pregunta "¿code o no-code?" ya no alcanza. La pregunta útil es: ¿estamos construyendo sistemas que entendemos, operamos y podemos mejorar?

### Guion

```text
Durante años discutimos si convenía escribir código o usar herramientas no-code.

Pero en muchos proyectos reales esa no es la pregunta que decide el éxito.

La pregunta de verdad es otra:

¿El sistema es transparente?
¿Lo podemos operar?
¿Lo podemos diagnosticar cuando falla?
¿El conocimiento crítico sigue siendo nuestro?

La IA no elimina el trabajo del developer. Cambia qué parte del trabajo vale más.
```

### Transición

```text
Para bajarlo a tierra, voy a contar un caso concreto: sincronizar 8.000 productos desde cinco proveedores hacia plataforma de e-commerce.
```

## 2:00-5:00 - Caso real

### Mensaje

El problema no era mover datos. Era normalizar rarezas, traducir APIs custom y sostener operación.

### Puntos

- 8.000 productos.
- Cinco proveedores.
- Tres ERPs.
- APIs custom.
- Destino: hub de dropshipping hacia plataforma de e-commerce.
- Capa faltante: sincronización, normalización, errores y observabilidad.

### Guion

```text
El retailer no tenía stock propio.
Los proveedores tampoco tenían cuenta en hub de dropshipping.

Nuestro trabajo era hacer que sus APIs custom se comportaran como si la tuvieran.

Eso significa traducir esquemas, normalizar datos, manejar errores, sincronizar stock, productos, variantes e imágenes.

Y, sobre todo, poder entender qué pasaba cuando algo fallaba.
```

## 5:00-8:00 - Enfoque 1: ETL tradicional

### Mensaje

El ETL tradicional prometía simplicidad, pero entregaba dependencia.

### Puntos

- Vendor de ETL.
- Promesa: extract, transform, load.
- Problema: acceso restringido.
- El cliente no podía ver ni ajustar.
- Depuración dependiente de especialista externo.

### Guion

```text
Antes de construir una solución propia, probaron un vendor de ETL.

La promesa era perfecta: extract, transform, load.

Pero el flujo quedó dentro de una caja negra.
El cliente no podía ver, ajustar ni mantener.

Cuando había que depurar, había que llamar a un especialista externo.

La lección fue simple:
tercerizar a una caja negra resuelve el problema de hoy y crea la dependencia de mañana.
```

## 8:00-11:00 - Enfoque 2: herramienta low-code de workflows

### Mensaje

herramienta low-code de workflows parecía el punto medio, pero falló donde más importaba: escala y diagnóstico.

### Puntos

- Flujos visuales.
- Cloud-hosted.
- Mantenible por el equipo.
- Pruebas: chunks, data tables, cloud, Docker local, self-hosting.
- Problema: caídas sin logs útiles.

### Guion

```text
Después probamos herramienta low-code de workflows.

Tenía sentido: flujos visuales, más control, menos caja negra.

Construimos el flujo.

Y se cayó.
Y se cayó de nuevo.
Y se cayó otra vez.

Probamos paginar por chunks, data tables, cloud, Docker local, self-hosting en instancias más grandes.

El problema no fue sólo que fallara.
El problema fue que, cuando fallaba, no explicaba bien qué había pasado.

Una herramienta puede no ser una caja negra comercial y aun así ser una caja negra operativa.
```

## 11:00-14:00 - La base invisible

### Mensaje

La IA funcionó porque antes se ordenó el conocimiento.

### Puntos

- Docs de APIs.
- Mapeo vendor -> ERP.
- Notas cruzadas.
- Saber tribal.
- Markdown plano.

### Guion

```text
Antes de pivotar a IA hicimos el trabajo menos vistoso: ordenar documentación.

APIs de proveedores.
APIs de destino.
Webhooks.
Mapeo vendor a ERP.
Notas cruzadas.
Bugs compartidos.
Saber tribal.

Todo en Markdown plano: legible por humanos, parseable por agentes.

Ese fue el arma secreta.

No "usar IA".
Preparar el conocimiento para que la IA pudiera hacer algo útil.
```

## 14:00-17:00 - Enfoque 3: agentes + observabilidad

### Mensaje

Los agentes construyeron una alternativa operable porque recibieron contexto y objetivos claros.

### Puntos

- Knowledge base entregada a agentes.
- Pedido: dashboard, visibilidad, sync on-demand, vista de errores.
- Resultado: 8.014 productos, 0 errores, 512 MB pico, última corrida 12s.
- 2 horas de construcción agéntica después de preparar base.
- Costo de infraestructura contextual: 4 USD/mes.

### Guion

```text
Con la base lista, le dimos contexto a los agentes.

No pedimos "hagan un sync" en abstracto.

Pedimos dashboard, visibilidad, sync on-demand y vista de errores.

El resultado fue una sincronización operable:
productos sincronizados, errores visibles, memoria pico, última corrida, estado por vendor.

La victoria no fue sólo que anduvo.
La victoria fue que dejó de ser una caja negra.
```

### Nota editorial

Presentar los números como evidencia del caso, no como promesa general.

## 17:00-19:00 - Las tres rarezas

### Mensaje

Cuando el sistema es propio, aparecen interfaces y prácticas que antes eran difíciles de justificar.

### Rareza 1: monitoreo como feature

```text
CPU, memoria y red en el dashboard.
Sin add-ons.
Sin adivinar infraestructura.
```

### Rareza 2: onboarding guiado por entrevista

```text
La IA pregunta, detecta ERP conocido, reutiliza mapping y actualiza knowledge base.
```

### Rareza 3: CLI conversacional

```text
El operador gestiona vendors y flows sin tocar variables de entorno.
Arriba habla en su idioma.
Abajo se actualiza configuración estructurada.
```

## 19:00-20:00 - Cierre

### Mensaje

El nuevo oficio del developer no es aprender el framework más nuevo. Es hacer mejores preguntas.

### Guion

```text
La conclusión no es que todo vendor sea malo.
Tampoco que siempre convenga construir.
Y mucho menos que la IA haga magia.

La conclusión es que ahora podemos revisar cajas negras que antes aceptábamos por falta de alternativa.

El nuevo skill del developer es hacer mejores preguntas:

¿Cuál es el cuello de botella real?
¿Qué conocimiento hay que capturar?
¿Qué necesita observar el equipo?
¿Qué parte debe ser propia?
¿En qué puede ayudar la IA, en serio?

La pregunta no es code o no-code.

La pregunta es si estamos construyendo capacidad.
```

## Slides sugeridas

| Slide | Contenido |
|---:|---|
| 1 | Título: Code / No-Code |
| 2 | Tesis: la pregunta quedó corta |
| 3 | Caso: 8.000 productos, 5 proveedores, 3 ERPs |
| 4 | Enfoque 1: ETL tradicional |
| 5 | Enfoque 2: herramienta low-code de workflows |
| 6 | Knowledge base |
| 7 | Agentes + dashboard |
| 8 | Observabilidad como feature |
| 9 | Onboarding y CLI |
| 10 | Nuevo oficio del developer |

## Preguntas para Q&A

1. ¿Cuándo no conviene reemplazar un vendor?
2. ¿Cuánto trabajo previo requiere una knowledge base útil?
3. ¿Cómo se validan outputs de agentes?
4. ¿Qué datos no deberían entrar nunca en prompts?
5. ¿Cómo estimar TCO real de una alternativa propia?
6. ¿Qué señales muestran que low-code no está listo para producción?

## CTA final

```text
Elegí un proceso caro, opaco o manual.

No preguntes primero cómo automatizarlo.

Preguntá:
¿qué conocimiento encierra,
qué señales faltan
y qué capacidad debería recuperar el equipo?
```
