function generateFibonacci() {
    let number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number) || number <= 0) {
        alert("Por favor, ingresa un número entero positivo.");
        return;
    }

    let fibonacci = [0, 1];
    for (let i = 2; i < number; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = fibonacci.slice(0, number).join(', ');
}