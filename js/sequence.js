const ejercicios = [
  ["¿Qué número sigue en la secuencia 2, 4, 6, ...?", 8],
  ["¿Cuál es el patrón en la secuencia 5, 10, 15, ...?", 5],
];

function generarRespuestas(respuestaCorrecta) {
  const respuestaFalsaUno = respuestaCorrecta - 2;
  const respuestaFalsaDos = respuestaCorrecta + 3;
  const respuestas = [respuestaFalsaUno, respuestaFalsaDos];
  const indiceRespuestaCorrecta = Math.floor(Math.random() * 3);
  respuestas.splice(indiceRespuestaCorrecta, 0, respuestaCorrecta);
  return respuestas;
}

function generarRespuestaEnHtml(respuestas, indiceEjercicioSeleccionado) {
  let respuestasHtml = "";
  for (let i = 0; i < respuestas.length; i++) {
    const respuesta = respuestas[i];
    respuestasHtml += `<div onclick="validarRespuesta(${respuesta},${indiceEjercicioSeleccionado});" class="alternative">${respuesta}</div>`;
  }
  return respuestasHtml;
}

function validarRespuesta(respuesta, ejercicioSeleccionado) {
  document.getElementById("alert").style.display = "block";
  if (ejercicios[ejercicioSeleccionado][1] == respuesta) {
    document.getElementById("alert").classList.remove("alert-failure");
    document.getElementById("alert").classList.add("alert-success");
    document.getElementById("alert").innerHTML =
      '<i class="fa-solid fa-circle-check"></i> Respuesta correcta';
  } else {
    document.getElementById("alert").classList.remove("alert-success");
    document.getElementById("alert").classList.add("alert-failure");
    document.getElementById("alert").innerHTML =
      '<i class="fa-solid fa-circle-exclamation"></i> Respuesta incorrecta';
  }
}

function cargarEjercicio() {
  document.getElementById("alert").style.display = "none";
  const indiceEjercicioSeleccionado = Math.floor(
    Math.random() * ejercicios.length
  );
  const ejercicioSeleccionado = ejercicios[indiceEjercicioSeleccionado];
  document.getElementById("question").innerText = ejercicioSeleccionado[0];
  const respuestas = generarRespuestas(ejercicioSeleccionado[1]);
  const respuestasHtml = generarRespuestaEnHtml(
    respuestas,
    indiceEjercicioSeleccionado
  );
  document.getElementById("answers").innerHTML = respuestasHtml;
}

cargarEjercicio();
