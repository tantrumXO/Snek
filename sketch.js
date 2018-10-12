var s;
var scl = 50;
var food;
var bg;
var img;
var img1;
var img2;
var img3;
var img4;
var lfood;
var bfood;
var zfood;
var count = 0;
var randi;


function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(7);
  pickLocation();
  pickLLocation();
  pickZLocation();
}

function preload() {
  img = loadImage("assets/m1.png");
  bg = loadImage("assets/back.png");
  img1 = loadImage("assets/xDMain1.png");
  img2 = loadImage("assets/D.png");
  img3 = loadImage("assets/Webp.net-resizeimage.png");
  img4 = loadImage("assets/Webp.net-resizeimage1.png");
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function pickLLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  lfood = createVector(floor(random(cols)), floor(random(rows)));
  lfood.mult(scl);
}

function pickBLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  bfood = createVector(floor(random(cols)), floor(random(rows)));
  bfood.mult(scl);
}

function pickZLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  zfood = createVector(floor(random(cols)), floor(random(rows)));
  zfood.mult(scl);
}

function draw() {
  background(bg);

  if (s.eat(food)) {
    pickLocation();
  }

  if (s.eatL(lfood)) {
    pickLLocation();
  }

  if (s.eatZ(zfood)) {
    pickZLocation();
  }

  s.death();
  s.update();
  s.show();


  fill(255,0,255);
  //rect(lfood.x, lfood.y, scl, scl);
  image(img3, lfood.x, lfood.y, scl, scl);
  fill(0,255,0);
  //rect(zfood.x, zfood.y, scl, scl);
  image(img4, zfood.x, zfood.y, scl, scl);
  image(img, food.x, food.y);
}





function keyPressed() {
  if (keyCode === UP_ARROW && s.yspeed == 0) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW && s.yspeed == 0) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW && s.xspeed == 0) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW && s.xspeed == 0) {
    s.dir(-1, 0);
  }
}