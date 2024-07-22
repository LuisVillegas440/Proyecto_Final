function isPerfect(num) {
    if (num <= 1) return false;
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}

function showPerfectNumbers() {
    let input = document.getElementById('inputNumbers').value;
    let numbers = input.split(',').map(Number);
    let perfectNumbers = numbers.filter(isPerfect);

    document.getElementById('result').innerText = "Números perfectos: " + perfectNumbers.join(', ');
}