// 1. BUTTON CLICK EVENT
const clickBtn = document.getElementById('clickBtn');
const displayText = document.getElementById('displayText');

clickBtn.addEventListener('click', function () {
  displayText.textContent = 'Button was clicked! Text changed successfully.';
  displayText.style.color = '#0f766e';
});

// 2. MOUSE EVENTS
const hoverBox = document.getElementById('hoverBox');

hoverBox.addEventListener('mouseover', function () {
  hoverBox.textContent = 'Mouse is hovering!';
});

hoverBox.addEventListener('mouseout', function () {
  hoverBox.textContent = 'Hover over me!';
});

// 3. INPUT EVENT
const nameInput = document.getElementById('nameInput');
const greeting = document.getElementById('greeting');

nameInput.addEventListener('keyup', function () {
  const name = nameInput.value;
  if (name) {
    greeting.textContent = 'Hello, ' + name + '!';
    greeting.style.color = '#6b21a8';
  } else {
    greeting.textContent = '';
  }
});

// 4. FORM SUBMIT EVENT
const myForm = document.getElementById('myForm');
const formMessage = document.getElementById('formMessage');

myForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const userInput = document.getElementById('userInput').value;
  formMessage.textContent = 'Form submitted! You entered: ' + userInput;
  formMessage.style.color = '#0f766e';
});
