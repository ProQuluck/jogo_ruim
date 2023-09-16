var solo, solo2;
var floor, floorImage;
var player, playerImage;
var zombie1Animation;
var revolver, revolverImage;
var amo, amoImage;
var maquina;


var vidaPlayer = 6;
var vidaMaquina = 3;
var balas = 100;


function preload(){
  floorImage = loadImage("./assets/fundo.png");
  zombie1Animation1 = loadAnimation("./assets/zombieN1.png","./assets/zombieN2.png","./assets/zombieN3.png","./assets/zombieN4.png");
  zombie1Animation2 = loadAnimation("./assets/farmer1.png","./assets/farmer2.png","./assets/farmer3.png","./assets/farmer4.png");
  revolverImage = loadImage("./assets/revolver.png");
  amoImage = loadImage("./assets/amo.png");
  playerImage = loadImage("./assets/PD.png")
}


function setup(){
  createCanvas(1500,650);


  floor = createSprite(width/2,height/2);
  floor.addImage(floorImage);


  player = createSprite(50,height-100,30,100);
  player.shapeColor = "black"
  player.addImage(playerImage);
  player.scale = 0.3;


  revolver = createSprite(player.x+50, player.y-60);
  revolver.addImage(revolverImage);
  revolver.scale = 0.1


  solo = createSprite(width/2,height-98,1500,10);
  solo2 = createSprite(width/2,height-137,1500,10);


  solo.visible = false;
  solo2.visible = false;
}


function draw() {
  background("light_blue");


  if(player.x <20){
    player.x = 20;
  }
  if(revolver.x <60){
    revolver.x = 60;
  }
 
  // if(player.x >450){
  //   player.x = 450;
  // }
  // if(revolver.x >490){
  //   revolver.x = 490;
  // }


 
  if (keyWentDown("up_arrow") && player.y >= 400 ){
    player.velocityY = -10;
  }
  if (keyWentDown("up_arrow") && revolver.y >= 400 ){
    revolver.velocityY = -10;
  }
  player.velocityY = player.velocityY + 0.5;
  revolver.velocityY = revolver.velocityY + 0.5;
 
  /*
  if (keyDown("up_arrow")){
    player.y = player.y -5;
    revolver.y = revolver.y -5;
  }
  if (keyDown("down_arrow")){
    player.y = player.y +5;
    revolver.y = revolver.y +5;
  }
  */
 
  if (keyDown("left_arrow")){
    player.x = player.x -5;
    revolver.x = revolver.x -5;
  }


  if (keyDown("right_arrow")){
    player.x = player.x +5;
    revolver.x = revolver.x +5;
  }


  player.collide(solo);
  revolver.collide(solo2);


  if(keyWentDown("SPACE")){
    amo = createSprite(revolver.x+30, revolver.y-10);
    amo.addImage(amoImage);
    amo.scale = 0.02;
    amo.velocityX = 40;
  }


  spawnZombiesEasy();
  drawSprites();      
}


function spawnZombiesEasy() {
  if (frameCount % 120 === 0){
    var x = Math.round(random(550,1500));
    var y = Math.round(random(height -130,height-160));
    var zombie = createSprite(x,y,20,20);
    var rand = Math.round(random(1,5));

    switch(rand) {
      case 1: zombie.addAnimation("zombie",zombie1Animation1);
              break;
      case 2: zombie.addAnimation("zombie",zombie1Animation2);
              break;
      case 3: zombie.addAnimation("zombie",zombie1Animation1);
              break;
      case 4: zombie.addAnimation("zombie",zombie1Animation2);
              break;
      case 5: zombie.addAnimation("zombie",zombie1Animation1);
              break;
      default: break;
    }

    zombie.velocityX = Math.round(random(-1,-4));
    zombie.scale = 0.3;
  }
}
