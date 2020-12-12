const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('box.png');
}

function setup() {
	
	
	var canvas = createCanvas(1250, 650);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new Box(1200,510,20,200);
	box2 = new Box(1000,510,20,200);
	box3 = new Box(1100,600,200,20);
    ground1=new Ground(width/2,620,width,20);

	paper1 = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background("lightblue");
	Engine.update(engine);
	
	
	paper1.display();
	ground1.display();
	//box3.display();
	//box1.display();
	//box2.display();
	image(boximage,1000,430,200,200);	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110,y:-110});

		}
	}



