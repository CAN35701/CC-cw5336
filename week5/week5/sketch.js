let k = 0;
let speed = 0.2;
let l = 0;
let speed2 = 0.05;


function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('week5-sketch'); // do not delete - links to your index.html pages (description)
}

function draw() {
  background(0);
  translate(width/2,height/2);
  fill(255);
  ellipse(0,0,495);

  angleMode(DEGREES);
  push();
    rotate(285);
    scale(0.6,1.2);
    rotate(millis()/1000*12);
    for (x=0;x<12;x++) {
      rotate(5);
      noFill();
      stroke(40,60,230);
      strokeWeight(1);
      moonClock();
      fill(255,255,0,60);
      noStroke();
      moonClock();
    }
  pop();

  noFill();
  strokeWeight(1);

  stroke(0,0,0,100);
  push();
  angleMode(DEGREES);
  push();
  rotate(second()*6)
  angleMode(RADIANS);
  //stroke('cyan');
  smallHouse(7);
  highBuilding(7);
  utilityPole(7);
  house(7);
  tower(7);
  earth();
  pop();

  stroke(0,0,0,80);
  push();
  angleMode(DEGREES);
  push();
  rotate(-second()*6)
  angleMode(RADIANS);
  //stroke('cyan');
  scale(0.6);
  smallHouse(7);
  highBuilding(7);
  utilityPole(7);
  house(7);
  tower(7);
  earth();
  pop();



  strokeWeight(1);
  k = k+speed;
  if ( k >= 60 || k <= 0) {
    speed = speed * -1;
  }
  l = l+speed2;
  if ( l >= 30 || l <= 0) {
    speed2 = speed2 * -1;
  }

  angleMode(DEGREES);
  for (let a = 0; a < 2; a++) {
    push();
    rotate(a * 180);
    translate(0, k);
    stroke(50,150,255);
    tideClock();
    pop();
  }

  push();
    rotate(45);
    scale(0.8,1.5);
    rotate(millis()/1000*10);
    for (x=0;x<12;x++) {
      scale(0.8);
      rotate(5);
      stroke(100,200,0);
      strokeWeight(2);
      moonClock();
      noStroke();
      fill(250,80,100,60);
      moonClock();
    }
  pop();

  push();
  scale(1.6,0.8);
  for (x=0;x<12;x++) {
    rotate(-45);
    scale(0.9);
    rotate(millis()/1000*12);
    noFill();
    stroke(0,80,200);
    birdClock();
  }
  pop();


  push();
  rotate(-15);
    scale(1,2);
    rotate(millis()/1000*8);
    noFill();
    stroke(250,200,0);
    sunClock();
    fill(255,0,0,80);
    stroke(0,0,0,0);
    sunClock();
  pop();
  

  push();
  stroke(0);
    rotate(90-l);
    scale(0.4,2.3);
    rotate(millis()/1000*16);
    noFill();
    stroke(250,100,0);
    sunClock();
    fill(255,0,0);
    stroke(0,0,0,0);
    sunClock();
  pop();

  push();
  fill(150,200,0);
  stroke(0,100,50);
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
  noFill();
  ellipse(0,0,200,200);
  arc(0,0,208,208, ss*15-90, sr*15-90);
  arc(0,0,192,192, ss*15-90, sr*15-90);
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
    for (i=0;i<8;i++) {
      //triangle(16,0,-16,-16,-16,16);//white bird
      triangle(16-i*2,0,i*2-16,i*2-16,i*2-16,16-i*2);//bird with more decoration
    }
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
    noFill();
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
    if(dis<0) {
      dis = 0;
    }
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


//Below are some functions I wrote last week 
// I use them to represent humans
//---------------------------------------
function smallHouse(na) {
  for (i=0; i<na; i++) {
    push();
    rotate((360*i)+30/na); 
    let w = 30;
    let h = 30;
    rect(140,0,w,h);
    rect(140,0+h/6,w/2,h/3);
    ellipse(140+w*3/4,0+h*2/6,h/4);
    line(140+w/2,0-h/5,140+w*1.3,0+h/5);
    line(140+w/2,0-h/4,140+w*1.3,0+h/7);
    line(140+w*1.3,0+h/7,140+w*1.3,h);
    line(140+w*1.3,0+h/7,140+w/2,h);
    line(140+w*1.3,0+2*h/7,140+w/2,h+1*h/7);
    line(140+w*1.3,0+3*h/7,140+w/2,h+2*h/7);
    line(140+w*1.3,0+4*h/7,140+w/2,h+3*h/7);
    line(140+w*1.3,0+5*h/7,140+w/2,h+4*h/7);
    pop();
  }
}

function highBuilding(nb) {
  for (i=0; i<nb; i++) {
    push();
    rotate((360*i)+20/nb); 
    let w = 55;
    let h = 30;
    rect(150,0,w,h);
    rect(150,0+h/3,w/4,h/3);
    for(f=0;f<4;f++){
      for(j=0;j<3;j++){
        rect(150+w/3+(f*w/6),h/6+(h*j)/4,w/12,h/7);
      }
    }
    pop();
  }
}

function utilityPole(nu) {
  for (i=0; i<nu; i++) {
    push();
    rotate((360*i)-10/nu); 
    let w = 55;
    let h = 3;
    rect(140,0,w,h);
    line(140+w*3/4,0-6,140+w*3/4,9);
    line(140+w*9/10,0-9,140+w*9/10,12);
    pop();
  }
}

function house(nh) {
  for (i=0; i<nh; i++) {
    push();
    rotate((360*i)-30/nh); 
    let w = 5;
    let h = 25;
    rect(130,h*2/5,w/2,h/5);
    line(130,0,130+w,0);
    line(130+w,0,130+w*1.5,h/2);
    line(130+w,h,130+w*1.5,h/2);
    line(130,h,130+w,h);
    line(130,0,130,h);
    pop();
  }
}


function tower(nt) {
  for (i=0; i<nt; i++) {
    push();
    rotate((360*i)+40/nt); 
    let w = 60;
    let h = 15;
    triangle(140,0-h/2,140,h/2,140+w,0);
    rect(140+w/4,0-h/2,w/6,h);
    rect(140+w*3/4,0-h/3,w/6,h*2/3);
    pop();
  }
}

function earth(){
  push();
  for (i = 0; i < 55; i++) {
  //stroke('magenta');
  let n = 30 * noise(i*0.2); 
  rotate(0.2); 
  ellipse(130+n, 0, 3,7);
  } 
  pop();
}