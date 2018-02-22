let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let pixelCanvas = document.getElementById("pixelCanvas");

//Building the grid
function makeGrid() {
  let inputHeight = document.getElementById("inputHeight").value;
  let inputWidth = document.getElementById("inputWidth").value;

  let height = 1;
  while (height < inputHeight) {
    // for(let j = 0; j < inputHeight; j++) {
    height++;
    pixelCanvas.append("<tr></tr>");

    for (let i = 0; i < inputWidth; i++) {
      pixelCanvas
        .childNodes
        .last
        .append("<td></td>");
    }
  }
}

//Prevents submit button default action and calls makeGrid function
sizePicker.addEventListener("submit", subFunction);

function subFunction(event) {
    pixelCanvas.childNodes.remove;
    pixelCanvas.style.background = "white";
    event.preventDefault();
    makeGrid();
}
