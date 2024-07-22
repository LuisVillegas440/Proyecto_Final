function analyzeText() {
    let text = document.getElementById('inputText').value;
    let charCount = text.length;
    let vowelCount = (text.match(/[aeiouáéíóúüAEIOUÁÉÍÓÚÜ]/g) || []).length;
    let signCount = (text.match(/[.,:;!?¿¡#'"()\-@+[=-_{}]/g) || []).length;
    let spaceCount = (text.match(/\s/g) || []).length;
    let wordCount = (text.match(/\b\w+\b/g) || []).length;
    let digitCount = (text.match(/\d/g) || []).length;

    let resultText = `
        <p>Caracteres totales: ${charCount}</p>
        <p>Vocales: ${vowelCount}</p>
        <p>Signos: ${signCount}</p>
        <p>Espacios: ${spaceCount}</p>
        <p>Palabras: ${wordCount}</p>
        <p>Dígitos: ${digitCount}</p>
    `;

    document.getElementById('result').innerHTML = resultText;
}