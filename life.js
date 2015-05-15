

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext('2d');




var Game = {

  pixelSize :4,
  gridSize :10,
  lifeCycle: undefined,
  grid : undefined,


  init: function(){
    // set up our game display, variables, use helper funct
    console.log(canvas)

    canvas.width = Game.pixelSize * Game.gridSize;
    canvas.height = Game.pixelSize * Game.gridSize;

    console.log("GRID SIZE", Game.gridSize);


    Game.grid = makeGrid(Game.gridSize);

    console.log("GRID!!",Game.grid)

    // console.log(Game.makeMatrix(Game.gridSize));
    // console.log(context)
    // context.beginPath();
    // context.rect(188, 50, 200, 100);
    // context.fillStyle = 'yellow';
    // context.fill();



  },//init func
}//Game

//HELPER FUNCTIONS

var renderGrid = function(){
     //draw out our grid
  }


function makeGrid(gridSize) {
        var grid = [];
        for(var i = 0; i<gridSize; i++) {
                var row = [];
                for(var j = 0; j<gridSize; j++) {
                        row.push(0);
                }
                grid.push(row);
        }
        return grid;
}






// console.log(makeGrid(5));


  // makeCells: function(){
  //   //need a way to draw our cells
  // },

  // populateCells: function(){
  //   // set up game.
  // },



// console.log(Game);

Game.init();

// console.log(grid);

// Game.makeMatrix(20);






















