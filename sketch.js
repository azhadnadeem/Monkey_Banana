
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground,groundImage;
var survivalTime
var invisibleGround;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 groundImage=loadImage("groundM2.png");
}



function setup() {
 createCanvas(550,400);
  ground=createSprite(50,400,900,20);
  ground.addImage("ground",groundImage);
 // ground.scale=1
   invisibleGround=createSprite(50,400,900,20)
   invisibleGround.visible=false;
  ground.x=ground.width/2
  banana=createSprite(250,150,30,10);
  banana.addImage("banana",bananaImage);
  banana.scale=0.2;
  obstace=createSprite(200,350,20,20);
  obstace.addImage("obstace",obstaceImage);
  obstace.scale=0.2
 
 monkey=createSprite(80,300,20,50); 
 monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2
survivalTime=0;
  score=0
  
}


function draw() {
 background("white");
  
  //jump when the space key is pressed
 //  monkey.velocityY=-0.1;
  if(keyDown("space")&& monkey.y >= 150) {
    monkey.velocityY=-12;
  }
  
  //add gravity
   monkey.velocityY = monkey.velocityY+0.8  ;
  
  //stop monkey falling down
  monkey.collide(invisibleGround);
  
  
  
  ground.velocityX=-2
  obstace.x=ground.x
  banana.velocityX=-3
  obstace.velocityX=-2
  
  if(banana.x<0){
    banana.x=banana.width/1
  }
  
  if(monkey.isTouching(banana)){
    banana.destroy();
    score=score+1
  }
  
 
  
  
  if(ground.x < 160){
    ground.x=ground.width/2
  }
 
 // monkey.velocityY=0;
  stroke("white")
  textSize(20);
  fill("black");
  text("score:"+score,200,30);
 // stroke("black");
 // textSize(20);
  //fill("black");
 // survivaiTime=Math.ceil(frameCount/frameRate())
  //text("survivalTime:"+survivalTime,210,50)
  
   
  
 drawSprites(); 
}






