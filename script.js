// What appears on the screen
let screenContent = document.querySelector('#content');
console.log(screenContent);
// screenContent.textContent = "fish";

// function zero() {
//     let zeroValue = document.querySelector('#num-0');
//     console.log(zeroValue);
//     console.log(zeroValue.textContent);

//  }

// writting num 0 on the screen
let num0 = document.getElementById("num-0");
console.log(num0.textContent);

num0.addEventListener('click', function() {
  let zeroValue = num0.textContent;
  console.log(zeroValue);
  screenContent.textContent += zeroValue;
});