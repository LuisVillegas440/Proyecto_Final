function convert(conversionType) {
    let inputValue = document.getElementById('inputValue').value.trim();
    let result;

    if (conversionType === 'binToHex') {
        if (!/^[01]+$/.test(inputValue)) {
            alert("Por favor, ingresa un número binario válido.");
            return;
        }
        result = parseInt(inputValue, 2).toString(16).toUpperCase();
    } else if (conversionType === 'hexToBin') {
        if (!/^[0-9A-Fa-f]+$/.test(inputValue)) {
            alert("Por favor, ingresa un número hexadecimal válido.");
            return;
        }
        result = parseInt(inputValue, 16).toString(2).padStart(4, '0');
    } else {
        alert("Conversión no válida.");
        return;
    }

    document.getElementById('result').innerText = "La conversión es: " + result;
}