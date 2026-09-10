
let r; //for storing my randm number
//scale,rotate,translation

function setup() {
  createCanvas(400,400);
    
    r = random(100,255);
    r2 = random(0,360);
    console.log(r);
}



function draw() {
  background(r,0,0);

  push();//isolate
  translate(width/2,height/2);//shift origin
  rectMode(CENTER);
  rotate(r2);//0-360
  rect(0,0,r);
  pop();//isolate

  ellipse(300,300,150);
}

function mousePressed() {
  r = random(100,255);
  r2 = random(0,360);
}

