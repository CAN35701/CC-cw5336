let pMapper;
let quad0, quad1, quad2, quad3; // four

//Can's values
let k = 0;
let speed = 0.2;
let l = 0;
let speed2 = 0.05;


// // Yuting's values
// let colorStage = 0;
// let stageInterval;


// //Eva's values 
// //Basic variables for layers and light particles
// let layerCount = 0;
// let lastHour = -1;

// // Basic arrays to store coordinates, target sizes, and current sizes
// let shapeX = [];
// let shapeY = [];
// let shapeTargetW = [];
// let shapeTargetH = [];
// let shapeCurrentW = [];
// let shapeCurrentH = [];

// // Variables for 1second light particle effect
// let sparkleX = 0;
// let sparkleY = 0;
// let sparkleAlpha = 0;
// let lastSecond = -1;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    // create mapper object
    pMapper = createProjectionMapper(this);

    quad0 = pMapper.createQuadMap(500,500); // width height
    quad1 = pMapper.createQuadMap(500,500); 
    quad2 = pMapper.createQuadMap(500,500); 
    quad3 = pMapper.createQuadMap(500,500); 

    // loads calibration in the "maps" directory
    //pMapper.load("maps/map.json");

}

function draw() {
    background(0);

   // quad0.displaySketch(yutingTexture);
    quad1.displaySketch(canTexture);
   // quad2.displaySketch(evaKimTexture);
   // quad3.displaySketch(bintouBaysmoreTexture);
    //quad0.displaySketch(yourNameTexture);
}

