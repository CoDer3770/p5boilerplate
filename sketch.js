var sun
var cv,va,ab
var right,down,left,up


function setup() {
  createCanvas(800,600);
  
   sun = createSprite(400, 200, 50, 50);
   cv = createSprite(400, 300, 20, 20);
   va = createSprite(400, 400, 15, 15);
   ab = createSprite(400, 500, 25, 25);
   right = createSprite(675, 500, 10, 800);
   down = createSprite(400, 515, 550, 10);
   left = createSprite(125, 400, 10, 590);
   up = createSprite(400, 100, 550, 10);

  frameRate(25)
  textSize (15)
  
}

function draw() {
  background(255,255,255);
   down.visible = false;
   right.visible = false;
   left.visible = false;
   up.visible = false;

  

  

  text(frameCount, 100, 200);
  drawSprites();

  if(frameCount > 100){
     sun.width = sun.width + 0.09
  }
  if(frameCount > 100){
    sun.height = sun.height + 0.09
 }

 if(ab.isTouching(down)){
   cv.velocityX = -1,
   va.velocityX = -1.5,
   ab.velocityX = -2
 }
 if(cv.isTouching(left)){
  cv.velocityY = -1,cv.velocityX = 0
}
if(ab.isTouching(left)){
  ab.velocityY = -1,ab.velocityX = 0
}
if(va.isTouching(left)){
  va.velocityY = -4,va.velocityX = 0
}
if(cv.isTouching(up)){
  cv.velocityY = 0,cv.velocityX = 1
}
if(ab.isTouching(up)){
  ab.velocityY = 0,ab.velocityX = 2
}
if(va.isTouching(up)){
  va.velocityY = 0,va.velocityX = 4
}
if(cv.isTouching(right)){
  cv.velocityY = 1,cv.velocityX = 0
}
if(ab.isTouching(right)){
  ab.velocityY = 3,ab.velocityX = 0
}
if(va.isTouching(right)){
  va.velocityY = 4,va.velocityX = 0
}

if(cv.isTouching(down)){
  cv.velocityY = 0,cv.velocityX = -1
}
if(ab.isTouching(down)){
  ab.velocityY = 0,ab.velocityX = -1.5
}
if(va.isTouching(down)){
  va.velocityY = 0,va.velocityX = -2
}










if(sun.isTouching(ab)){
  ab.visible = false;
}

if(sun.isTouching(va)){
  va.visible = false;
}

if(sun.isTouching(cv)){
  cv.visible = false;
}
}