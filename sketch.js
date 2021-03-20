
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, ground, dustbin1, dustbin2, dustbin3;
var paperObject;

function setup() {
	createCanvas(1365, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  

	Engine.run(engine);
	
	paper = new Paper(100,200,30);
	ground= new Ground(400,490,1970,20);
	dustbin1= new Dustbin(1200,415,30,130);
    dustbin2= new Dustbin(1040,415,30,130);
	dustbin3= new Dustbin(1120,465,130,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
 


  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === 32){ 
  Matter.Body.setPosition(paperObject.body.position,paperObject.body.position, {x:+130, y:-145});
  }
  }