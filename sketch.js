const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;
var engine;
var world;

function preload(){

}

function setup(){
    createCanvas(800, 400);

	engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(400,450,800,100)
    brick1 = new Brick(400,375);
    brick2 = new Brick(400,325);
    brick3 = new Brick(400,275);
    brick4 = new Brick(400,225);
    brick5 = new Brick(400,175);
    brick6 = new Brick(400,125);
    brick7 = new Brick(400,75);

    ball = new Ball(200,400);
    constraint = new SlingShot(ball.body, {x: 200, y:100})
    Engine.run(engine);
}

function draw(){
    background("black");
    stroke("white");
    text("Score:"+score, 100,100)
    ground.display();
    brick1.display();
    brick2.display();
    brick3.display();
    brick4.display();
    brick5.display();
    brick6.display();
    brick7.display();

    ball.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
        
    //}
}
function mouseReleased(){
}
