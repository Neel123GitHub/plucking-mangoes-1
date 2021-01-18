
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var boy,boyImage;
function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree=new Tree(850,500);
	ground=new Ground(400,700);
	stone=new Stone(70,550);
	boy=createSprite(150,625,20,20);
	boy.scale=0.15
	boy.addImage(boyImage);
	mango1=new Mango(610,250);
	mango2=new Mango(700,260);
	mango3=new Mango(475,267);
	mango4=new Mango(555,325);
	mango5=new Mango(720,350);
	launcher=new Launcher(stone.body,{x:75,y:540});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("0");
  
  text("PRESS SPACE TO RETRY!,",350,100)
  drawSprites();
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	launcher.release();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.x)
	if(distance<=30){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:70,y:550})
		launcher.attach(stone.body);
		}
}