
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,greenbin,greenbinImg;
var world;

function preload(){
   greenbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

  	greenbin = createSprite(964,520,20,20);
    greenbin.addImage(greenbinImg);
    greenbin.scale = 0.45;


	paper = new Paper(700,240,70,70);



	Engine.run(engine);

	drawSprites();
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paper.display();
  image(greenbinImg,1200,650);
	

}

