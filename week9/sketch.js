// This week I use a tutorial I find online ⬇️
// https://thecodingtrain.com/tracks/sound/sound/10-sound-visualization-radial-graph
// It has code like this ⬇️

  // let vol = amp.getLevel();
  // volhistory.push(vol);
  // stroke(255);
  // noFill();
  
  // translate(width / 2, height / 2);
  // beginShape();
  // for (let i = 0; i < 360; i++) {
  //   let r = map(volhistory[i], 0, 1, 10, 100);
  //   let x = r * cos(i);
  //   let y = r * sin(i);
  //   vertex(x, y);
  // }
  // endShape();
  //   if (volhistory.length > 360) {
  //   volhistory.splice(0, 1);
  // }

// I will use the same logic to draw the wave circle.

//======================================================

//While searching for sound.js, 
// I found the language p5.speech in the p5.js Libraries. 
// This might work well with the text array I created last week 
// https://idmnyu.github.io/p5.js-speech/

// function setup() {
//   noCanvas();
//   let lang = navigator.language || 'en-US';
//   let speechRec = new p5.SpeechRec(lang, gotSpeech);

//   let continuous = true;
//   let interim = true;
//   speechRec.start(continuous, interim);

//   function gotSpeech() {
//     if (speechRec.resultValue) {
//       createP(speechRec.resultString);
//     }
//   }
// }


//FFT from this week's course materials
//https://editor.p5js.org/melodyloveless/sketches/IlBZv2Tfh



//==============================================

let letter = [];
let mic;
let speechRec;

function setup() {
  let cnv = createCanvas(600,600);
  angleMode(DEGREES);
  let lang = 'en-US';
  speechRec = new p5.SpeechRec(lang, gotSpeech);

  let continuous = true;
  //let interim = true;
  let interim = false;
  speechRec.start(continuous, interim);

  mic = new p5.AudioIn();
  fft = new p5.FFT();
  mic.connect(fft);
  mic.start();
}

function gotSpeech() {
  if (speechRec.resultValue) {
    createP(speechRec.resultString);
    let words = speechRec.resultString;
    for (let i=0;i<words.length;i++) {
      letter.push(words[i]);
      if (letter.length > 36) {
        letter.splice(0, 1);
      }
    }
  }
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  textSize(20);
  let energy = fft.waveform();
  translate(width/2, height/2);
  textAlign(CENTER);
  text("Please say something\nText recognition may take a moment", 0, 0);

  noFill();
  beginShape();
  for (let i = 0; i < energy.length; i+= 100) {
    let angle = map(i, 0, energy.length, 0, 360);
    let r = map(energy[i], -0.1, 0.1, 50, 300);
    let x = r * cos(angle);
    let y = r * sin(angle);
    vertex(x, y);
    //ellipse(x, y, 1);
  }
  endShape(CLOSE);

  // 字母沿着波形排列
  for (let i = 0; i < letter.length; i++) {
    let angle = i*10-180;
    let r = map(energy[i], -0.1, 0.1, 50, 300);
    let x = r * cos(angle);
    let y = r * sin(angle);
    text(letter[i], x, y);
  }
}