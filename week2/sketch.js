//ellipse
let ex;
let es;
//triangle
let tx;
let ty;
let ts;
//rectangle
let rx1;
let ry1;
let rw1;
let rh1;
let rx2;
let ry2;
let rw2;
let rh2;

let s;

//color
let c1;
let c2;

function setup() {
  createCanvas(500,500);
  ex = random(100,200);
  es = random(20,100);
  
  tx = random(320,450);
  ty = random(320,450);
  ts = random(20,130);

  rx1 = random(250,350);
  ry1 = random(20,100);
  rw1 = random(20,150);
  rh1 = random(20,150);
  rx2 = random(20,100);
  ry2 = random(250,350);
  rw2 = random(20,150);
  rh2 = random(20,150);

  s = random(360);

  c1 = random(1);
  c2 = random(1);

}

function draw() {
  background(0,100,225);
  noFill();
  stroke(255);
  ellipse(250,250,ts*es/20);
  fill(255,255,255,100)
  ellipse(250,250,rw1*rh2/20);
  fill(0,100,225);
  ellipse(250,250,rw2*rh1/30);

  //b for ellipse
  stroke(0);
  fill(0,0,0,c1*1000);
  triangle(250,250,ex,ex+es/2,ex+es/2,ex);
  //b for triangle
  triangle(tx,ty-ts/2,250,250,tx-ts*2/5,ty+ts/4);
  //b for rectangle
  noFill();
  triangle(250,250,rx1,ry1,rx1,ry1+rh1);
  triangle(250,250,rx2+rw2,ry2,rx2,ry2);

  fill(0);
  triangle(250,250,rx1,ry1+rh1,rx1+rw1,ry1+rh1);
  triangle(250,250,rx2+rw2,ry2,rx2+rw2,ry2+rh2);


  fill(c1*255,255,0);
  ellipseMode(CENTER)
  ellipse(ex,ex,es);

  fill(255,c1*255,0);
  triangle(tx,ty-ts/2,tx+ts*2/5,ty+ts/4,tx-ts*2/5,ty+ts/4);

  fill(255,c2*255,0);
  rect(rx1,ry1,rw1,rh1);

  fill(c2*255,255,0);
  rect(rx2,ry2,rw2,rh2);

}

function mousePressed() {
  createCanvas(500,500);
  background(0,100,225);
  ex = random(100,200);
  es = random(20,100);
  
  tx = random(320,450);
  ty = random(320,450);
  ts = random(20,130);

  rx1 = random(250,400);
  ry1 = random(20,150);
  rw1 = random(20,100);
  rh1 = random(20,100);
  rx2 = random(20,150);
  ry2 = random(250,400);
  rw2 = random(20,100);
  rh2 = random(20,100);

  s = random(360);

  c1 = random(1);
  c2 = random(1);
}