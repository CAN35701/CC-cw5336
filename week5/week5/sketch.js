let k = 0;
let speed = 0.2;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  stroke(0);
  noFill();

  k = k+speed;
  if ( k >= 60 || k <= 0) {
    speed = speed * -1;
  }
  for (let a = 0; a < 2; a++) {
    push();
    rotate(a * 180);
    translate(0, k);
    tideClock();
    pop();
  }

  push();
    rotate(45);
    scale(0.8,1.5);
    rotate(millis()/1000*12);
    for (x=0;x<12;x++) {
      scale(0.8);
      rotate(5);
      moonClock();
    }
  pop();


  push();
    rotate(285);
    scale(0.6,1.2);
    rotate(millis()/1000*12);
    for (x=0;x<12;x++) {
      rotate(5);
      moonClock();
    }
  pop();

  push();
  scale(1.6,0.8);
  for (x=0;x<12;x++) {
    rotate(-45);
    scale(0.9);
    rotate(millis()/1000*12);
    birdClock();
  }
  pop();


  push();
  rotate(-15);
    scale(1,2);
    rotate(millis()/1000*8);
    sunClock();
  pop();

  push();
    rotate(70);
    scale(0.4,2.3);
    rotate(millis()/1000*16);
    sunClock();
  pop();

  push();
  rotate(millis()/1000);
  plantClock();
  pop();

}
//------------------------------

function sunClock() {
  push();
  let m = month();
  let sr; // sunrise
  let ss; // sunset

  if (m>=3 && m<=5) {
    sr = 6;
    ss = 19;
  } else if (m>=6 && m<=8) {
    sr = 5;
    ss = 20;
  } else if (m>=9 && m<=11) {
    sr = 6.5;
    ss = 18;
  } else {
    sr = 7;
    ss = 17;
  }

  let st = hour() + minute()/60;//suntime

  ellipse(0,0,200,200);
  arc(0,0,208,208, ss*15-90, sr*15-90);
  arc(0,0,192,192, ss*15-90, sr*15-90);

  push();
  rotate(st*15 - 90);
  translate(100, 0);
  if (st>sr && st<ss) {
    ellipse(0, 0, 12);
    ellipse(0, 0, 18);
  }else{
    for (i=0;i<6;i++) {
      ellipse(0,0,12-i*2);
    }
    }
  pop();
  pop();
}
//------------------------------

function birdClock() {
  push();
  let h = hour();
  let s = second();
  //let a = h*15+s*0.25;//looks not good
  //let a  = s*6;
  let a = millis()/1000*12;
  let dis = 200;
  let sp = millis();
  if (h>6 && h<18) {
    push();
    rotate(a*2);
    translate(0,180);
    rotate(sp%360);
      triangle(16,0,-16,-16,-16,16);
    pop();

    // daytime
  } else {
    push();
    rotate(a);
    translate(0,140);
    rotate((sp/3)%360);
    for (i=0;i<8;i++) {
      triangle(16-i*2,0,i*2-16,i*2-16,i*2-16,16-i*2);
    }
    pop();
    //nighttime
  }
  pop();
}

//---------------------------------------

function moonClock() {
  push();
  let y = year();
  let m = month();
  let d = day();
  let pd = (y-2026)*365+(m-9)*30+(d-11);
  //most recent new moon is 09/11/2026
  let md = pd % 29.53059;//moon day
  let mp;//moon phase
  if (md<4) {
    mp = 0;
  } else if (md<7) {
    mp = 1;
  } else if (md<11) {
    mp = 2;
  } else if (md<15) {
    mp = 3;
  } else if (md<19) {
    mp = 4;
  } else if (md<22) {
    mp = 5;
  } else if (md<26) {
    mp = 6;
  } else {
    mp = 7;
  }

  for (i = 0; i < 8; i++) {
    if (i == mp) {
    push();
    rotate(270+i*360/8);
      for (j = 0; j < 8; j++) {
        ellipse(180,0,30-j*30/8);
      }
    pop();
    } else {
    push();
    rotate(270+i*360/8);
    ellipse(180,0,30);
    pop();
    }
  }
  pop();
}

//---------------------------------------

function tideClock(){
  push();
  let h = hour();
  let mi = minute();
  let s = second();
  let tt = h+mi/60+s/3600;//tide time
  let t = cos(360*tt/12.42);
  //The tidal formula involves the COS function.
  //This is not for drawing, but for computation.
  let ln = map(t,-1,1,6,48);
  //console.log(t, ln);
  for (i = 0; i < ln; i++) {
    let y = i*5+50;
    //console.log(y);
    line(60,y-150,120,y-150);
  }
  pop();
}

//---------------------------------------

function plantClock() {
  push();
  let m = month();
  let tm = millis()/1000;
  let sp;
  //Growth speed varies by season
  if (m>=3 && m<=5) {
    sp = 0.8;
  } else if (m>=6 && m<=8) {
    sp = 1.3;
  } else if (m>=9 && m<=11) {
    sp = 0.7;
  } else {
    sp = 0.3;
  }
  
  let n = tm*sp;
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
    push();
  rotate(90);
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

    push();
  rotate(270);
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