var hypnoticBall, database;
var position;
var playerCount
var gameState = 0
var form
var player
var game

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
game = new Game()
game.getState()
game.start()
}

function draw(){
  background("white");
  
   
    drawSprites();
  
}

