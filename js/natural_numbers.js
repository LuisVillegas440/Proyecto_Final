function calculateSum() {
    const numberInput = document.getElementById('numberInput').value;
    const number = parseInt(numberInput);
    let sum = 0;

    if (number > 0) {
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        document.getElementById('result').innerText = `La suma de los números naturales hasta ${number} es ${sum}`;
    } else {
        document.getElementById('result').innerText = 'Por favor, ingresa un número entero positivo';
    }
}