var bullet,wall;
var speed,height;

function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);

  bullet = createSprite(50,200, 80, 10);
  bullet.velocityX = speed;
  bullet.shapeColor="white";

  wall = createSprite(1500,200,60,height/2);

  
}

function draw() {
  background("black");  

  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;

    if(deformation>180)
  {
    bullet.shapeColor = color(255,0,0);
  }

  

  if(deformation<100)
  {
    bullet.shapeColor = color(0,255,0);
  }

  }

  drawSprites();
}