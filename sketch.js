const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground (400, 400, 800, 20);

  ball = new Ball (100, 300, 100, 100);

  rope = new Rope (ball.body, {x:100, y:100});

  box1 = new Box(500, 20);
  box2 = new Box(500, 40);
  box3 = new Box(500, 60);
  box4 = new Box(500, 80);
  box5 = new Box(500, 100);
  box6 = new Box(500, 120);
  box7 = new Box(500, 140);
  box8 = new Box(500, 160);
  box9 = new Box(500, 180);
  box10 = new Box(500, 200);
  box11 = new Box(500, 220);
  box12 = new Box(600, 240);
  box13 = new Box(600, 260);
  box14 = new Box(600, 280);

}

function draw() {
  background("grey");  
  drawSprites();

  ground.display();

  ball.display();

  rope.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();

}

