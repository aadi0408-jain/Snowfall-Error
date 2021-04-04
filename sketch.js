const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var snow, bg;

var engine, world;
var snow = [];
var rand;

var maxSnow = 100;

function preload(){
  snow = loadImage("snow.png");
  bg = loadImage("bg.jpg");
}
function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800,400);
  
  if(frameCount % 150 === 0){

    for(var i=0; i<maxSnow; i++){
      snow.push(new createSnow(random(0,400), random(0,400)));
    }

}

}

function draw() {
  Engine.update(engine);
  background(bg);  
  snow.display();
  for(var i = 0; i<maxSnow; i++){
    snow[i].showSnow();
    snow[i].updateY()
    
}
  drawSprites();
}