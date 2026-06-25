# Validación de resultados y salidas

## Objetivo del sistema

Validar registros de producción rural y mostrar una salida clara de error, advertencia o éxito.

---

## Observación inicial

Al ejecutar la primera prueba manual con Día: Lunes, Leche: 10, Maíz: 20, Responsable: Ana, el sistema mostró un resultado claro de éxito y calculó el total correctamente. La salida indicó que el registro era válido y no presentó errores en la consola.

---

## Tabla de pruebas

| Nº | Datos ingresados | Resultado esperado | Resultado obtenido | ¿Cumple? | Interpretación |
|---|---|---|---|---|---|
| 1 | Lunes, leche 10, maíz 20, Ana | Éxito | Éxito | Sí | Registro válido y total calculado correctamente. |
| 2 | Día vacío, leche 10, maíz 20, Ana | Error | Error | Sí | Detecta campo obligatorio vacío y requiere corrección. |
| 3 | Martes, leche abc, maíz 20, Luis | Error | Error | Sí | Detecta que la cantidad de leche no es un número válido. |
| 4 | Miércoles, leche -5, maíz 15, Marta | Error | Error | Sí | Detecta valores negativos y rechaza el registro. |
| 5 | Jueves, leche 0, maíz 12, Pedro | Advertencia | Advertencia | Sí | Indica que una cantidad es cero y debe revisarse. |
| 6 | Viernes, leche 3, maíz 8, Sofía | Advertencia | Advertencia | Sí | Indica producción baja o valores atípicos. |
| 7 | Sábado, leche 99999, maíz 2000, Elena | Advertencia | Advertencia | Sí | Indica cantidades inusualmente altas para un registro normal. |

---

## Mensajes interpretados

1. Mensaje: "Éxito: registro válido. Total de producción: 30."
   - Interpretación: El sistema confirma que los datos son correctos y que el cálculo del total se realizó bien.

2. Mensaje: "Error: las cantidades de leche y maíz deben ser números válidos."
   - Interpretación: El sistema detectó un dato no numérico y está indicando que el usuario debe ingresar números.

---

## Mejora aplicada en el código

Se mejoró la función `procesarRegistro` para convertir cantidades a número, rechazar campos vacíos, rechazar cantidades negativas y generar advertencias cuando hay cero, producción baja o valores muy altos. También se actualizó `interpretarMensaje` para clasificar los mensajes y `validarObjetivo` para comparar el resultado esperado con el resultado obtenido.

---

## Conclusión

Después de los cambios, el sistema cumple el objetivo funcional porque detecta entradas inválidas, diferencia entre error, advertencia y éxito, y muestra mensajes claros. La validación ahora compara el resultado esperado con el obtenido en los casos de prueba y ayuda al usuario a entender si debe corregir los datos o si la salida es correcta.
