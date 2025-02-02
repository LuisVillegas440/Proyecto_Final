const ejercicios = [
    ["¿Qué tiene más superficie, una mesa de 1 m² o una alfombra de 2 m²?", 2],
    ["¿Cuál es menor, un jardín de 10 m² o un balcón de 5 m²?", 5],
    [" ¿Qué recipiente puede contener más líquido, un vaso de 250 ml o una botella de 1 litro?", 1],
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