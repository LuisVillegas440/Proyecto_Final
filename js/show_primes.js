function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function showPrimes() {
    let input = document.getElementById('inputNumbers').value;
    let numbers = input.split(',').map(Number);
    let primes = numbers.filter(isPrime);

    document.getElementById('result').innerText = "Números primos: " + primes.join(', ');
}