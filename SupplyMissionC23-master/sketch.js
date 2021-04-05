var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
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
	rectMode(CENTER);
	

	package1Sprite=createSprite(width/2, 300, 10,10);
	package1Sprite.addImage(packageIMG)
	package1Sprite.scale=0.2

	package2Sprite=createSprite(width/2, 300, 10,10);
	package2Sprite.addImage(packageIMG)
	package2Sprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	package1Body = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, package1Body);

	package2Body = Bodies.circle(width/2 , 190 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, package2Body);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;

 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
 
  package1Sprite.x= package1Body.position.x 
  package1Sprite.y= package1Body.position.y 

  package2Sprite.x= package2Body.position.x 
  package2Sprite.y= package2Body.position.y 
  
  drawSprites();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    helicopterSprite.x=helicopterSprite.x-20;    
    translation={x:-20,y:0}
    Matter.Body.translate(package1Body, translation)
	Matter.Body.translate(package2Body, translation)
} 

  else if (keyCode === RIGHT_ARROW) {
    helicopterSprite.x=helicopterSprite.x+20;
    translation={x:20,y:0}
    Matter.Body.translate(package1Body, translation)
	Matter.Body.translate(package2Body, translation)
  }
  else if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(package1Body,false);
	Matter.Body.setStatic(package2Body,false); 
  }
}