var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var car1I, car2I,car3I,car4I,zoomwayI,grondI
var cars, car1, car2, car3, car4;

function preload(){
zoomwayI = loadImage("track.jpg")
car1I = loadImage("car1.png")
car2I = loadImage("car2.png")
car3I = loadImage("car3.png")
car4I = loadImage("car4.png")
grondI = loadImage("ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
