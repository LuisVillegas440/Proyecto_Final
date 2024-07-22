function generateOptions() {
  const input = document.getElementById('sequence').value;
  const optionsDiv = document.getElementById('options');
  const resultDiv = document.getElementById('result');

  if (!input.trim()) {
      resultDiv.textContent = 'Por favor ingrese una secuencia válida.';
      optionsDiv.innerHTML = '';
      return;
  }

  const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  
  if (numbers.length < 2) {
      resultDiv.textContent = 'La secuencia debe contener al menos dos números.';
      optionsDiv.innerHTML = '';
      return;
  }

  // Determine the difference or ratio
  const differences = [];
  const ratios = [];
  
  for (let i = 1; i < numbers.length; i++) {
      differences.push(numbers[i] - numbers[i - 1]);
      ratios.push(numbers[i] / numbers[i - 1]);
  }

  const allEqualDiff = differences.every(diff => diff === differences[0]);
  const allEqualRatio = ratios.every(ratio => ratio === ratios[0]);

  let nextNumber;
  if (allEqualDiff) {
      nextNumber = numbers[numbers.length - 1] + differences[0];
  } else if (allEqualRatio && ratios[0] !== 1) {
      nextNumber = numbers[numbers.length - 1] * ratios[0];
  } else {
      resultDiv.textContent = 'No se pudo determinar un patrón claro en la secuencia.';
      optionsDiv.innerHTML = '';
      return;
  }

  // Generate random options
  const options = [];
  while (options.length < 4) {
      let option = nextNumber + Math.floor(Math.random() * 10) - 5;
      if (options.indexOf(option) === -1 && option !== nextNumber) {
          options.push(option);
      }
  }
  options.push(nextNumber);
  options.sort(() => Math.random() - 0.5); // Shuffle options

  // Create buttons for options
  optionsDiv.innerHTML = '';
  options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(option, nextNumber);
      optionsDiv.appendChild(button);
  });

  resultDiv.textContent = '';
}

function checkAnswer(selectedOption, correctAnswer) {
  const optionsDiv = document.getElementById('options');
  const resultDiv = document.getElementById('result');

  const buttons = optionsDiv.querySelectorAll('button');
  buttons.forEach(button => {
      button.disabled = true; // Disable all buttons after an answer is chosen
      if (parseFloat(button.textContent) === correctAnswer) {
          button.classList.add('correct');
      } else if (parseFloat(button.textContent) === selectedOption) {
          button.classList.add('incorrect');
      }
  });

  if (selectedOption === correctAnswer) {
      resultDiv.textContent = '¡Correcto! El siguiente número en la secuencia es ' + correctAnswer + '.';
  } else {
      resultDiv.textContent = 'Incorrecto. El siguiente número en la secuencia es ' + correctAnswer + '.';
  }
}
