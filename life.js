

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


    Game.grid = Game.makeGrid(Game.gridSize);

    Game.setup();

    Game.display(Game.grid);




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
   console.log (Game.grid[30][5] =1)
   console.log (Game.grid[30][6] =1)
   console.log (Game.grid[20][4]=1)
   console.log (Game.grid[20][3]=1)
   console.log (Game.grid[20][1]=1)
   console.log (Game.grid[30][7]=1)
  },


  drawCell: function(x,y,alive){
        context.beginPath();
        context.rect(x*Game.pixelSize, y*Game.pixelSize, Game.pixelSize, Game.pixelSize);
        // console.log("*********************************")
        // console.log("hello"+(this.x, this.y, this.alive))
        context.fillStyle = alive ? 'green' : 'grey';
        context.fill()
  },


  display:function(grid){
    for(var x = 0; x < grid.length; x++) {
                for(var y = 0; y < grid[x].length; y++) {
                        // console.log("******************")
                        // console.log(arr[x][y])
                        Game.drawCell(x,y,grid[x][y])
                }
        }
  },


  nextGen: function(grid){
    var newGen = makeGrid();
    for(var x = 0; x < grid.length; x++){
      for(var y = 0; y<grid[x].length; y++){
        var square = grid[x][y];
        var aliveCount = "";
      }

    }

  },






}//Game




Game.init();