function keyPressed() {
    switch (key) {
        case "c":
            pMapper.toggleCalibration();
            break;
        case "f":
            let fs = fullscreen();
            fullscreen(!fs);
            break;
        case "l":
            pMapper.load("maps/map.json");
            break;

        case "s":
            pMapper.save("map.json");
            break;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



//groups animation/texture code

// var bg;
// let lastMin;
// function bintouBaysmoreSetup(pg) {
//     pg.rectMode(CENTER);
//     bg = color(0,200,255); //starting color
//     lastMin = minute();
// }
//     // put your animation here
// function randomColor(pg){
//   bg = color(0,random(200),random(255));
// }

// function bintouBaysmoreTexture(pg) {
//   let curMin = minute();
//   if (curMin !== lastMin){
//     randomColor();
//     lastMin = curMin;
//   }
//   pg.background(bg);
//   //first hair puff on the left
//   pg.push();
//   pg.noStroke();
//   pg.translate(150,150);
//   let angle = second();
//   pg.rotate(angle);
//   pg.fill(0); // color of the hair
//   pg.polarEllipses(10,90,20,20);
//   pg.pop();
//   //second hair puff on the right
//   pg.push();
//   pg.noStroke();
//   pg.translate(350,150);
//   let angle2 = second();
//   pg.rotate(angle2);
//   pg.fill(0); // color of the hair
//   pg.polarEllipses(10,90,20,20);
//   pg.pop();
//   pg.translate(width/2, height/2);
//   //face
//   pg.push();
//   pg.noStroke();
//   pg.fill(150,75,0); //color of skin
//   pg.ellipse(0,0, 200, 240);
//   pg.pop();
//   //bangs
//   pg.push();
//   pg.translate(0,-110);
//   pg.fill(0,0,0); //color of the hair
//   pg.ellipse(0,30,190,80);
//   pg.pop();
//   //eyebrows
//   pg.push();
//   pg.fill(0);
//   pg.rotate(45);
//   pg.rect(-50,30,5,30,10);
//   pg.rotate(45);
//   pg.rect(-45,-30,5,30,10);
//   pg.pop();
//   //right lashes
//   pg.push();
//   pg.rotate(45);
//   pg.fill(0);
//   pg.rect(20,-50,5,10,5);
//   pg.rect(27,-50,5,10,5);
//   pg.pop();
//   //left lashes
//   pg.push();
//   pg.rotate(100);
//   pg.fill(0);
//   pg.rect(-40,-35,5,10,5);
//   pg.rect(-48,-33,5,10,5);
//   pg.pop();
//   //eyes
//   let xEye= 40;
//   let yEye= 0;
//   pg.push();
//   pg.stroke(1); //eyeliner color
//   pg.strokeWeight(2); //eyeliner thickness
//   pg.fill(255,255,255);
//   pg.ellipse(-xEye, -yEye, 30, 20);
//   pg.ellipse(xEye, yEye, 30, 20);
//   pg.pop();
//   //irises
//   pg.fill(90,30,23);
//   pg.ellipse(-xEye, -yEye, 15, 15);
//   pg.ellipse(xEye, yEye, 15, 15);
//   //nose
//   pg.fill(0);
//   pg.rect(0,20,5,20,10);  
//   //mouth
//   pg.fill(255);
//   pg.ellipse(15, 70, 20, 20);
//   pg.push();
//   pg.rotate(-45);
//   pg.pop();
//   blowingBubble();
//   for (i=0; i<60; i++){
//      let count= 0;
//      if (second()){
//        count++;
//      }
//      if (count%2==0){
//        poppedBubble();
//      }
//    }
// }

// function poppedBubble(pg){
//   pg.push();
//   pg.noStroke();
//   pg.fill(255,192,203); 
//   pg.polarEllipses(4.5,290,130,100);
//   pg.pop();
// }
// function bubbleGum(pg){
//   pg.push();
//   pg.noStroke();
//   pg.fill(255,192,203,200);
//   pg.ellipse(0,0,300); 
//   pg.pop();
//   pg.push();
//   pg.rotate(45);
//   pg.noStroke();
//   pg.fill(255,255,255,200);
//   pg.ellipse(-80,-10,50,100); 
//   pg.ellipse(-80,70,20,20); 
//   pg.pop();
// }
// function blowingBubble(pg){
//   let i=millis()/10000;
//   pg.push();
//   pg.translate(15,70);
//   pg.scale(sin(i));
//   bubbleGum();
//   pg.pop();
// }

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------


/// For Can

function sunClock(pg) {
  pg.push();
  let m = month();
  let sr; // sunrise
  let ss; // sunset

  sr = 6-1.5*sin((360/365)*(day() - 81));
  ss = 18-1.5*sin((360/365)*(day() - 81));
  //I use LLM to get this formula 

  let st = hour() + minute()/60;//suntime

  pg.push();
  pg.rotate(st*15 - 90);
  pg.translate(100, 0);
  if (st>sr && st<ss) {
    pg.ellipse(0, 0, 12);
    pg.ellipse(0, 0, 18);
  }else{
    for (i=0;i<6;i++) {
       pg.ellipse(0,0,12-i*2);
    }
    }
  pg.pop();
  pg.noFill();
  pg.ellipse(0,0,200,200);
  pg.arc(0,0,208,208, ss*15-90, sr*15-90);
  pg.arc(0,0,192,192, ss*15-90, sr*15-90);
  pg.pop();
}

function birdClock(pg) {
  pg.push();
  let h = hour();
  let s = second();
  //let a = h*15+s*0.25;//looks not good
  //let a  = s*6;
  let a = millis()/1000*12;
  let dis = 200;
  let sp = millis();
  if (h>6 && h<18) {
    pg.push();
    pg.rotate(a*2);
    pg.translate(0,180);
    pg.rotate(sp%360);
    for (i=0;i<8;i++) {
      //triangle(16,0,-16,-16,-16,16);//white bird
      pg.triangle(16-i*2,0,i*2-16,i*2-16,i*2-16,16-i*2);//bird with more decoration
    }
    pg.pop();

    // daytime
  } else {
    pg.push();
    pg.rotate(a);
    pg.translate(0,140);
    pg.rotate((sp/3)%360);
    for (i=0;i<8;i++) {
      pg.triangle(16-i*2,0,i*2-16,i*2-16,i*2-16,16-i*2);
    }
    pg.pop();
    //nighttime
  }
  pg.pop();
}

function moonClock(pg) {
  pg.push();
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
    pg.push();
    pg.rotate(270+i*360/8);
      for (j = 0; j < 8; j++) {
        pg.ellipse(180,0,30-j*30/8);
      }
    pg.pop();
    } else {
    pg.push();
    pg.noFill();
    pg.rotate(270+i*360/8);
    pg.ellipse(180,0,30);
    pg.pop();
    }
  }
  pg.pop();
}

function tideClock(pg){
  pg.push();
  let h = hour();
  let mi = minute();
  let s = second();
  let tt = h+mi/60+s/3600;//tide time
  let t = cos(360*tt/12.42);
  let th = 80*cos(tt*0.00014)+25*cos(tt*0.000145);//I use LLM to get this formula
  //The tidal formula involves the COS function.
  //This is not for drawing, but for computation.
  let ln = map(t,-1,1,6,48);//line number
  //console.log(t, ln);
  for (i = 0; i < ln; i++) {
    let y = i*5+50;
    //console.log(y);
    pg.line(60,y-150,120,y-150);
  }
  pg.pop();
}

