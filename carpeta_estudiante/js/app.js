// Semana 10 - Observación de resultados y salidas
// Este archivo fue mejorado para validar entradas, interpretar mensajes y comparar resultados.

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

function convertirNumero(valor) {
  const texto = String(valor).trim().replace(",", ".");
  return texto === "" ? NaN : Number(texto);
}

function interpretarMensaje(resultado) {
  if (resultado.tipo === "error") {
    return "Este es un mensaje de error: la entrada no cumple con los requisitos y debe corregirse antes de continuar.";
  }

  if (resultado.tipo === "advertencia") {
    return "Este es un mensaje de advertencia: el registro se puede procesar, pero hay valores atípicos o riesgos que debes revisar.";
  }

  if (resultado.tipo === "exito") {
    return "Este es un mensaje de éxito: los datos son válidos y el cálculo se realizó correctamente.";
  }

  return "Resultado desconocido: revisa la lógica y los valores ingresados.";
}

function validarObjetivo(resultado, esperadoTipo) {
  const cumple = resultado.tipo === esperadoTipo;
  const detalle = cumple
    ? `Se esperaba un resultado '${esperadoTipo}' y se obtuvo '${resultado.tipo}'. El caso cumple con el objetivo.`
    : `Se esperaba '${esperadoTipo}' y se obtuvo '${resultado.tipo}'. El caso NO cumple con el objetivo.`;

  return {
    cumple,
    detalle
  };
}

function procesarRegistro(datos) {
  const dia = String(datos.dia).trim();
  const responsable = String(datos.responsable).trim();
  const leche = convertirNumero(datos.leche);
  const maiz = convertirNumero(datos.maiz);
  const total = Number.isFinite(leche) && Number.isFinite(maiz) ? leche + maiz : NaN;

  if (!dia || !responsable || String(datos.leche).trim() === "" || String(datos.maiz).trim() === "") {
    return {
      tipo: "error",
      mensaje: "Error: todos los campos son obligatorios. Completa día, leche, maíz y responsable.",
      entrada: { dia, leche, maiz, responsable },
      total: NaN
    };
  }

  if (!Number.isFinite(leche) || !Number.isFinite(maiz)) {
    return {
      tipo: "error",
      mensaje: "Error: las cantidades de leche y maíz deben ser números válidos.",
      entrada: { dia, leche, maiz, responsable },
      total: NaN
    };
  }

  if (leche < 0 || maiz < 0) {
    return {
      tipo: "error",
      mensaje: "Error: las cantidades no pueden ser negativas. Verifica los valores ingresados.",
      entrada: { dia, leche, maiz, responsable },
      total: NaN
    };
  }

  const advertencias = [];

  if (leche === 0 || maiz === 0) {
    advertencias.push("Una cantidad es cero.");
  }

  if (leche > 5000 || maiz > 1000) {
    advertencias.push("Cantidad inusualmente alta para un registro normal.");
  }

  if (leche > 0 && leche < 5) {
    advertencias.push("La producción de leche es muy baja.");
  }

  if (maiz > 0 && maiz < 10) {
    advertencias.push("La producción de maíz es muy baja.");
  }

  if (advertencias.length > 0) {
    return {
      tipo: "advertencia",
      mensaje: `Advertencia: ${advertencias.join(" ")} Total calculado: ${total}.`,
      entrada: { dia, leche, maiz, responsable },
      total
    };
  }

  return {
    tipo: "exito",
    mensaje: `Éxito: registro válido. Total de producción: ${total}.`,
    entrada: { dia, leche, maiz, responsable },
    total
  };
}

function mostrarSalida(resultado, esperadoTipo = null) {
  elementos.salidaSistema.textContent = resultado.mensaje;
  elementos.salidaSistema.className = `salida salida--${resultado.tipo}`;
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

function ejecutarCasosPrueba() {
  elementos.tablaPruebas.innerHTML = "";

  casosPrueba.forEach((caso) => {
    const resultado = procesarRegistro(caso.entrada);
    const validacion = validarObjetivo(resultado, caso.esperadoTipo);
    const interpretacion = interpretarMensaje(resultado);

    const fila = document.createElement("tr");
    fila.className = `fila-${resultado.tipo} ${validacion.cumple ? "fila-cumple" : "fila-no-cumple"}`;
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

  elementos.salidaSistema.textContent = `Se ejecutaron ${casosPrueba.length} casos de prueba. Revisa los resultados en la tabla.`;
  elementos.salidaSistema.className = "salida salida--info";
  elementos.interpretacion.textContent = "La tabla muestra el resultado esperado frente al resultado obtenido en cada caso.";
  elementos.validacionObjetivo.textContent = "Comprueba si el tipo de salida coincide con la expectativa de cada caso de prueba.";
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

console.info("Validador de Salidas Rurales iniciado. Revisa las mejoras en js/app.js.");
