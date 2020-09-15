const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var building;
var player;

function preload(){
    buildingimg = loadImage("building.png");

}

function setup(){
    canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    building = createSprite(500,300,200,200);
    building.addImage(buildingimg);
    building.scale = 0.9;
    player = createSprite(500,500,20,20);
    
    //adding boundries 
    b1 = createSprite(displayWidth/2-65,displayHeight-50,40,10);
    
    b2 = createSprite(432,340,5,400);
    b2 = createSprite(570,340,5,400);
}
function draw(){
    background(0);
    Engine.update(engine);
    spawnblocks();
    drawSprites();
}
function spawnblocks(){

       //var block = createSprite(random(displayWidth/2-100,displayWidth/2+100),displayHeight/2-200,20,5);
       // block.velocityY = 4;
    }


