var PLAY=1;
var END;
var GameState=1;

var road;
var roadImg;
var car;
var carImg;
var select1;
var obsctacleOne;
var obsctacleTwo;
var obsctacleThree;
var obsctacle1Img;
var obsctacle2Img;
var obsctacle3Img;

function preload(){
  
roadImg=loadImage("1.jpg");
carImg=loadImage("car-removebg-preview.png");
obsctacle1Img=loadImage("obstacle1.png") 
obsctacle2Img=loadImage("obstacle2.png")
obsctacle3Img=loadImage("obstacle3.png")
}


function setup() {
  createCanvas(850, 600);
  
  road=createSprite(120,250);
  road.addImage(roadImg);
  road.velocityX=-3.5;
  
  car=createSprite(70,270,20,20);
  car.addImage(carImg);
  car.scale=0.3;
  
  obstacleGroup1=new Group();
  obstacleGroup2=new Group();
  obstacleGroup3=new Group();
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  
  if(GameState===PLAY){
    car.y=World.mouseY;
    
    if(car.y<65||car.y>430){
    textSize(50);
    text("PENULTY",360,50);
  }
    if(obstacleGroup1.isTouching(car)){
    background("red")
  textSize(30)
  fill("red")
  stroke("yellow")
  text("Game Over",50,200)
  obstacleGroup1.destroyEach();
  obstacleGroup2.destroyEach();
  obstacleGroup3.destroyEach();
  road.velocityX=0;
  GameState=END;
  }
        if(obstacleGroup2.isTouching(car)){
   background("red")
  textSize(30)
  fill("red")
  stroke("yellow")
  text("Game Over",50,200)
  obstacleGroup1.destroyEach();
  obstacleGroup2.destroyEach();
  obstacleGroup3.destroyEach();
  road.velocityX=0;
  GameState=END;
  }
    if(obstacleGroup3.isTouching(car)){
      background("red")
  textSize(30)
  fill("red")
  stroke("yellow")
  text("Game Over",50,200)
  obstacleGroup1.destroyEach();
  obstacleGroup2.destroyEach();
  obstacleGroup3.destroyEach();
  road.velocityX=0;
  GameState=END;
  }

      selectObstacle();
  

  }
  if(GameState===END){
        background("red")
      textSize(60)
  fill("green")
  stroke("yellow")
  text("Game Over",180,250)
    
  }
   
  
  if(road.x<240){
     road.x=350;
     }
  

}



function ob1(){  
obsctacleOne = createSprite(350 ,Math.round(random(100,400)));
obsctacleOne.addImage(obsctacle1Img);
obsctacleOne.scale=0.2;
obsctacleOne.velocityX=-2;
obsctacleOne.lifetime=350;
obstacleGroup1.add(obsctacleOne);
}
function ob2(){
obsctacleTwo = createSprite(350 , Math.round(random(100,400)));
obsctacleTwo.addImage(obsctacle2Img);
obsctacleTwo.scale=0.2;
obsctacleTwo.velocityX=-2;
obsctacleTwo.lifetime=350;
  obstacleGroup2.add(obsctacleTwo);
}
function ob3(){
obsctacleThree = createSprite(350 , Math.round(random(100,400)));
obsctacleThree.addImage(obsctacle3Img);
obsctacleThree.scale=0.2;
obsctacleThree.velocityX=-2;
obsctacleThree.lifetime=350;
obstacleGroup3.add(obsctacleThree);
}
function   selectObstacle(){
  
  select1=Math.round(random(1,3));
  
  if(World.frameCount % 150 === 0){
   if(select1===1){
     ob1();
   }
  if(select1===2){
     ob2();
   }
  if(select1===3){
     ob3();
   }
   }
}