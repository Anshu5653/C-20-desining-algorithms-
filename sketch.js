var movingRect, fixedRect;

function setup() {
  createCanvas(400,400);
  
  movingRect = createSprite(50, 100, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200,200,60,60)
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0);  
  
  movingRect.x = mouseX
  movingRect.y = mouseY

  console.log(movingRect.x - fixedRect.x)
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";

  }
  
  drawSprites();
}