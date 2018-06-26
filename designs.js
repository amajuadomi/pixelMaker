// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let gridHeight, gridWidth, color;

//get number of rows and columns, then call makeGrid function
$("#sizePicker").submit( function (getGridSize){
    getGridSize.preventDefault(); //
    gridHeight = $("#inputHeight").val();
    gridWidth = $("#inputWeight").val();
    makeGrid(gridHeight, gridWidth);
})

/*Create grid by creating table rows "tr" and inputting columns "td" in them
 based on the values passed in makeGrid function */
function makeGrid(gridHeight, gridWidth) {
//remove old tables: clear past data
    $("tr").remove();
//add new table: grid
    for (let rows = 1; rows<=gridHeight; rows++ ){
      //add rows and class
        $("#pixelCanvas").append("<tr id = row" + rows + "></tr>");
            for (let columns = 1; columns<=gridWidth; columns++ ){
            //add columns inside rows
            $("#row" +  rows).append("<td></td>");
          }
    }
//assign color to grid cell on mouse click
    $("td").click(function (){
          // get value of color from color picker
          color = $("#colorPicker").val();
          // assign color to grid cell when it is clicked
          $(this).css("background-color", color);

      })

}
