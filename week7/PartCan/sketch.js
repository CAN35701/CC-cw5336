let pMapper;
let quad0, quad1, quad2, quad3; // four

// Can's values
let k = 0;
let speed = 0.2;
let l = 0;
let speed2 = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // create mapper object
  pMapper = createProjectionMapper(this);

  quad1 = pMapper.createQuadMap(600, 600);//Can

  // pMapper.load("maps/map.json");
}

function draw() {
  background(0);
  quad1.displaySketch(canTexture);
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


//==================================================================================
//Can 
//==================================================================================
function sunClock(pg) {
  pg.push();

  let m = month();
  let sr;
  let ss;

  sr = 6 - 1.5 * sin((360 / 365) * (day() - 81));
  ss = 18 - 1.5 * sin((360 / 365) * (day() - 81));

  let st = hour() + minute() / 60;

  pg.push();

  pg.rotate(st * 15 - 90);
  pg.translate(100, 0);

  if (st > sr && st < ss) {
    pg.ellipse(0, 0, 12);
    pg.ellipse(0, 0, 18);
  } else {
    for (let i = 0; i < 6; i++) {
      pg.ellipse(0, 0, 12 - i * 2);
    }
  }

  pg.pop();

  pg.noFill();
  pg.ellipse(0, 0, 200, 200);
  pg.arc(0, 0, 208, 208, ss * 15 - 90, sr * 15 - 90);
  pg.arc(0, 0, 192, 192, ss * 15 - 90, sr * 15 - 90);

  pg.pop();
}

function birdClock(pg) {
  pg.push();

  let h = hour();
  let s = second();

  let a = millis() / 1000 * 12;
  let dis = 200;
  let sp = millis();

  if (h > 6 && h < 18) {

    pg.push();

    pg.rotate(a * 2);
    pg.translate(0, 180);
    pg.rotate(sp % 360);

    for (let i = 0; i < 8; i++) {
      pg.triangle(
        16 - i * 2,
        0,
        i * 2 - 16,
        i * 2 - 16,
        i * 2 - 16,
        16 - i * 2
      );
    }

    pg.pop();

  } else {

    pg.push();

    pg.rotate(a);
    pg.translate(0, 140);
    pg.rotate((sp / 3) % 360);

    for (let i = 0; i < 8; i++) {
      pg.triangle(
        16 - i * 2,
        0,
        i * 2 - 16,
        i * 2 - 16,
        i * 2 - 16,
        16 - i * 2
      );
    }

    pg.pop();
  }

  pg.pop();
}

function moonClock(pg) {
  pg.push();

  let y = year();
  let m = month();
  let d = day();

  let pd = (y - 2026) * 365 + (m - 9) * 30 + (d - 11);

  let md = pd % 29.53059;
  let mp;

  if (md < 4) {
    mp = 0;
  } else if (md < 7) {
    mp = 1;
  } else if (md < 11) {
    mp = 2;
  } else if (md < 15) {
    mp = 3;
  } else if (md < 19) {
    mp = 4;
  } else if (md < 22) {
    mp = 5;
  } else if (md < 26) {
    mp = 6;
  } else {
    mp = 7;
  }

  for (let i = 0; i < 8; i++) {
    if (i == mp) {
      pg.push();
      pg.rotate(270 + i * 360 / 8);
      for (let j = 0; j < 8; j++) {
        pg.ellipse(180, 0, 30 - j * 30 / 8);
      }
      pg.pop();
    } else {
      pg.push();
      pg.noFill();
      pg.rotate(270 + i * 360 / 8);
      pg.ellipse(180, 0, 30);
      pg.pop();
    }
  }
  pg.pop();
}

function tideClock(pg) {
  pg.push();
  let h = hour();
  let mi = minute();
  let s = second();
  let tt = h + mi / 60 + s / 3600;
  let t = cos(360 * tt / 12.42);
  let th =
    80 * cos(tt * 0.00014) +
    25 * cos(tt * 0.000145);
  let ln = map(t, -1, 1, 6, 48);
  for (let i = 0; i < ln; i++) {
    let y = i * 5 + 50;
    pg.line(60, y - 150, 120, y - 150);
  }
  pg.pop();
}

function plantClock(pg) {
  pg.push();

  let m = month();
  let tm = millis() / 1000;
  let sp;

  if (m >= 3 && m <= 5) {
    sp = 0.8;
  } else if (m >= 6 && m <= 8) {
    sp = 1.3;
  } else if (m >= 9 && m <= 11) {
    sp = 0.7;
  } else {
    sp = 0.3;
  }

  let n = tm * sp;

  for (let i = 0; i < n; i++) {
    let dis = 200 - i * 1;
    if (dis < 0) {
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

  for (let i = 0; i < n; i++) {
    let dis = 200 - i * 1;
    if (dis < 0) {
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

  for (let i = 0; i < n; i++) {
    let dis = 200 - i * 1;
    if (dis < 0) {
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
  for (let i = 0; i < n; i++) {
    let dis = 200 - i * 1;
    if (dis < 0) {
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
  pg.angleMode(DEGREES);
  // Center texture
  pg.translate(300, 300);
  pg.fill(255);
  pg.ellipse(0, 0, 495);

  pg.push();
  pg.rotate(285);
  pg.scale(0.6, 1.2);
  pg.rotate(millis() / 1000 * 12);

  for (let x = 0; x < 12; x++) {
    pg.rotate(5);
    pg.noFill();
    pg.stroke(40, 60, 230);
    pg.strokeWeight(1);
    moonClock(pg);
    pg.fill(255, 255, 0, 60);
    pg.noStroke();
  }
  pg.pop();

  pg.noFill();
  pg.strokeWeight(1);

  k = k + speed;
  if (k >= 60 || k <= 0) {
    speed = speed * -1;
  }
  l = l + speed2;
  if (l >= 30 || l <= 0) {
    speed2 = speed2 * -1;
  }

  for (let a = 0; a < 2; a++) {
    pg.push();
    pg.rotate(a * 180);
    pg.translate(0, k);
    pg.stroke(50, 150, 255);
    tideClock(pg);
    pg.pop();
  }

  pg.push();
  pg.rotate(45);
  pg.scale(0.8, 1.5);
  pg.rotate(millis() / 1000 * 10);
  for (let x = 0; x < 12; x++) {
    pg.scale(0.8);
    pg.rotate(5);
    pg.stroke(100, 200, 0);
    pg.strokeWeight(2);
    moonClock(pg);
    pg.noStroke();
    pg.fill(250, 80, 100, 60);
    moonClock(pg);
  }
  pg.pop();

  pg.push();
  pg.scale(1.6, 0.8);
  for (let x = 0; x < 12; x++) {
    pg.rotate(-45);
    pg.scale(0.9);
    pg.rotate(millis() / 1000 * 12);
    pg.noFill();
    pg.stroke(0, 80, 200);
    birdClock(pg);
  }
  pg.pop();

  pg.push();
  pg.rotate(-15);
  pg.scale(1, 2);
  pg.rotate(millis() / 1000 * 8);
  pg.noFill();
  pg.stroke(250, 200, 0);
  sunClock(pg);
  pg.fill(255, 0, 0, 80);
  pg.stroke(0, 0, 0, 0);
  sunClock(pg);
  pg.pop();

  pg.push();
  pg.stroke(0);
  pg.rotate(90 - l);
  pg.scale(0.4, 2.3);
  pg.rotate(millis() / 1000 * 16);
  pg.noFill();
  pg.stroke(250, 100, 0);
  sunClock(pg);
  pg.fill(255, 0, 0);
  pg.stroke(0, 0, 0, 0);
  sunClock(pg);
  pg.pop();

  pg.push();
  pg.fill(150, 200, 0);
  pg.stroke(0, 100, 50);
  pg.rotate(millis() / 1000);
  plantClock(pg);
  pg.pop();

  pg.pop();
}

//==================================================================================