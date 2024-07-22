function generateQuestion() {
    // Definir recipientes y sus capacidades en litros y mililitros
    const containers = [
        { name: 'vaso', capacity: Math.floor(Math.random() * 500) + 100 }, // Entre 100 y 600 ml
        { name: 'botella', capacity: Math.floor(Math.random() * 2000) + 500 }, // Entre 500 y 2500 ml
        { name: 'taza', capacity: Math.floor(Math.random() * 300) + 100 }, // Entre 100 y 400 ml
        { name: 'jarra', capacity: Math.floor(Math.random() * 1000) + 300 } // Entre 300 y 1300 ml
    ];

    // Convertir capacidades a litros si son mayores de 1000 ml
    containers.forEach(container => {
        if (container.capacity > 1000) {
            container.capacity = `${Math.floor(container.capacity / 1000)} litros`;
        } else {
            container.capacity = `${container.capacity} ml`;
        }
    });

    // Seleccionar dos recipientes diferentes
    let container1, container2;
    do {
        container1 = containers[Math.floor(Math.random() * containers.length)];
        container2 = containers[Math.floor(Math.random() * containers.length)];
    } while (container1 === container2);

    // Determinar cuál tiene más capacidad
    const capacity1 = parseInt(container1.capacity) * (container1.capacity.includes('litros') ? 1000 : 1);
    const capacity2 = parseInt(container2.capacity) * (container2.capacity.includes('litros') ? 1000 : 1);
    const moreCapacityContainer = capacity1 > capacity2 ? container1 : container2;

    // Configurar la pregunta y opciones
    document.getElementById('question').textContent = `¿Qué recipiente puede contener más líquido, una ${container1.name} de ${container1.capacity} o una ${container2.name} de ${container2.capacity}?`;

    const options = [
        { text: `${container1.name} (${container1.capacity})`, correct: container1 === moreCapacityContainer },
        { text: `${container2.name} (${container2.capacity})`, correct: container2 === moreCapacityContainer }
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

    resultDiv.textContent = isCorrect ? '¡Correcto! El recipiente con mayor capacidad es el correcto.' : 'Incorrecto. El recipiente con mayor capacidad es el correcto.';
}

// Inicializar con una pregunta al cargar la página
generateQuestion();