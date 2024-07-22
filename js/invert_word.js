function invertText() {
    let text = document.getElementById('inputText').value;
    let invertedText = text.split('').reverse().join('');
    document.getElementById('result').innerText = "Texto invertido: " + invertedText;
}