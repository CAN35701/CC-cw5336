// p5.plotSvg + p5.Polar Template

p5.disableFriendlyErrors = true; 
let bDoExportSvg = false; 
// if using randomness, experiment w/ myRandomSeed to see different versions (or iterations) of your sketch
let myRandomSeed = 12345; 
let regenerateButton, exportSvgButton; 

// canvas size
const DPI = 70; // dots per inch
const PAGE_W = 8.5*DPI; 
const PAGE_H = 11*DPI;

//------------------------------------------------------------
function setup() {
  createCanvas(PAGE_W, PAGE_H);
  UI();
  noFill();
  // Set the SVG group by stroke color to `true`, so that strokes 
  // of the same color are grouped together in the SVG file. 
  setSvgGroupByStrokeColor(true); 
}

function draw(){
  clear();
  randomSeed(myRandomSeed); 
  background(255); 
  
  if (bDoExportSvg == true){
    beginRecordSvg(this, "myOutput_" + month() + day() + year() + "_" + myRandomSeed + ".svg");
  }

  
  // define your drawing below
  push();
  stroke(0,50,200);
  translate(width/2, height/2);
  let na = map(mouseX, 0, width, 3, 7);
  let nb = map(mouseY, 0, height, 3, 7);
  let nu = map(mouseX, 0, height, 2, 7);
  let nh = map(mouseY, 0, height, 2, 7);
  let nt = map(mouseX, 0, height, 2, 7);
  smallHouse(na);
  highBuilding(nb);
  utilityPole(nu);
  house(nh);
  tower(nt);
  earth();

  scale(0.6);
  smallHouse(na);
  highBuilding(nb);
  utilityPole(nu);
  house(nh);
  tower(nt);
  earth();

  scale(0.5);
  smallHouse(na);
  highBuilding(nb);
  utilityPole(nu);
  house(nh);
  tower(nt);
  earth();


  pop();
  strokeWeight(1);
  if (bDoExportSvg){
    endRecordSvg(); 
    bDoExportSvg = false;
  }
}




function smallHouse(na) {
  for (i=0; i<na; i++) {
    push();
    rotate((360*i)+30/na); 
    translate(random(0,10), random(0,10));
    let w = random(25,40);
    let h = random(15,25);
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
    translate(random(0,10), random(0,10));
    let w = random(40,70);
    let h = random(25,40);
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
    translate(random(0,10), random(0,10));
    let w = random(50,60);
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
    translate(random(0,10), random(0,10));
    let w = random(20,30);
    let h = random(20,30);
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
    translate(random(0,10), random(0,10));
    let w = random(50,70);
    let h = random(10,20);
    triangle(140,0-h/2,140,h/2,140+w,0);
    rect(140+w/4,0-h/2,w/6,h);
    rect(140+w*3/4,0-h/3,w/6,h*2/3);
    pop();
  }
}

function earth(){
  push();
  for (i = 0; i < 55; i++) {
  stroke(255,50,0);
  let n = 30 * noise(i*0.2); 
  rotate(random(0.12,0.3)); 
  ellipse(130+n, 0, random(2,5),random(5,10));
  } 
  pop();
}







// function Drawing() {
//   strokeWeight(1); 
//   let s = random(50,200);
//   circle(width/2,height/2, s);
//   setCenter(width/2, height/2);
//   polarTriangles(random(20,30), random(50,70), 100);
// } 
// Tip: When plotting, strokeWeight() doesn't affect your drawing. 
// To change the thickness of your drawing, change your pen/marker/etc
// - or experiment with code (use a for loop to create an 'outline')

//-----------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------

// Make a new random seed when the "Regenerate" button is pressed
function regenerate(){
  myRandomSeed = round(millis()); 
}

// Set the SVG to be exported when the "Export SVG" button is pressed
function initiateSvgExport(){
  bDoExportSvg = true; 
}

function UI() {
  regenerateButton = createButton('Regenerate');
  regenerateButton.position(0, height);
  regenerateButton.mousePressed(regenerate); // run regenerate() when pressed
  
  exportSvgButton = createButton('Export SVG');
  exportSvgButton.position(120, height);
  exportSvgButton.mousePressed(initiateSvgExport); // run initiateSvgExport() when pressed
}

/*
This template uses the following sketch as a starting point: 
https://editor.p5js.org/golan/sketches/LRTXmDg2q

Additional references/info:
https://github.com/golanlevin/p5.plotSvg
https://github.com/liz-peng/p5.Polar
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#beginrecordsvg
https://github.com/golanlevin/p5.plotSvg/blob/main/documentation.md#endrecordsvg

*/