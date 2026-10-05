function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  let m = month();
  let tm = millis()/1000;
  //console.log(tm);
  stroke(0);
  noFill();
  plantClock();
  tideClock();
  moonClock();
  birdClock();
  //daylightClock();

}

//------------------------------

function birdClock() {
  let h = hour();
  let s = second();
  //let a = h*15+s*0.25;//looks not good
  //let a  = s*6;
  let a = millis()/1000*12;
  let dis = 200;
  let sp = millis();
  if (h>6 && h<18) {
    push();
    translate(width/2,height/2);
    rotate(a*2);
    translate(0,180);
    rotate(sp%360);
      triangle(16,0,-16,-16,-16,16);
    pop();

    // daytime
  } else {
    push();
    translate(width/2,height/2);
    rotate(a);
    translate(0,140);
    rotate((sp/3)%360);
    for (let i = 0; i < 8; i++) {
      triangle(16-i*2,0,i*2-16,i*2-16,i*2-16,16-i*2);
    }
    pop();
    //nighttime
  }
}

//---------------------------------------

function moonClock() {
  push();
  let y = year();
  let m = month();
  let d = day();
  let passedDays = (y-2026)*365+(m-9)*30+(d-11);
  //The most recent new moon occurred on September 11, 2026
  let moonAge = passedDays % 29.53059;
  let moonPhase;
  if (moonAge<4) {
    moonPhase = 0;
  } else if (moonAge<7) {
    moonPhase = 1;
  } else if (moonAge<11) {
    moonPhase = 2;
  } else if (moonAge<15) {
    moonPhase = 3;
  } else if (moonAge<19) {
    moonPhase = 4;
  } else if (moonAge<22) {
    moonPhase = 5;
  } else if (moonAge<26) {
    moonPhase = 6;
  } else {
    moonPhase = 7;
  }

  for (i = 0; i < 8; i++) {
    if (i == moonPhase) {
    push();
    translate(height/2,width/2);
    rotate(270+i*360/8);
      for (j = 0; j < 8; j++) {
        ellipse(180,0,30-j*30/8);
      }
    pop();
    } else {
    push();
    translate(height/2,width/2);
    rotate(270+i*360/8);
    ellipse(180,0,30);
    pop();
    }
  }
  pop();
}

//---------------------------------------

function tideClock(){
  let h = hour();
  let min = minute();
  let s = second();
  let tideTime = h+min/60+s/3600;
  let tide = cos(360*tideTime/12.42);
  //The tidal formula involves the COS function.
  //This is not for drawing, but for computation.
  let lineAmount = map(tide,-1,1,6,48);
  //console.log(tide, lineAmount);
  for (i = 0; i < lineAmount; i++) {
    let y = i*5+50;
    //console.log(y);
    line(250,y,350,y);
  }
}

//---------------------------------------

function plantClock() {
  push();
  let m = month();
  let tm = millis()/1000;
  let plantTime = tm;
  let growthSpeed;
  //Growth speed varies by season
  if (m>=3 && m<=5) {
    growthSpeed = 0.8;
  } else if (m>=6 && m<=8) {
    growthSpeed = 1.3;
  } else if (m>=9 && m<=11) {
    growthSpeed = 0.7;
  } else {
    growthSpeed = 0.3;
  }
  
  let n = plantTime*growthSpeed;
  translate(width/2,height/2);
  for (i=0;i<n;i++) {
    let dis = 200-i*1;
    // if(dis<0) {
    //   dis = 0;
    // }
    push();
    rotate(i * 1.5);
    translate(dis, 0);
    ellipse(0, 0, 5, 6);
    pop();
  }
  push();
  rotate(180);
   for (i=0;i<n;i++) {
    let dis = 200-i*1;
    if(dis<0) {
      dis = 0;
    }
    push();
    rotate(i * 1.5);
    translate(dis, 0);
    ellipse(0, 0, 5, 6);
    pop();
  }
  pop();
  pop();
}