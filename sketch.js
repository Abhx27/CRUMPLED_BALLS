var paperObject
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	lineSprite=createSprite(800, height-35, 200,10);
	lineSprite.shapeColor=color(255,0,0)

	line2Sprite=createSprite(700, height-80, 10,100);
	line2Sprite.shapeColor=color(255,0,0)

	line3Sprite=createSprite(900, height-80, 10,100);
	line3Sprite.shapeColor=color(255,0,0)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = createSprite(100,height-35,30,30)
	paper.shapeColor=color(255,0,254)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if (keyDown("RIGHT_ARROW")) {
    paper.velocityX(5)
  }

  if (keyDown("LEFT_ARROW")) {
    paper.velocityX(-5)
  }


  drawSprites();
 
}

