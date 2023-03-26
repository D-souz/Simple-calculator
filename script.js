// what appears on the screen
let screenContent = document.getElementById('content');
console.log(screenContent.value);

// writting to the screen
function addToScreen(value) {
  screenContent.value += value;
}


// Clearing the screen
function clearScreen() {
  screenContent.value = "";
}

// Deleting characters on the screen
function deleteCharacters() {
  let result = document.getElementById('content').value;
  document.getElementById('content').value = result.substring(0, result.length - 1);
}

// Performing arithmetric operations
function calculate() {
  let expression = document.getElementById('content').value;
  let finalAnswer = eval(expression);
  document.getElementById('content').value = finalAnswer;
}

