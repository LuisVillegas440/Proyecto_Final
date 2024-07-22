function generateTable() {
    const number = parseInt(document.getElementById('numberInput').value);
    const operation = document.getElementById('operation').value;
    let resultDiv = document.getElementById('result');
    let result = '';

    if (!isNaN(number) && number > 0) {
        for (let i = 1; i <= 10; i++) {
            if (operation === '*') {
                result += `${number} x ${i} = ${number * i}<br>`;
            } else if (operation === '+') {
                result += `${number} + ${i} = ${number + i}<br>`;
            }
        }
        resultDiv.innerHTML = result;
    } else {
        resultDiv.innerText = 'Por favor, ingresa un número entero positivo';
    }
}