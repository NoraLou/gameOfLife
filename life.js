

var canvas = document.getElementById("myCanvas");

var context = canvas.getContext('2d');




var Game = {


  init: function(){
    // set up our game display, variables, use helper funct
    console.log(canvas)

    // canvas.height = 400
    // canvas.width = 400

    var pixelSize = 6;
    var numCells = 100;

    canvas.width = pixelSize * numCells;
    canvas.height = pixelSize *numCells;


    // console.log(context)

    // context.beginPath();
    // context.rect(188, 50, 200, 100);
    // context.fillStyle = 'yellow';
    // context.fill();

    //set the height/width of our background


    //set up the grid

  },//init func


  displayGrid: function(){
     //draw out our grid
  },

  makeMatrix: function(){
    var arr = []
    for(var i = 0; i < numCells; i++){

    }


  },

  makeCells: function(){
    //need a way to draw our cells
  },

  populateCells: function(){
    // set up game.
  },




}

Game.init();
