// Review and Extend
//Intro to iterating
const a = i*j;
function setup() {
  createCanvas(500, 500);
  background(0,130,255);
}

// build function bird
function bird01(){
  const a = i*j;
  noStroke();
  fill(0,0,0,(20*a)+50);
  triangle(0, 20, 50, 20, 75, 0);
  fill(255,255,255,(20*a)+50);
  triangle(0, 20, 75, 75, 50, 20);
  triangle(50, 20, 50, 35, 100, 20);
  fill(0,0,0,(20*a)+50);
  ellipse(25, 30, 5);
}
function bird02(){
  const a = i*j;
  noStroke();
  fill(0,0,0,(20*a)+50);
  triangle(0, 20, 50, 20, 50, 0);
  fill(255,255,255,(20*a)+50);
  triangle(0, 20, 50, 100, 50, 20);
  triangle(50, 20, 50, 35, 100, 20);
  fill(0,0,0,(20*a)+50);
  ellipse(25, 30, 5);
}


function draw() {
  if (mouseIsPressed == true ) {
    background(0,130,255);
    push();
    for(j = 0; j<5; j++){
        for (i = 0; i < 5; i++) {
          const a = i*j;
          if((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
            push();
            translate(100*i,100*j);
            scale(i/5);
            bird02();
            pop();
          } else {
            push();
            translate(100*i,100*j);
            scale(j/5);
            bird01();
            pop();
          }
        }
      }
    }

  if (mouseIsPressed == false ) {
    background(0,130,255);
    for(j = 0; j<5; j++){
        for (i = 0; i < 5; i++) {
          const a = i*j;
          if((i % 2 === 0 && j % 2 === 0) || (i % 2 === 1 && j % 2 === 1)) {
            push();
            translate(100*i,100*j);
            scale(i/5);
            bird01();
            pop();
          } else {
            push();
            translate(100*i,100*j);
            scale(j/5);
            bird02();
            pop();
          }
        }
      }
    
    }
  fill(255,255,0);
  textSize(20);
  text("Press the mouse to make the bird flap its wings", 20, 30);
}
