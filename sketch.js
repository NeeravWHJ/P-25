
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbinImg,PaperImg

function preload(){

  dustbinImg = loadImage("Dustbin.png");
 // PaperImg = loadImage("paper.png");

}

function setup() {
	createCanvas(800, 700);

   

	engine = Engine.create();
	world = engine.world;

	  
   // leftside = createSprite(310,610,20,100);
   // leftside.shapeColor = "red";
 
   // rightside = createSprite(530,610,20,100);
   // rightside.shapeColor = "red";
 
   // centerside = createSprite(420,650,200,20);
    //centerside.shapeColor = "red";

    
      ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
      fill(255);
      World.add(world, ground);

	

	
     paper = new Paper(54,620,15);
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  

 rect(ground.position.x,ground.position.y,width,10);
 paper.display();

 image(dustbinImg,420,450,200,200);


  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW)

Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-35});

}

