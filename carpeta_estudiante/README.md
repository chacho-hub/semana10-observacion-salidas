# Semana 10: Observación de resultados y salidas

## Actividad: ¿El sistema muestra lo que debe mostrar?

En esta actividad vas a trabajar con una mini página web llamada **Validador de Salidas Rurales**. El objetivo no es solo que la página abra, sino que aprendas a observar las salidas, interpretar los mensajes y validar si el sistema cumple los objetivos esperados.

---

## 1. Propósito

Al finalizar, podrás:

- Diferenciar una salida correcta de una salida incorrecta.
- Interpretar mensajes de error, advertencia y éxito.
- Comparar resultado esperado vs. resultado obtenido.
- Usar la consola del navegador como herramienta de diagnóstico.
- Completar un micro-quiz y un glosario técnico.
- Mejorar una parte del código para que los mensajes sean más claros.

---

## 2. Archivos del proyecto

```text
carpeta_estudiante/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
└── evidencias/
    ├── cuestionario_glosario.md
    └── validacion_resultados.md
```

---

## 3. Cómo abrir el proyecto en VS Code

1. Abre **Visual Studio Code**.
2. Selecciona **File > Open Folder** o **Archivo > Abrir carpeta**.
3. Abre la carpeta `carpeta_estudiante`.
4. Abre el archivo `index.html`.
5. Ejecuta la página con **Live Server** o abre `index.html` directamente en el navegador.
6. Abre la consola del navegador con `F12` o `Ctrl + Shift + I` y entra a la pestaña **Console**.

---

## 4. Lectura guiada

Observar los resultados de un programa significa revisar cuidadosamente lo que el sistema muestra después de ejecutar una acción. En una página web, las salidas pueden ser textos, mensajes, tablas, alertas, cambios visuales o datos calculados.

Interpretar mensajes implica comprender si el sistema informa un error, una advertencia, una operación exitosa o una instrucción para el usuario.

Validar objetivos consiste en comprobar si el resultado obtenido coincide con lo esperado. Por ejemplo, si un sistema debe rechazar cantidades negativas y acepta `-5`, entonces el sistema no cumple su objetivo.

---

## 5. Actividad A: observación inicial

1. Ejecuta la página.
2. Ingresa estos datos:

```text
Día: Lunes
Leche: 10
Maíz: 20
Responsable: Ana
```

3. Observa el mensaje generado.
4. Pregúntate:
   - ¿El resultado es claro?
   - ¿El cálculo tiene sentido?
   - ¿El mensaje indica error, advertencia o éxito?
   - ¿La consola muestra errores?

Registra tu análisis en `evidencias/validacion_resultados.md`.

---

## 6. Actividad B: ejecución de casos de prueba

Haz clic en el botón **Ejecutar casos de prueba**. Revisa la tabla que aparece y responde:

- ¿Cuáles casos cumplen?
- ¿Cuáles casos no cumplen?
- ¿Qué mensajes son confusos?
- ¿Qué salida debería mostrarse en cada caso?

---

## 7. Actividad C: mejora del código

Abre `js/app.js` y busca las marcas `TODO-S10`. Tu tarea es mejorar el sistema para que:

- convierta cantidades a número;
- rechace campos vacíos;
- rechace cantidades negativas;
- muestre advertencias cuando la cantidad sea cero, muy baja o demasiado alta;
- compare el resultado esperado contra el resultado obtenido;
- muestre mensajes claros de error, advertencia o éxito.

No borres todo el archivo. Trabaja por partes y prueba cada cambio.

---

## 8. Micro-quiz

Responde en `evidencias/cuestionario_glosario.md`.

1. ¿Qué es una salida en un programa?
2. ¿Qué significa interpretar un mensaje del sistema?
3. ¿Qué debería mostrar el sistema si el usuario ingresa letras en un campo numérico?
4. ¿Qué tipo de mensaje es “Registro guardado correctamente”?
5. ¿Qué tipo de mensaje es “Cantidad inusualmente alta, revise el dato”?
6. ¿Qué se debe comparar para validar un resultado?
7. Si un sistema debe calcular un promedio y entrega un número incorrecto, ¿qué tipo de problema puede existir?
8. ¿Qué herramienta permite observar mensajes técnicos de una página web?
9. ¿Cuál salida es más clara: `NaN`, `undefined` o “La cantidad debe ser un número válido”? ¿Por qué?
10. ¿Qué significa validar el objetivo de un sistema?
11. ¿Qué puede significar `NaN` en JavaScript?
12. ¿Por qué es útil comparar el resultado esperado con el resultado obtenido?
13. ¿Qué mensaje debería aparecer si un campo obligatorio está vacío?
14. Menciona tres tipos de salidas en una página web.
15. ¿Por qué interpretar correctamente los mensajes ayuda a mejorar una aplicación?

---

## 9. Glosario

En el mismo archivo `evidencias/cuestionario_glosario.md`, define mínimo 10 términos:

- Salida
- Resultado esperado
- Resultado obtenido
- Validación
- Mensaje de error
- Mensaje de advertencia
- Mensaje de éxito
- Consola
- Inspector
- Live Server
- Terminal
- NaN
- undefined
- Debug
- Objetivo funcional

---

## 10. Evidencias para entregar

Entrega la carpeta del proyecto con:

- `index.html`
- `css/styles.css`
- `js/app.js`
- `evidencias/cuestionario_glosario.md`
- `evidencias/validacion_resultados.md`

---

## 11. Cierre

Al final, escribe una conclusión breve en `validacion_resultados.md` explicando si el sistema cumple el objetivo y qué mejora aplicaste.
