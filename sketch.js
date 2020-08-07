const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,platform1;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var chain1;
var Polygon;
var score=0;


function preload(){
 
}


function setup() {

  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  

  block1=new box(330,235);
  block2=new box(360,235);
  block3=new box(390,235);
  block4=new box(420,235);
  block5=new box(450,235);

  block6=new box(360,195);
  block7=new box(390,195);
  block8=new box(420,195);

  block9=new box(390,155);

  ground=new platform(400,380,800,20);
  platform1=new platform(390,240,400,20);
  Polygon=new polygon(200,100);
  

 chain1=new slingshot(Polygon.body,{x:100,y:200})
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

 


Polygon.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  ground.display();
  platform1.display();
 chain1.display();

  drawSprites();
  text("score:"+score,750,40);
}


function mouseDragged(){
  Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  chain1.fly();
}

function keyPressed(){
  if(keyCode === 32){
      chain1.attach(Polygon.body);
  }
}