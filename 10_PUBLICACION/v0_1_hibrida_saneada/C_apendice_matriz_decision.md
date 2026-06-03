# Apéndice C: Matriz de decisión buy/build/no-code/agentes

## Para qué sirve

Esta matriz ayuda a decidir si conviene comprar una herramienta, mantener un vendor, usar low-code/no-code, construir custom, usar agentes con knowledge base o reemplazar sólo una parte del proceso.

La matriz no decide sola. Ordena la conversación y obliga a explicitar tradeoffs.

## Opciones evaluadas

| Opción | Descripción breve |
|---|---|
| Comprar / mantener vendor | Usar una herramienta o proveedor externo como solución principal |
| Low-code / no-code | Construir sobre plataformas visuales o configurables |
| Construcción custom | Desarrollar sistema propio con código tradicional |
| Agentes con knowledge base | Usar IA para acelerar construcción sobre conocimiento estructurado |
| Reemplazo parcial | Mantener una parte externa y construir la capa crítica propia |

## Criterios principales

| Criterio | Pregunta |
|---|---|
| Criticidad | ¿Qué pasa si el proceso falla? |
| Opacidad | ¿Podemos ver, diagnosticar y modificar el flujo? |
| Conocimiento propio | ¿El proceso contiene reglas específicas del negocio? |
| Costo recurrente | ¿El costo mensual/anual es proporcional al valor? |
| Escala | ¿El volumen actual o futuro exige control fino? |
| Cambio | ¿Las reglas cambian con frecuencia? |
| Integración | ¿Debe conectarse a sistemas internos o APIs raras? |
| Seguridad | ¿Hay datos sensibles, permisos o auditoría? |
| Operación | ¿El equipo puede sostener la solución? |
| Salida | ¿Podemos migrar si la opción falla? |

## Puntuación simple

Usa una escala de 1 a 5:

| Puntaje | Significado |
|---|---|
| 1 | Bajo / poco relevante |
| 2 | Moderado bajo |
| 3 | Medio |
| 4 | Alto |
| 5 | Crítico |

## Matriz base

| Criterio | Peso | Vendor | Low-code | Custom | Agentes + KB | Reemplazo parcial |
|---|---:|---:|---:|---:|---:|---:|
| Criticidad del proceso |  |  |  |  |  |  |
| Necesidad de visibilidad |  |  |  |  |  |  |
| Reglas propias del negocio |  |  |  |  |  |  |
| Costo recurrente |  |  |  |  |  |  |
| Volumen / escala |  |  |  |  |  |  |
| Frecuencia de cambio |  |  |  |  |  |  |
| Complejidad de integración |  |  |  |  |  |  |
| Seguridad / auditoría |  |  |  |  |  |  |
| Capacidad interna de operación |  |  |  |  |  |  |
| Facilidad de salida |  |  |  |  |  |  |

## Cómo interpretar

| Patrón detectado | Lectura probable |
|---|---|
| Baja criticidad, bajo conocimiento propio, buen soporte externo | Comprar o mantener vendor |
| Flujo simple, cambios frecuentes, volumen moderado | Low-code puede ser suficiente |
| Alta criticidad, reglas propias, necesidad de control | Custom o reemplazo parcial |
| Hay conocimiento documentable y tareas repetibles de construcción | Agentes con knowledge base pueden acelerar |
| El vendor sirve para una capa pero oculta la operación crítica | Reemplazo parcial |

## Señales a favor de comprar

- El proceso es estándar en la industria.
- La herramienta ofrece buena observabilidad.
- El vendor tiene soporte confiable.
- El costo es bajo frente al riesgo.
- El equipo no tiene capacidad de operar una alternativa.
- La diferenciación para el negocio es limitada.

## Señales a favor de low-code/no-code

- El flujo es simple o moderado.
- El volumen no tensiona la plataforma.
- La operación acepta las limitaciones de observabilidad.
- Los cambios son frecuentes pero no críticos.
- La herramienta permite exportar, auditar o versionar lo necesario.
- Una caída no compromete datos o ingresos críticos.

## Señales a favor de construir custom

- El proceso contiene reglas centrales del negocio.
- El costo recurrente externo es alto.
- La integración actual es opaca o frágil.
- El equipo necesita control de datos, errores y métricas.
- La escala requiere optimización propia.
- El sistema debe integrarse con herramientas internas.

## Señales a favor de agentes con knowledge base

- Hay documentación o se puede crear.
- El dominio tiene patrones reutilizables.
- Existen reglas, mappings o ejemplos claros.
- El equipo puede revisar outputs de IA.
- La solución necesita interfaces, dashboards, CLIs o automatizaciones internas.
- La velocidad de construcción visible importa, pero no a costa de perder control.

## Señales a favor de reemplazo parcial

- El vendor resuelve bien una capa no estratégica.
- La capa crítica es opaca, cara o difícil de cambiar.
- El equipo puede construir una capa de sincronización, observabilidad o operación alrededor.
- Reemplazar todo sería demasiado caro o riesgoso.
- Existe una frontera técnica clara entre lo que se conserva y lo que se construye.

## Matriz de riesgo

| Riesgo | Vendor | Low-code | Custom | Agentes + KB | Reemplazo parcial |
|---|---|---|---|---|---|
| Lock-in | Alto si no hay salida | Medio | Bajo/medio | Bajo/medio | Medio |
| Opacidad | Variable | Media en fallos | Depende del diseño | Depende de KB y observabilidad | Variable |
| Mantenimiento | Externo | Compartido | Interno | Interno asistido | Mixto |
| Velocidad inicial | Alta | Alta | Media/baja | Alta si hay contexto | Media |
| Costo recurrente | Variable/alto | Variable | Infra + equipo | Infra + equipo | Mixto |
| Riesgo de mala implementación | Bajo/medio | Medio | Alto si se subestima | Alto si falta contexto | Medio |

## Resultado recomendado

Documenta la decisión en este formato:

```markdown
## Decisión

Opción elegida:

## Motivo

Elegimos esta opción porque:
-
-
-

## Qué se conserva

-

## Qué se construye o cambia

-

## Riesgos aceptados

-

## Señales para revisar la decisión

-
```

## Regla práctica

Si el proceso es crítico, caro, opaco y contiene conocimiento propio, no decidas sólo por velocidad inicial. Decide por capacidad futura: entender, operar, corregir y evolucionar.
