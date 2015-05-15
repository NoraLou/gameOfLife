

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




    // console.log("**********************")
    // // console.log(Game.grid[30][5])

    // console.log(Game.nextGen(Game.grid));




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
    Game.grid[30][5]=1
    Game.grid[20][5]=1
    Game.grid[30][6]=1
    Game.grid[22][7] = 1
    Game.grid[21][6]=1
    Game.grid[20][5]=1
    Game.grid[20][4]=1
    Game.grid[20][3]=1
    Game.grid[20][1]=1
    Game.grid[30][7]=1
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


  aliveCount:function(gridSize, x, y){
    //check for corners
    //greater than zero, within bounds of grid
    if(x > 0 && y > 0 && x < gridSize-1 && y < gridSize -1){
      var numAlive = arr[x-1][y-1]+
                     arr[x][y-1]+
                     arr[x+1][y-1]+
                     arr[x-1][y]+
                     arr[x+1][y]+
                     arr[x-1][y+1]+
                     arr[x][y+1]+
                     arr[x+1][y+1];
       return numAlive;

    }else{
      return 0;
    }
  },


  nextGen: function(grid){
    var newGen = Game.makeGrid(Game.gridSize);
    console.log("NEW GEN",newGen);
    for(var x = 0; x < grid.length; x++){
      for(var y = 0; y<grid[x].length; y++){
        var square = grid[x][y];
        console.log("SQUARE",square);
        var aliveCount = Game.aliveCount(grid, x, y)
        console.log("AM I HERE??")
        if(square == 1){
            if( aliveCount < 2 ){
                newGen[x][y] = 0;
            }else if(aliveCount == 2 || aliveCount == 3){
                newGen[x][y] = 0;
            }else if(aliveCount >3){
                newGen[x][y] = 0;
            }
        }else{
          if(square == 0 && aliveCount == 3 ){
            newGen[x][y] = 1;
          }
        }
      }

    }
    return newGen;
  },



}//Game

Game.init();

console.log(Game)

console.log("*****************************")

console.log(Game.nextGen(Game.grid));

























