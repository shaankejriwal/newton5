
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,100,300,8);

	ball1 = new Ball(480,200,20,20);

	ball2 = new Ball(510,200,20,20);

	ball3 = new Ball(540,200,20,20);

	ball4 = new Ball(570,200,20,20);

	ball5 = new Ball(600,200,20,20);

	ball6 = new Ball(630,200,20,20);

	ball7 = new Ball(660,200,20,20);

	ball8 = new Ball(690,200,20,20);

	ball9 = new Ball(720,200,20,20);

	rope1 = new Rope(ball1.body,{x:480,y:100})
	rope2 = new Rope(ball2.body,{x:510,y:100})
	rope3 = new Rope(ball3.body,{x:540,y:100})
	rope4 = new Rope(ball4.body,{x:570,y:100})
	rope5 = new Rope(ball5.body,{x:600,y:100})
	rope6 = new Rope(ball6.body,{x:630,y:100})
	rope7 = new Rope(ball7.body,{x:660,y:100})
	rope8 = new Rope(ball8.body,{x:690,y:100})
	rope9 = new Rope(ball9.body,{x:720,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ball6.display();
  ball7.display();
  ball8.display();
  ball9.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  rope7.display();
  rope8.display();
  rope9.display();

	mouseDragged();

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
}
