// Semana 10 - Observación de resultados y salidas
// Este archivo tiene una versión inicial. Busca las marcas TODO-S10 para mejorar el sistema.

const objetivoSistema = "Validar registros de producción rural y mostrar una salida clara de error, advertencia o éxito.";

const casosPrueba = [
  {
    id: 1,
    descripcion: "Datos normales",
    entrada: { dia: "Lunes", leche: "10", maiz: "20", responsable: "Ana" },
    esperadoTipo: "exito"
  },
  {
    id: 2,
    descripcion: "Campo obligatorio vacío",
    entrada: { dia: "", leche: "10", maiz: "20", responsable: "Ana" },
    esperadoTipo: "error"
  },
  {
    id: 3,
    descripcion: "Dato no numérico",
    entrada: { dia: "Martes", leche: "abc", maiz: "20", responsable: "Luis" },
    esperadoTipo: "error"
  },
  {
    id: 4,
    descripcion: "Cantidad negativa",
    entrada: { dia: "Miércoles", leche: "-5", maiz: "15", responsable: "Marta" },
    esperadoTipo: "error"
  },
  {
    id: 5,
    descripcion: "Cantidad en cero",
    entrada: { dia: "Jueves", leche: "0", maiz: "12", responsable: "Pedro" },
    esperadoTipo: "advertencia"
  },
  {
    id: 6,
    descripcion: "Producción baja",
    entrada: { dia: "Viernes", leche: "3", maiz: "8", responsable: "Sofía" },
    esperadoTipo: "advertencia"
  },
  {
    id: 7,
    descripcion: "Cantidad inusualmente alta",
    entrada: { dia: "Sábado", leche: "99999", maiz: "2000", responsable: "Elena" },
    esperadoTipo: "advertencia"
  }
];

const elementos = {
  dia: document.getElementById("dia"),
  leche: document.getElementById("leche"),
  maiz: document.getElementById("maiz"),
  responsable: document.getElementById("responsable"),
  salidaSistema: document.getElementById("salidaSistema"),
  interpretacion: document.getElementById("interpretacion"),
  validacionObjetivo: document.getElementById("validacionObjetivo"),
  tablaPruebas: document.getElementById("tablaPruebas"),
  btnValidar: document.getElementById("btnValidar"),
  btnCasos: document.getElementById("btnCasos"),
  btnLimpiar: document.getElementById("btnLimpiar")
};

function obtenerDatosFormulario() {
  return {
    dia: elementos.dia.value,
    leche: elementos.leche.value,
    maiz: elementos.maiz.value,
    responsable: elementos.responsable.value
  };
}

// TODO-S10-JS-01: Esta función genera una salida inicial, pero todavía no valida bien.
// Problema intencional: suma textos y acepta datos inválidos como si fueran correctos.
function procesarRegistro(datos) {
  const total = datos.leche + datos.maiz;

  return {
    tipo: "exito",
    mensaje: `Registro procesado. Total reportado: ${total}`,
    entrada: datos,
    total
  };
}

// TODO-S10-JS-02: Mejora esta función para explicar el tipo de mensaje generado.
function interpretarMensaje(resultado) {
  return "Pendiente: interpreta si el mensaje es error, advertencia o éxito.";
}

// TODO-S10-JS-03: Mejora esta función para comparar esperado vs. obtenido.
function validarObjetivo(resultado, esperadoTipo) {
  return {
    cumple: false,
    detalle: "Pendiente: compara el resultado esperado con el resultado obtenido."
  };
}

function mostrarSalida(resultado, esperadoTipo = null) {
  elementos.salidaSistema.textContent = resultado.mensaje;
  elementos.salidaSistema.className = "salida";
  elementos.interpretacion.textContent = interpretarMensaje(resultado);

  if (esperadoTipo) {
    const validacion = validarObjetivo(resultado, esperadoTipo);
    elementos.validacionObjetivo.textContent = validacion.detalle;
  } else {
    elementos.validacionObjetivo.textContent = "Validación pendiente: ejecuta un caso de prueba o compara con un objetivo esperado.";
  }

  console.log("Salida generada:", resultado);
}

function validarFormulario() {
  const datos = obtenerDatosFormulario();
  const resultado = procesarRegistro(datos);
  mostrarSalida(resultado);
}

// TODO-S10-JS-04: Revisa cómo se construye la tabla y mejora la interpretación de cada caso.
function ejecutarCasosPrueba() {
  elementos.tablaPruebas.innerHTML = "";

  casosPrueba.forEach((caso) => {
    const resultado = procesarRegistro(caso.entrada);
    const validacion = validarObjetivo(resultado, caso.esperadoTipo);
    const interpretacion = interpretarMensaje(resultado);

    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${caso.id}. ${caso.descripcion}</td>
      <td>Día: ${caso.entrada.dia || "(vacío)"}<br>Leche: ${caso.entrada.leche}<br>Maíz: ${caso.entrada.maiz}<br>Responsable: ${caso.entrada.responsable}</td>
      <td>${caso.esperadoTipo}</td>
      <td>${resultado.tipo}</td>
      <td>${validacion.cumple ? "Sí" : "No"}</td>
      <td>${interpretacion}</td>
    `;
    elementos.tablaPruebas.appendChild(fila);
  });
}

function limpiar() {
  elementos.dia.value = "";
  elementos.leche.value = "";
  elementos.maiz.value = "";
  elementos.responsable.value = "";
  elementos.salidaSistema.textContent = "Aún no se ha ejecutado ninguna prueba.";
  elementos.salidaSistema.className = "salida";
  elementos.interpretacion.textContent = "Pendiente por analizar.";
  elementos.validacionObjetivo.textContent = "Pendiente por validar.";
  elementos.tablaPruebas.innerHTML = '<tr><td colspan="6">Sin pruebas ejecutadas.</td></tr>';
}

elementos.btnValidar.addEventListener("click", validarFormulario);
elementos.btnCasos.addEventListener("click", ejecutarCasosPrueba);
elementos.btnLimpiar.addEventListener("click", limpiar);

console.info("Validador de Salidas Rurales iniciado. Revisa las marcas TODO-S10 en js/app.js.");
