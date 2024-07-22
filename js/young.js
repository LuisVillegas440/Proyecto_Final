function generateQuestion() {
    // Generar nombres y edades aleatorios
    const names = ['Ivis', 'Misael', 'Pedro', 'Ana', 'Luis', 'Gabriel'];
    const ages = [10, 12, 14, 16, 18, 20];

    const name1 = names[Math.floor(Math.random() * names.length)];
    let name2;
    do {
        name2 = names[Math.floor(Math.random() * names.length)];
    } while (name2 === name1);

    const age1 = ages[Math.floor(Math.random() * ages.length)];
    let age2;
    do {
        age2 = ages[Math.floor(Math.random() * ages.length)];
    } while (age2 === age1);

    const correctName = age1 < age2 ? name1 : name2;

    // Configurar la pregunta y opciones
    document.getElementById('question').textContent = `¿Quién es menor, ${name1} de ${age1} años o ${name2} de ${age2} años?`;

    const options = [
        { text: name1, correct: name1 === correctName },
        { text: name2, correct: name2 === correctName }
    ];

    // Mezclar opciones
    options.sort(() => Math.random() - 0.5);

    // Mostrar opciones
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.text;
        button.onclick = () => checkAnswer(option.correct);
        optionsDiv.appendChild(button);
    });

    // Limpiar resultado anterior
    document.getElementById('result').textContent = '';
}

function checkAnswer(isCorrect) {
    const resultDiv = document.getElementById('result');
    const buttons = document.querySelectorAll('.options button');
    buttons.forEach(button => {
        button.disabled = true; // Deshabilitar todos los botones después de la selección
        if (button.textContent === 'Juan' || button.textContent === 'María') {
            button.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
    });

    resultDiv.textContent = isCorrect ? '¡Correcto! El nombre menor es el correcto.' : 'Incorrecto. El nombre menor es el correcto.';
}

// Inicializar con una pregunta al cargar la página
generateQuestion();