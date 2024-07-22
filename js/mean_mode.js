function calculateAverage(numbers) {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

function calculateMode(numbers) {
    let frequency = {};
    let maxFreq = 0;
    let mode = [];

    numbers.forEach(num => {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    });

    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            mode.push(Number(num));
        }
    }

    return mode;
}

function analyzeNumbers() {
    let input = document.getElementById('inputNumbers').value;
    let numbers = input.split(',').map(Number);
    let average = calculateAverage(numbers);
    let mode = calculateMode(numbers);

    document.getElementById('result').innerHTML = `
        <p>Promedio: ${average.toFixed(2)}</p>
        <p>Moda: ${mode.join(', ')}</p>
    `;
}