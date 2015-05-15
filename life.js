

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext('2d');




var Game = {

  pixelSize :4,
  gridSize: 100,
  lifeCycle: undefined,
  grid : undefined,


  init: function(){
    // set up our game display, variables, use helper funct
    console.log(canvas)

    canvas.width = Game.pixelSize * Game.gridSize;
    canvas.height = Game.pixelSize * Game.gridSize;

    console.log("GRID SIZE", Game.gridSize);


    Game.grid = Game.makeGrid(Game.gridSize);

    console.log(Game.grid)

    // console.log(Game.makeMatrix(Game.gridSize));
    // console.log(context)
    // context.beginPath();
    // context.rect(188, 50, 200, 100);
    // context.fillStyle = 'yellow';
    // context.fill();

    console.log( "GRID 20", Game.grid[20][20])


  },//init func

  makeGrid: function(gridSize){
      var grid = [];
        for(var i = 0; i<gridSize; i++) {
                var row = [];
                for(var j = 0; j<gridSize; j++) {
                        row.push(0);
                }
                grid.push(row);
        }
        return grid;
  },

  setup: function(){
    Game.grid[30][5] =1
    Game.grid[30][6] =1
    Game.grid[20][4]=1
    Game.grid[20][3]=1
    Game.grid[20][1]=1
    Game.grid[30][7]=1
  }


}//Game




// var makeGrid = function(gridSize) {
//         var grid = [];
//         for(var i = 0; i<gridSize; i++) {
//                 var row = [];
//                 for(var j = 0; j<gridSize; j++) {
//                         row.push(0);
//                 }
//                 grid.push(row);
//         }
//         return grid;
// }


Game.init();




// console.log(makeGrid(5));


  // makeCells: function(){
  //   //need a way to draw our cells
  // },

  // populateCells: function(){
  //   // set up game.
  // },



// console.log(Game);


// console.log(grid);

// Game.makeMatrix(20);


//HELPER FUNCTIONS

// var renderGrid = function(){

//      //draw out our grid
//   }

// var basicSetup

// var drawCell(x,y,alive){
//   context.beginPath();
//   context.rect

// }



















