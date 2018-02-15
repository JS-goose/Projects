//To ensure the DOM has rendered before executing jQuery
$(document).ready(function(event) {
  //Size Picker form
  const sizePicker = $("#sizePicker");
  //Canvas
  const pixelCanvas = $("#pixelCanvas");

  //Prevents submit button default action and calls makeGrid function
  $(sizePicker).on("submit", function(event) {
    pixelCanvas.children().remove();
    pixelCanvas.css("background-color", "white");
    event.preventDefault();
    makeGrid();
  });

  function makeGrid() {
    //Grid Height
    let inputHeight = $("#inputHeight").val();
    //Grid Width
    let inputWidth = $("#inputWidth").val();

    //Building cells
    let height = 0;
    while (height < inputHeight) {
      height++;
      pixelCanvas.append("<tr></tr>");
      // for (let height = 0; height < inputHeight; height++) {
      //     pixelCanvas.append('<tr></tr>');
      for (let width = 0; width < inputWidth; width++) {
        pixelCanvas
          .children()
          .last()
          .append("<td></td>");
      }
    }
  }

  //Setting color to each cell
  pixelCanvas.on("mousedown", "td", function() {
    //Chosen color
    const colorPicker = $("#colorPicker").val();
    $(this).css("background-color", colorPicker);
  });

  //Double click to remove coloring from single cell
  pixelCanvas.on("dblclick", "td", function() {
    $(this).css("background-color", "");
  });

  //Erase all 00current styling
  $("#eraserButton").on("click", function(event) {
    event.preventDefault();
    pixelCanvas.find("td").css("background-color", "");
  });
});
