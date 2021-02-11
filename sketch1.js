const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var helicopter,heliImg;
var package,packageImg;
var rect1,rect2,rect3;
var packageBody;

function preload(){
heliImg = loadImage("helicopter.png");

}

function setup(){
    createCanvas(800,700);
   engine = Engine.create();
    world = engine.world;
    //package = createSprite(400,100,20,20);
    var options = {
        isStatic:false,restitution:1
    }
    packageBody = Bodies.rectangle(400,100,20,20,options);
    packageImg = loadImage("package.png");
   // packageBody.addImage(packageImg);
    packageBody.scale = 0.2;
    World.add(world,packageBody);

helicopter = createSprite(400,100,20,20);
helicopter.addImage(heliImg);
helicopter.scale = 0.5;

 rect1 = createSprite(290,600,10,192);
 rect1.shapeColor = "red";

 rect2 = createSprite(380,690,192,10);
 rect2.shapeColor = "red";

 rect3 = createSprite(480,600,10,192);
 rect3.shapeColor = "red";

Engine.run(engine);
}

function draw(){
    background(0);
Engine.update(engine);
//packageBody.collide(rect2);

bounce();
drawSprites();
}

function bounce(){
    if(keyCode === RIGHT_ARROW){
        helicopter.velocityX = 5;
    }
    if(keyCode === LEFT_ARROW){
        helicopter.velocityX = -5;
    }

    if(keyCode === DOWN_ARROW){
        Matter.Body.setStatic(packageBody,false );
    }
}
