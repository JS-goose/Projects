let squares = document.querySelectorAll(".colorBox");
let one = document.querySelector(".one");
let numSquares = 6;
let colors = generateRandColors(numSquares);
let pickedColor = randNumber();
let pickedColorSpan = document.getElementById("pickedColorSpan");
const rightAnswer = document.querySelector(".correct");
const boxes = document.querySelectorAll(".box");
const newColors = document.getElementById("newColors");
const buttonEasy = document.getElementById("buttonEasy");
const buttonHard = document.getElementById("buttonHard");
const mode = document.querySelectorAll(".mode");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
let easyMode = true;
let hardMode = true;

// Adds the chosen color to top of page
pickedColorSpan.innerHTML = pickedColor;

// Color looping function to set background color of all squares
function colorLoop() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
}
// Provides logic for mode buttons when clicked
function buttonLogic() {
  rightAnswer.classList.add("correct");
  boxes.forEach(boxes => boxes.style.backgroundColor = "lightblue");
  colors = generateRandColors(numSquares);
  pickedColor = randNumber();
  pickedColorSpan.innerHTML = pickedColor;
  mode[0].classList.add("selected");
  mode[1].classList.add("selected");
}

// Looping through squares to change background
for (let i = 0; i < squares.length; i++) {
  // add colors to all squares
  squares[i].style.backgroundColor = colors[i];
  // add event listeners to all squares
  squares[i].addEventListener("click", function() {
    // get color of picked square
    const clickedColor = this.style.backgroundColor;
    // compare color to pickedColor
    if (clickedColor === pickedColor) {
      // Correct answer
      this.style.backgroundColor = "rgb(240, 230, 140)";
      rightAnswer.classList.remove("correct");
      colorChange(clickedColor);
      boxes.forEach(boxes => boxes.style.backgroundColor = pickedColor);
      newColors.innerHTML = "Play Again?";
    } else {
      this.style.backgroundColor = "rgb(240, 230, 140)";
    }
  });
}
// Used to pass in clickedColor in above logic
function colorChange(color) {
  //loop through the squares
  for (let i = 0; i < squares.length; i++) {
    // sets background color of all squares to the picked color
    squares[i].style.backgroundColor = pickedColor;
  }
}
// Generates random number to use with colors array
function randNumber() {
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// Generates array with random rgb values
function generateRandColors(num) {
  // make array
  let arr = [];
  // repeat num times
  for (let i = 0; i < num; i++) {
    // rand color and push to array
    arr.push(randColor());
  }
  // return array
  return arr;
}
// Generates randome numbers for each color channel
function randColor() {
  // red 0-255
  let red = Math.floor(Math.random() * 256);
  // green 0-255
  let green = Math.floor(Math.random() * 256);
  // blue 0-255
  let blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}
// ***Features and Functionality***
// New Colors Button
newColors.addEventListener("click", function() {
  rightAnswer.classList.add("correct");
  if (hardMode) {
    //   Generate new colors for hard mode
    colors = generateRandColors(numSquares); //was 6
    // Pick a new random color from array
    pickedColor = randNumber();
    // Display new color
    pickedColorSpan.innerHTML = pickedColor;
    // Change colors of squares
    colorLoop();
  } else if (easyMode) {
    // Generate 3 colors
    numSquares = 3;
    colors = generateRandColors(numSquares); //was 3
    pickedColor = randNumber();
    pickedColorSpan.innerHTML = pickedColor;
    //
    colorLoop();
    four.classList.add("hidden");
    five.classList.add("hidden");
    six.classList.add("hidden");
  }
  // Resets text on button to "New Colors" after winning
  this.innerHTML = "New Colors";
  // Resets header color to default after winning
  boxes.forEach(boxes => boxes.style.backgroundColor = "lightblue");
});

// Setting the game mode
// ***Easy Mode***
buttonEasy.addEventListener("click", function() {
  buttonLogic();
  easyMode = true;
  numSquares = 3;
  colorLoop();
  // Show only 3 squares
  if (easyMode) {
    four.classList.add("hidden");
    five.classList.add("hidden");
    six.classList.add("hidden");
  }
  buttonHard.classList.remove("selected");
});

// ***Hard Mode***
buttonHard.addEventListener("click", function() {
  buttonLogic();
  hardMode = true;
  numSquares = 6;
  colorLoop();
  //   Show all 6 squares
  if (hardMode) {
    four.classList.remove("hidden");
    five.classList.remove("hidden");
    six.classList.remove("hidden");
  }
  buttonEasy.classList.remove("selected");
});
