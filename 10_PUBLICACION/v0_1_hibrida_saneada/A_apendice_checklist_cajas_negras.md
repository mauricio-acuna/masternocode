# Apéndice A: Checklist para detectar cajas negras caras

## Para qué sirve

Este checklist ayuda a detectar procesos donde una empresa paga demasiado por herramientas opacas, vendors recurrentes o integraciones manuales, y a decidir si vale la pena explorar una alternativa propia, asistida por IA o parcialmente reemplazada.

No es una invitación a reemplazar todo. Es una herramienta de discovery. Su objetivo es separar frustración genérica de oportunidad real.

## Señales de una caja negra cara

| Señal | Pregunta de validación | Riesgo si se ignora |
|---|---|---|
| Suscripción alta por una función acotada | ¿Qué parte exacta del proceso justifica el costo? | Se paga por inercia, no por valor real |
| Dependencia del vendor para cambios simples | ¿Quién puede modificar reglas, mappings o flujos? | Cada cambio se vuelve lento y caro |
| Falta de logs útiles | ¿Qué se ve cuando el proceso falla? | Diagnóstico tardío o imposible |
| Integración pobre con sistemas centrales | ¿Cuántas planillas, exports o copias manuales existen? | Datos inconsistentes y trabajo duplicado |
| Reglas de negocio no documentadas | ¿Qué sabe el equipo que la herramienta no sabe? | El conocimiento queda atrapado en personas |
| Costo por volumen, usuarios o features | ¿El precio crece aunque el problema sea estable? | El TCO se vuelve desproporcionado |
| Operación dependiente de especialistas | ¿Quién entiende el flujo de punta a punta? | La empresa no puede operar con autonomía |
| Métricas insuficientes | ¿Se puede explicar costo, duración, errores y recursos? | Se decide por intuición |

## Preguntas de discovery

1. ¿Qué proceso duele más cuando se cae?
2. ¿Quién lo entiende de punta a punta?
3. ¿Qué se paga por mes o por año?
4. ¿Qué parte del proceso se hace manualmente?
5. ¿Qué datos se copian entre sistemas?
6. ¿Dónde vive la documentación real?
7. ¿Qué reglas sabe el equipo pero no están escritas?
8. ¿Qué logs, métricas o errores están disponibles?
9. ¿Qué decisiones dependen de información que hoy no se ve?
10. ¿Qué pasaría si el vendor sube precios, cambia una API o corta una feature?

## Criterios de oportunidad

Una caja negra merece exploración cuando combina varias de estas condiciones:

| Criterio | Señal fuerte | Señal débil |
|---|---|---|
| Costo | Alto y recurrente | Bajo o marginal |
| Criticidad | Afecta operación, ventas, stock, soporte o finanzas | Proceso auxiliar |
| Opacidad | No hay diagnóstico ni control | Hay logs y soporte razonables |
| Conocimiento interno | El equipo conoce reglas que el vendor no modela | El proceso es estándar |
| Integración | Hay exports, planillas o pasos manuales | La integración actual es suficiente |
| Repetición | El proceso ocurre con frecuencia | Caso aislado |
| Riesgo de cambio | El negocio cambia reglas seguido | Reglas estables y simples |

## Semáforo rápido

| Resultado | Interpretación | Acción recomendada |
|---|---|---|
| 0-3 señales fuertes | Probablemente no es prioridad | Mantener, observar y revisar más adelante |
| 4-6 señales fuertes | Hay oportunidad de mejora | Hacer discovery técnico y económico |
| 7 o más señales fuertes | Candidata clara | Preparar matriz buy/build/reemplazo parcial |

## Evidencia mínima antes de proponer reemplazo

Antes de sugerir construir una alternativa, conviene reunir:

| Evidencia | Por qué importa |
|---|---|
| Factura o costo anual | Permite comparar TCO real |
| Mapa de flujo actual | Muestra dónde vive la opacidad |
| Lista de fallos recientes | Evita discutir en abstracto |
| Reglas de negocio conocidas | Define qué conocimiento debe capturarse |
| Sistemas integrados | Aclara alcance y dependencias |
| Métricas disponibles | Indica nivel actual de observabilidad |
| Personas afectadas | Muestra impacto operativo |
| Riesgos regulatorios o de seguridad | Define límites de automatización |

## Señales de cautela

No todo vendor caro debe reemplazarse. Conviene frenar si:

- El proceso es altamente regulado y no hay capacidad interna de control.
- El vendor ofrece soporte, auditoría y cumplimiento difíciles de replicar.
- El equipo no puede operar ni mantener una alternativa.
- La documentación interna es casi inexistente.
- El ahorro proyectado depende de supuestos no validados.
- El costo de error supera claramente el costo de la suscripción.

## Resultado esperado del checklist

El resultado no debería ser "construir" o "no construir" de inmediato. Debería ser una hipótesis:

```text
Creemos que este proceso merece exploración porque combina:
- costo recurrente alto,
- opacidad en errores,
- reglas internas no capturadas,
- integración pobre,
- y dependencia del vendor para cambios frecuentes.
```

Esa hipótesis luego se valida con la matriz del Apéndice C.
