var canvas;
var database,playerCount;
var player,allPlayers;
var interface1
var quest
var obj
var gameState

function preload(){
obj = loadImage("39-393065_cake-slice-transparent-background.png")
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,600);
  interface1 = new Interface()
  interface1.getState()
  interface1.start()
  box = createSprite(150,200,30,30)
  box.addImage("adding",obj)
}


function draw(){
  background("greenyellow");
  box.visible = false;
  if(gameState == 1){
  box.visible = true;
  box.scale = 0.1
  if(playerCount>1)
    interface1.play();

  }
  drawSprites()
  if(gameState == 1){
    fill("black")
    stroke("black")
    text("here's some chocolate cake for you",30,250)
  }
}
