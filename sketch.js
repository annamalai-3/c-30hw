const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var engine,world;
var ball;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 ball = new Ball(130,200,30,30);
 box1 = new Box(300,200,30,30);
 ground=new Ground(300,210,120,10);
ground1 = new Ground(130,210,70,10);
box2 = new Box(310,200,30,30);
box3 = new Box(295,200,30,30);
box4 = new Box(297,206,30,30);
box5 = new Box(290,206,30,30);
ground2 = new Ground(420,190,120,10);
box6 = new Box(295,190,30,30);
box7 = new Box(420,180,30,30);
box8 = new Box(410,180,30,30);
box9 = new Box(430,180,30,30);
box10 = new Box(415,170,30,30);
box11 = new Box(420,170,30,30);
box12 = new Box(420,160,30,30);
chain = new Slingshot(ball.body,{x:130,y:200});
}






  




function draw(){
  background(255,255,255);  

  Engine.update(engine);
  ball.display();
  box1.display();
 ground.display();
 ground1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 ground2.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 chain.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode===32){
chain.reattach(ball.body);
}
}

