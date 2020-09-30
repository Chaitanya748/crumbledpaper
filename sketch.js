
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

var paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
  World.add(world, ground);
 redbox1=createSprite(900,650,200,20);
 redbox2=createSprite(810,600,20,100);
 redbox3=createSprite(990,600,20,100)

 redbox1.shapeColor=("red");
 redbox2.shapeColor=("red");
 redbox3.shapeColor=("red");

	
   paper1 = new paper(200,200,50);
}


function draw() {
  background(0);
  Engine.update(engine);
  paper1.display();
  drawSprites();
  keyPressed();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paperObject.body.position,{x:85,y85})
  }
}



