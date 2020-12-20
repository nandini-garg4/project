var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1Sprite,box2Sprite,box3Sprite,BoxLeftBody,BoxRightBody,BoxBottomBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
                                           


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite=createSprite(300,610,20,100);
	box1Sprite.shapeColor="red"

	BoxLeftBody=Bodies.rectangle(300,610,20,100,{isStatic:true})
	World.add(world,BoxLeftBody)

	box2Sprite=createSprite(500,610,20,100);
	box2Sprite.shapeColor="red"

	BoxRightBody=Bodies.rectangle(500,610,20,100,{isStatic:true})
	World.add(world,BoxRightBody)


box3Sprite=createSprite(width/2,650,width/4,20);
	box3Sprite.shapeColor="red"

	BoxBottomBody=Bodies.rectangle(400,650,200,20,{isStatic:true})
	World.add(world,BoxBottomBody)

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	

	
	
	Engine.run(engine);
	
}


function draw() {
 rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

Matter.Body.setStatic(packageBody,false);

}
  
}



