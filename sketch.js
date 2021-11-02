var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg","space");
  issimg = loadImage("iss.png","iss");
  scimg = loadImage("spacecraft1.png","spacecraft1");
  scimg1 = loadImage("spacecraft2.png","spacecraft2");
  scimg2= loadImage("spacecraft3.png","spacecraft3");
  scimg3= loadImage("spacecraft4.png","spacecraft4");
}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  
 // spacecraft.addImage(scimg);
  if(!hasDocked){

     spacecraft = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
     spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(scimg3);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(scimg2);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(scimg1);
  }
}                                                                                  

  if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking UnSuccessful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300);
   }

  drawSprites();
}
function addSprites(spriteGroup, numberOfSprites, spriteImage, scale, positions = []) {
  for (var i = 0; i < numberOfSprites; i++) {
    var x, y;

    //C41 //SA
    if (positions.length > 0) {
      x = positions[i].x;
      y = positions[i].y;
      spriteImage = positions[i].image;
    } else {
      x = random(width / 2 + 150, width / 2 - 150);
      y = random(-height * 4.5, height - 400);
    }
    var sprite = createSprite(x, y);
    sprite.addImage("sprite", spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
  }
}
