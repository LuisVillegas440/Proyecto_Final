function convert(conversionType) {
    let inputValue = document.getElementById('inputValue').value.trim();
    let result;

    if (conversionType === 'binToDec') {
        if (!/^[01]+$/.test(inputValue)) {
            alert("Por favor, ingresa un número binario válido.");
            return;
        }
        result = parseInt(inputValue, 2).toString(10);
    } else if (conversionType === 'decToBin') {
        if (!/^\d+$/.test(inputValue)) {
            alert("Por favor, ingresa un número decimal válido.");
            return;
        }
        result = parseInt(inputValue, 16).toString(2).padStart(4, '0');
    } else {
        alert("Conversión no válida.");
        return;
    }

    document.getElementById('result').innerText = "Resultado: " + result;
}