function plantClock(pg) {
  pg.push();
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
    pg.push();
    pg.rotate(i * 1.5);
    pg.translate(dis, 0);
    pg.ellipse(0, 0, 5, 6);
    pg.pop();
  }

  pg.push();
  pg.rotate(180);
   for (i=0;i<n;i++) {
    let dis = 200-i*1;
    if(dis<0) {
      dis = 0;
    }
    pg.push();
    pg.rotate(i * 1.5);
    pg.translate(dis, 0);
    pg.ellipse(0, 0, 5, 6);
    pg.pop();
  }
  pg.pop();
    pg.push();
  pg.rotate(90);
   for (i=0;i<n;i++) {
    let dis = 200-i*1;
    if(dis<0) {
      dis = 0;
    }
    pg.push();
    pg.rotate(i * 1.5);
    pg.translate(dis, 0);
    pg.ellipse(0, 0, 5, 6);
    pg.pop();
  }
  pg.pop();

    pg.push();
  pg.rotate(270);
   for (i=0;i<n;i++) {
    let dis = 200-i*1;
    if(dis<0) {
      dis = 0;
    }
    pg.push();
    pg.rotate(i * 1.5);
    pg.translate(dis, 0);
    pg.ellipse(0, 0, 5, 6);
    pg.pop();
  }
  pg.pop();

  pg.pop();
}

function canTexture(pg) {
    pg.push();
    pg.background("red");
  pg.translate(width/2,height/2);
  pg.fill(255);
  pg.ellipse(0,0,495);

  pg.angleMode(DEGREES);
  pg.push();
    pg.rotate(285);
    pg.scale(0.6,1.2);
    pg.rotate(millis()/1000*12);
    for (x=0;x<12;x++) {
      pg.rotate(5);
      pg.noFill();
      pg.stroke(40,60,230);
      pg.strokeWeight(1);
      moonClock();
      pg.fill(255,255,0,60);
      pg.noStroke();
      //pg.moonClock();
    }
  pg.pop();

  pg.noFill();
  pg.strokeWeight(1);
  k = k+speed;
  if ( k >= 60 || k <= 0) {
    speed = speed * -1;
  }
  l = l+speed2;
  if ( l >= 30 || l <= 0) {
    speed2 = speed2 * -1;
  }

  pg.angleMode(DEGREES);
  for (let a = 0; a < 2; a++) {
    pg.push();
    pg.rotate(a * 180);
    pg.translate(0, k);
    pg.stroke(50,150,255);
    //pg.tideClock();
    pg.pop();
  }

  pg.push();
    pg.rotate(45);
    pg.scale(0.8,1.5);
    pg.rotate(millis()/1000*10);
    for (x=0;x<12;x++) {
      pg.scale(0.8);
      pg.rotate(5);
      pg.stroke(100,200,0);
      pg.strokeWeight(2);
      pg.moonClock();
      pg.noStroke();
      pg.fill(250,80,100,60);
      pg.moonClock();
    }
  pg.pop();

  pg.push();
  pg.scale(1.6,0.8);
  for (x=0;x<12;x++) {
    pg.rotate(-45);
    pg.scale(0.9);
    pg.rotate(millis()/1000*12);
    pg.noFill();
    pg.stroke(0,80,200);
    pg.birdClock();
  }
  pg.pop();

  pg.push();
  pg.rotate(-15);
    pg.scale(1,2);
    pg.rotate(millis()/1000*8);
    pg.noFill();
    pg.stroke(250,200,0);
    pg.sunClock();
    pg.fill(255,0,0,80);
    pg.stroke(0,0,0,0);
    pg.sunClock();
  pg.pop();
  
  pg.push();
  pg.stroke(0);
    pg.rotate(90-l);
    pg.scale(0.4,2.3);
    pg.rotate(millis()/1000*16);
    pg.noFill();
    pg.stroke(250,100,0);
    pg.sunClock();
    pg.fill(255,0,0);
    pg.stroke(0,0,0,0);
    pg.sunClock();
  pg.pop();

  pg.push();
  pg.fill(150,200,0);
  pg.stroke(0,100,50);
  pg.rotate(millis()/1000);
  pg.plantClock();
  pg.pop();

}
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------


//------Eva Kim Set up --------------------------------------------------------------------------------------------------------------------

