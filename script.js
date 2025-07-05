const billInput = document.getElementById('billAmount');
const numPeopleInput = document.getElementById('numPeople');
const namesContainer = document.getElementById('namesContainer');
const generateNamesBtn = document.getElementById('generateNames');
const calculateBtn = document.getElementById('calculateBtn');
const resultDiv = document.getElementById('result');

generateNamesBtn.addEventListener('click', () => {
  const numPeople = parseInt(numPeopleInput.value);
  if (isNaN(numPeople) || numPeople <= 0) {
    alert('Please enter a valid number of people.');
    return;
  }

  // Clear previous
  namesContainer.innerHTML = '';

  for (let i = 1; i <= numPeople; i++) {
    const label = document.createElement('label');
    label.textContent = `Person ${i} Name (optional)`;
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'personName';
    input.placeholder = `Name of person ${i}`;

    namesContainer.appendChild(label);
    namesContainer.appendChild(input);
  }
});

calculateBtn.addEventListener('click', () => {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  if (isNaN(bill) || bill <= 0) {
    alert('Please enter a valid bill amount.');
    return;
  }

  if (isNaN(numPeople) || numPeople <= 0) {
    alert('Please enter a valid number of people.');
    return;
  }

  const perPerson = (bill / numPeople).toFixed(2);

  const nameInputs = document.querySelectorAll('.personName');
  let resultHTML = `<h3>Split Details</h3>`;
  if (nameInputs.length === 0) {
    for (let i = 1; i <= numPeople; i++) {
      resultHTML += `<p>Person ${i}: ₹${perPerson}</p>`;
    }
  } else {
    nameInputs.forEach((input, idx) => {
      const name = input.value.trim() || `Person ${idx + 1}`;
      resultHTML += `<p>${name}: ₹${perPerson}</p>`;
    });
  }

  resultDiv.innerHTML = resultHTML;
});
