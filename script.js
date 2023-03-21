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

// // displaying num1 on the screen
// let num1 = document.getElementById("num-1");
// console.log(num1.textContent);
// num1.addEventListener('click', function() {
//   let oneValue = num1.textContent;
//   console.log(oneValue);
//   screenContent.textContent += oneValue;
// })

// // displaying num2 on the screen
// let num2 = document.getElementById("num-2");
// console.log(num2.textContent);
// num2.addEventListener('click', function() {
//   let twoValue = num2.textContent;
//   console.log(twoValue);
//   screenContent.textContent += twoValue;
// })

// // displaying num3 on the screen
// let num3 = document.getElementById("num-3");
// console.log(num3.textContent);
// num3.addEventListener('click', function() {
//   let threeValue = num3.textContent;
//   console.log(threeValue);
//   screenContent.textContent += threeValue;
// })

// // displaying num4 on the screen
// let num4 = document.getElementById("num-4");
// console.log(num4.textContent);
// num4.addEventListener('click', function() {
//   let fourValue = num4.textContent;
//   console.log(fourValue);
//   screenContent.textContent += fourValue;
// })

// // displaying num5 on the screen
// let num5 = document.getElementById("num-5");
// console.log(num5.textContent);
// num5.addEventListener('click', function() {
//   let fiveValue = num5.textContent;
//   console.log(fiveValue);
//   screenContent.textContent += fiveValue;
// })

// // displaying num6 on the screen
// let num6 = document.getElementById("num-6");
// console.log(num6.textContent);
// num6.addEventListener('click', function() {
//   let sixValue = num6.textContent;
//   console.log(sixValue);
//   screenContent.textContent += sixValue;
// })

// // displaying num7 on the screen
// let num7 = document.getElementById("num-7");
// console.log(num7.textContent);
// num7.addEventListener('click', function() {
//   let sevenValue = num7.textContent;
//   console.log(sevenValue);
//   screenContent.textContent += sevenValue;
// })

// // displaying num6 on the screen
// let num8 = document.getElementById("num-8");
// console.log(num8.textContent);
// num8.addEventListener('click', function() {
//   let eightValue = num8.textContent;
//   console.log(eightValue);
//   screenContent.textContent += eightValue;
// })

// // displaying num9 on the screen
// let num9 = document.getElementById("num-9");
// console.log(num9.textContent);
// num9.addEventListener('click', function() {
//   let nineValue = num9.textContent;
//   console.log(nineValue);
//   screenContent.textContent += nineValue;
// })