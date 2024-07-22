function generateOptions() {
    const input = document.getElementById('sequence').value;
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');

    if (!input.trim()) {
        resultDiv.textContent = 'Por favor ingrese una secuencia válida.';
        optionsDiv.innerHTML = '';
        return;
    }

    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length < 2) {
        resultDiv.textContent = 'La secuencia debe contener al menos dos números.';
        optionsDiv.innerHTML = '';
        return;
    }

    // Determine the difference or ratio
    const differences = [];
    const ratios = [];
    
    for (let i = 1; i < numbers.length; i++) {
        differences.push(numbers[i] - numbers[i - 1]);
        ratios.push(numbers[i] / numbers[i - 1]);
    }

    const allEqualDiff = differences.every(diff => diff === differences[0]);
    const allEqualRatio = ratios.every(ratio => ratio === ratios[0]);

    let correctPattern;
    if (allEqualDiff) {
        correctPattern = `Secuencia que suma con una diferencia de ${differences[0]}.`;
    } else if (allEqualRatio && ratios[0] !== 1) {
        correctPattern = `Secuencia que multiplica con una razón de ${ratios[0]}.`;
    } else {
        correctPattern = 'No se pudo identificar un patrón claro en la secuencia.';
    }

    // Generate random options
    const patterns = [
        `Secuencia con una diferencia de ${differences[0]}`,
        `Secuencia que suma con una razón de ${ratios[0]}`,
    ];
    
    const options = patterns.filter(pattern => pattern !== correctPattern);
    options.push(correctPattern);
    options.sort(() => Math.random() - 0.5); // Shuffle options

    // Create buttons for options
    optionsDiv.innerHTML = '';
    options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(option, correctPattern);
        optionsDiv.appendChild(button);
    });

    resultDiv.textContent = '';
}

function checkAnswer(selectedOption, correctPattern) {
    const optionsDiv = document.getElementById('options');
    const resultDiv = document.getElementById('result');

    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(button => {
        button.disabled = true; // Disable all buttons after an answer is chosen
        if (button.textContent === correctPattern) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
    });

    if (selectedOption === correctPattern) {
        resultDiv.textContent = '¡Correcto! El patrón de la secuencia es: ' + correctPattern + '.';
    } else {
        resultDiv.textContent = 'Incorrecto. El patrón correcto es: ' + correctPattern + '.';
    }
}