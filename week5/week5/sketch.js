
function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
  angleMode(DEGREES);
}

function draw() {
  let m = month();
  let tm = millis()/1000;
  background(255);
  let plantTime = tm;
  let growthSpeed;
  if (m>=3 && m<=5) {
    growthSpeed = 0.8;
  } else if (m>=6 && m<=8) {
    growthSpeed = 1.3;
  } else if (m>=9 && m<=11) {
    growthSpeed = 0.7;
  } else {
    growthSpeed = 0.3;
  }
  
  let amount = plantTime/200*growthSpeed;
  translate(width/2,height/2);
  noFill();
  stroke(0);
  for (i=0;i<amount;i++) {
    let dis = 200-i*3;
    push();
    rotate(i * 20);
    translate(dis, 0);
    ellipse(0, 0, 20, 8);
    pop();
  }
}