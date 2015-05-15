

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext('2d');




var Game = {

  pixelSize :4,
  gridSize: 100,
  grid : undefined,


  init: function(){

    canvas.width = Game.pixelSize * Game.gridSize;
    canvas.height = Game.pixelSize * Game.gridSize;

    Game.grid = Game.makeGrid(Game.gridSize);

    Game.randomize();

    Game.display();

    Game.loop();

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



  drawCell: function(x,y,alive){
        context.beginPath();
        context.rect(x*Game.pixelSize, y*Game.pixelSize, Game.pixelSize, Game.pixelSize);
        context.fillStyle = alive ? 'red' : 'lightgrey';
        context.fill()
  },


  display:function(){
    for(var x = 0; x < Game.grid.length; x++) {
                for(var y = 0; y < Game.grid[x].length; y++) {
                        Game.drawCell(x,y,Game.grid[x][y])
                }
        }
  },


  aliveCount:function(arr, x, y){
    if(x > 0 && y > 0 && x < Game.gridSize-1 && y < Game.gridSize -1){
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
    for(var x = 0; x < grid.length; x++){
      for(var y = 0; y<grid[x].length; y++){
        var square = grid[x][y];
        var aliveCount = Game.aliveCount(Game.grid, x, y)
        if(square == 1){
            if( aliveCount < 2 ){
                newGen[x][y] = 0;
            }else if(aliveCount == 2 || aliveCount == 3){
                newGen[x][y] = 1;
            }else if(aliveCount >3){
                newGen[x][y] = 0;
            }
        }else if(square == 0 && aliveCount == 3 ){
            newGen[x][y] = 1;
        }
      }

    }
    return newGen;
  },

  randomize: function(){
    for(var x = 0; x < Game.grid.length; x++) {
                for(y = 0; y < Game.grid[x].length; y++) {
                        if (Math.random() > 0.5){
                                Game.grid[x][y]=1;

                        }else{
                          Game.grid[x][y]= 0;
                        }
                }
        }
  },


  loop : function(){

    setInterval(function(){

      var next = Game.nextGen(Game.grid);

      console.log(next);

      Game.display(next);

      Game.grid = next;

    },300)
  }

}

Game.init();


























