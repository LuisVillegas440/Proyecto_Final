function showEvenOddNumbers() {
    const startNumber = parseInt(document.getElementById('startNumber').value);
    const endNumber = parseInt(document.getElementById('endNumber').value);
    let evenNumbers = [];
    let oddNumbers = [];

    if (startNumber <= endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
            } else {
                oddNumbers.push(i);
            }
        }
        document.getElementById('evenResult').innerText = `Pares: ${evenNumbers.join(', ')}`;
        document.getElementById('oddResult').innerText = `Impares: ${oddNumbers.join(', ')}`;
    } else {
        document.getElementById('evenResult').innerText = 'El número inicial debe ser menor o igual al número final';
        document.getElementById('oddResult').innerText = '';
    }
}