// function evaKimSetup() {
//     let currentH = hour();
//     layerCount = currentH;

//   // Initialize data for existing layers at startup
//   for (let i = 1; i <= currentH; i++) {
//     shapeX[i] = width / 2 + random(-150, 150);
//     shapeY[i] = height / 2 + random(-100, 100);
//     shapeTargetW[i] = random(200, 350);
//     shapeTargetH[i] = random(120, 250);
    
//     // Start with already full size for past hours
//     shapeCurrentW[i] = shapeTargetW[i];
//     shapeCurrentH[i] = shapeTargetH[i];
//   }
// }

// function evaKimTexture(pg) {
//     pg.noStroke();
//     pg.rectMode(CENTER);

//     let h = hour();
//     let m = minute();
//     let s = second(); 

//     // 1. Time-based background color transitions
//     let bgMorning = color(240, 244, 248);   // Morning: Pastel blue-white (6 AM - 12 PM)
//     let bgAfternoon = color(245, 241, 232); // Afternoon: Warm cream sand (12pm - 6 PM)
//     let bgNight = color(20, 25, 38);        // Night: Deep blue charcoal (6pm after)

//     let currentBg;
//     if (h < 12) {
//         currentBg = bgMorning;
//     } else if (h < 18) {
//         let amt = map(h, 12, 17, 0, 1);
//         currentBg = lerpColor(bgMorning, bgAfternoon, amt);
//     } else {
//         currentBg = bgNight;
//     }
//     pg.background(currentBg);

//     // Add a new layer on the hour
//     if (h !== lastHour && lastHour !== -1) {
//         if (h === 0) {
//         layerCount = 0; 
//         } else {
//         layerCount = layerCount + 1;
        
//         // Store random positions and target sizes directly in arrays
//         shapeX[layerCount] = width / 2 + random(-150, 150);
//         shapeY[layerCount] = height / 2 + random(-100, 100);
//         shapeTargetW[layerCount] = random(200, 350);
//         shapeTargetH[layerCount] = random(120, 250);
        
//         // Growth animation starts from size 0
//         shapeCurrentW[layerCount] = 0;
//         shapeCurrentH[layerCount] = 0;
//         }
//     }
//     lastHour = h;

//     // 2. Render Hanji paper layers
//     for (let i = 1; i <= layerCount; i++) {
//         // Smooth growth animation using lerp()
//         shapeCurrentW[i] = lerp(shapeCurrentW[i], shapeTargetW[i], 0.05);
//         shapeCurrentH[i] = lerp(shapeCurrentH[i], shapeTargetH[i], 0.05);

//         // Color palettes by time of day
//         let cBlue = color(165, 205, 225);     
//         let cYellow = color(225, 225, 175);   
//         let cAfternoon = color(235, 175, 130); 
//         let cEvening = color(150, 110, 150);   
//         let cNight = color(45, 60, 95);        

//         let baseColor;
//         if (i <= 11) {
//         let amt = map(i, 1, 11, 0, 1);
//         baseColor = lerpColor(cBlue, cYellow, amt);
//         } else if (i <= 17) {
//         let amt = map(i, 12, 17, 0, 1);
//         baseColor = lerpColor(cAfternoon, cEvening, amt);
//         } else {
//         let amt = map(i, 18, 23, 0, 1);
//         baseColor = lerpColor(cEvening, cNight, amt);
//         }

//         // Floating motion using sin()
//         let waveY = sin(frameCount * 0.02 + i) * 5; 

//         let alphaVal = 75;
//         if (h >= 18) {
//         alphaVal = 45;
//         }

//         pg.fill(red(baseColor), green(baseColor), blue(baseColor), alphaVal); 
//         pg.rect(shapeX[i], shapeY[i] + waveY, shapeCurrentW[i], shapeCurrentH[i], 2); 
//     }

//     // 3. 1-second interval sparkling light particle
//     if (s !== lastSecond) {
//         sparkleX = width / 2 + random(-180, 180);
//         sparkleY = height / 2 + random(-130, 130);
//         sparkleAlpha = 220; 
//         lastSecond = s;
//     }

//     if (sparkleAlpha > 0) {
//         pg.fill(255, 240, 190, sparkleAlpha);
//         pg.rect(sparkleX, sparkleY, 12, 12, 2);
//         sparkleAlpha = sparkleAlpha - 5; 
//     }

//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------


// function yutingSetup() {
//     angleMode(DEGREES);
  
