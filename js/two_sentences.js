function countWords(phrase) {
    return phrase.trim().split(/\s+/).length;
}

function comparePhrases() {
    let frase1 = document.getElementById('frase1').value;
    let phrase2 = document.getElementById('phrase2').value;

    let wordCount1 = countWords(frase1);
    let wordCount2 = countWords(phrase2);

    let resultText;
    if (wordCount1 > wordCount2) {
        resultText = `La primera frase tiene más palabras (${wordCount1} palabras) que la segunda frase (${wordCount2} palabras).`;
    } else if (wordCount2 > wordCount1) {
        resultText = `La segunda frase tiene más palabras (${wordCount2} palabras) que la primera frase (${wordCount1} palabras).`;
    } else {
        resultText = `Ambas frases tienen el mismo número de palabras (${wordCount1} palabras).`;
    }

    document.getElementById('result').innerText = resultText;
}