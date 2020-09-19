const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine;
var world;
var box1;
var box2;
var ground1;

function setup(){
  createCanvas(3000,600);
  engine=Engine.create();
  world=engine.world;
  box1=new box(300,300,50,50);
  box2=new box(340,100,50,100);
  ground1=new ground(300,height,3000,10);

  Engine.run(engine);
}

function draw(){
  background("aqua");
  console.log(box1.body.angle,box2.body.angle);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground1.display();
}