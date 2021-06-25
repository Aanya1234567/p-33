const Engine=Matter.engine;
const World=Matter.world;
const Bodies=Matter.bodies;
const Constraint=Matter.Constraint
var engine,world;
var background;
var bgImg,snow,snowImg,

function preload()
{
  bgImg=loadImage("snow3.jpg");
  snow=loadImage("snow5.webp");
 }
function setup() {
 var canvas=createCanvas(1700,700)
engine=Engine.create()
world=engine.world
 
}
function draw() {
  background(bgImg);  
  drawSprites();
}
