
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var ball;
var ground;
var leftS;
var rightS;
var side1;
var side2;
var side3;
var ground2;


function setup() {
	createCanvas(1600, 800);

	ground =new Ground(width/2,690,width,20);
    leftS =new Ground(1400,600,20,120);
	rightS =new Ground(1200,600,20,120);
	side1=new Ground(1590,height/2,20,height);
	side2 =new Ground(10,height/2,20,height);
	side3=new Ground(width/2,10,width,20);
  ground2 =new Ground(1300,580,200,20);


   var ball_options={
	   isStatic:false,
	   restitution:0.1,
	   friction:0,
	   density:7
   }
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(600, 400, 30, ball_options)
	World.add(world,ball);


    rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.run(engine);
}


function draw() {

    
  background(0);
  if (keyCode === UP_ARROW){
	hforce()
}
if (ball.isTouching(ground2)){
Matter.Body.setStatic(ball.body,false);
}
  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display();
  ground2.display();
  leftS.display();
  rightS.display();

   side1.display();
   side2.display();
   side3.display();
  drawSprites();
 
}

function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:13,y:-14.5})
  }


