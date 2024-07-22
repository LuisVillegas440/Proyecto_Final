function generateQuestion() {
    // Definir objetos y superficies
    const objects = [
        { name: 'mesa', area: Math.random() * 10 + 1 },
        { name: 'alfombra', area: Math.random() * 10 + 1 },
        { name: 'silla', area: Math.random() * 10 + 1 },
        { name: 'cuadro', area: Math.random() * 10 + 1 }
    ];

    // Seleccionar dos objetos diferentes
    let object1, object2;
    do {
        object1 = objects[Math.floor(Math.random() * objects.length)];
        object2 = objects[Math.floor(Math.random() * objects.length)];
    } while (object1 === object2);

    // Determinar cuál tiene más superficie
    const moreSurfaceObject = object1.area > object2.area ? object1 : object2;

    // Configurar la pregunta y opciones
    document.getElementById('question').textContent = `¿Qué tiene más superficie, una ${object1.name} de ${object1.area.toFixed(2)} m² o una ${object2.name} de ${object2.area.toFixed(2)} m²?`;

    const options = [
        { text: `${object1.name} (${object1.area.toFixed(2)} m²)`, correct: object1 === moreSurfaceObject },
        { text: `${object2.name} (${object2.area.toFixed(2)} m²)`, correct: object2 === moreSurfaceObject }
    ];

    // Mezclar opciones
    options.sort(() => Math.random() - 0.5);

    // Mostrar opciones
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => checkAnswer(button, option.correct);
        optionsDiv.appendChild(button);
    });

    // Limpiar resultado anterior
    document.getElementById('result').textContent = '';
}

function checkAnswer(button, isCorrect) {
    const resultDiv = document.getElementById('result');
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(btn => {
        btn.disabled = true; // Deshabilitar todos los botones después de la selección
        if (btn === button) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });

    resultDiv.textContent = isCorrect ? '¡Correcto! El objeto con mayor superficie es el correcto.' : 'Incorrecto. El objeto con mayor superficie es el correcto.';
}

// Inicializar con una pregunta al cargar la página
generateQuestion();