//     // Change color stage every 5 seconds
//     stageInterval = setInterval(changeColorStage, 5000);
//   }
  
//   // Cycle between three color stages
//   function changeColorStage(pg) {
//     colorStage = (colorStage + 1) % 3;
//   }
  
//   function yutingTexture(pg) {
//     pg.angleMode(DEGREES);
//     pg.colorMode(HSB, 360, 100, 100, 1);
  
//     // Change background every 30 seconds
//     let s = second();
  
//     if (s < 30) {
//       pg.background(245, 35, 15);
//     } else {
//       pg.background(0, 0, 100);
//     }
  
//     let h = hour();
//     let m = minute();
  
//     // Allows smooth movement between individual seconds
//     let time = millis() / 1000;
  
//     // Move origin to mapped canvas center
//     pg.translate(pg.width / 2, pg.height / 2);
  
//     // Seconds Spiral
//     let startRadius = 35;
  
//     // Gentle breathing motion
//     let breathing = sin(time * 90) * 8;
  
//     for (let i = 0; i <= s; i++) {
//       let angle = i * 14 - 50;
  
//       // Each line moves slightly
//       let r = startRadius + i * 3 + breathing;
  
//       // Keep random values stable frame-to-frame
//       pg.randomSeed(i * 133);
  
//       let lineLen = random(30, 50);
//       let lineWeight = random(10, 20);
  
//       // Individual line oscillation
//       let wave = sin(time * 90 + i * 15) * 8;
//       lineLen = lineLen + wave;
  
//       let secondProgress = (millis() % 1000) / 1000;
  
//       if (i == s) {
//         // Ease the newest line into view
//         let eased =
//           1 - (1 - secondProgress) * (1 - secondProgress);
  
//         lineLen = lineLen * eased;
//       }
  
//       // Inner point
//       let x1 = cos(angle) * r;
//       let y1 = sin(angle) * r;
  
//       // Outer point
//       let x2 = cos(angle) * (r + lineLen);
//       let y2 = sin(angle) * (r + lineLen);
  
//       // Purple Color Palette
//       let colorHue;
  
//       if (colorStage == 0) {
//         colorHue = random(330, 350);
//       }
  
//       if (colorStage == 1) {
//         colorHue = random(265, 285);
//       }
  
//       if (colorStage == 2) {
//         colorHue = random(280, 310);
//       }
  
//       let colorSat = random(20, 40);
//       let colorBright = random(90, 100);
  
//       pg.stroke(colorHue, colorSat, colorBright);
//       pg.strokeWeight(lineWeight);
//       pg.strokeCap(ROUND);
  
//       pg.line(x1, y1, x2, y2);
//     }
  
//     // Hours: Dark purple spiral
//     let hourProgress = h + m / 60 + s / 3600;
//     let hourSteps = hourProgress * 4;
  
//     pg.noFill();
//     pg.stroke(250, 45, 78);
//     pg.strokeWeight(12);
//     pg.strokeCap(ROUND);
  
//     pg.beginShape();
  
//     for (let i = 0; i <= hourSteps; i++) {
//       let angle = i * 14 - 90;
//       let radius = 5 + i * 2;
  
//       let x = cos(angle) * radius;
//       let y = sin(angle) * radius;
  
//       pg.vertex(x, y);
//     }
  
//     pg.endShape();
  
//     // Minutes: Light lavender spiral
//     let minuteProgress = m + s / 60;
//     let minuteSteps = minuteProgress * 3;
  
//     pg.noFill();
//     pg.stroke(285, 25, 95, 0.85);
//     pg.strokeWeight(13);
//     pg.strokeCap(ROUND);
  
//     pg.beginShape();
  
//     for (let i = 0; i <= minuteSteps; i++) {
//       let angle = i * 12 - 90;
//       let radius = 5 + i * 0.65;
  
//       let x = cos(angle) * radius;
//       let y = sin(angle) * radius;
  
//       pg.vertex(x, y);
//     }
  
//     pg.endShape();
  
//     // Small moving dots
//     let particleRadius = 185;
  
//     for (let i = 0; i < 5; i++) {
//       let particleAngle = time * 35 + i * 72;
  
//       let px = cos(particleAngle) * particleRadius;
//       let py = sin(particleAngle) * particleRadius;
  
//       let particleSize =
//         15 + sin(time * 90 + i * 30) * 2;
  
//       pg.noStroke();
//       pg.fill(245, 45, 85, 0.85);
  
//       pg.circle(px, py, particleSize);
//     }
// }
//}

