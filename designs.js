// When size is submitted by the user, call makeGrid()
// Get the number of rows and columns from user input

$( document ).ready(function() {

  $("#sizePicker").submit(function (event){
      // Prevent Submit Default Behaviour
      event.preventDefault();
      // Get value of rows
      const gridHeight = $("#inputHeight").val();
      // Get value of columns
      const gridWidth = $("#inputWeight").val();
      //Call makeGrid function
      makeGrid(gridHeight, gridWidth);
  })

  function makeGrid(gridHeight, gridWidth) {
  //Remove old tables: clear past data
      $("tr").remove();
  //Add table rows
        for (let rows = 1; rows<=gridHeight; rows++){
            $("#pixelCanvas").append("<tr></tr>");
        }
  //Add table columns
        for (let columns = 1; columns<=gridWidth; columns++){
            $("tr").append("<td></td>");
        }

  //Assign color to grid cell on mouse click
      $("td").click(function (){
            // Get value of color
            const color = $("#colorPicker").val();

            // Check if the cell has a color
            if ($(this).attr("style")){
              // Remove color from cell if a color already exist
              $(this).css("background-color", "");

            } else {
              // If no color exists, add color to cell
              $(this).css("background-color", color);
            }

        })
  }
});
