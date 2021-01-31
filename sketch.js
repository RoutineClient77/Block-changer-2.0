var fixedRect, movingRect;



function setup() {
  
  fixedRect = createSprite(200,200,50,80);
 movingRect = createSprite(400, 200, 80, 30);

 //  colour objects
 fixedRect.shapeColor = "red";
 movingRect.shapeColor = "green";
 
 fixedRect.velocityY = +5;
 movingRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  

  // controls
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
   
  //console.log(movingRect.x - fixedRect.x);
   
 if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect. height/2){
 movingRect.velocityX = movingRect.velocityX*(-1);
 fixedRect.velocityX = fixedRect.velocityX*(-1);
 
 }
 else{
   movingRect.shapeColor = "green";
 }

  drawSprites();
}