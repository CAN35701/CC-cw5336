// p5Polar Template
// https://github.com/liz-peng/p5.Polar
// https://liz-peng.github.io/p5.Polar/
// Review the index.html for the <script></script> 
function setup() {
  createCanvas(500, 500);
  background(0,130,255);
}


function bird01(){
  scale (0.75);
  polarEllipses(12, 30, 20, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(0.07);
  polarEllipses(12, 30, 20, 180, function(...args) {
        fill(0,130,255);
        args[4] = 180+args[0]*6;
        return args;     
    });
  polarEllipses(12, 20, 7, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(0.03);
  polarEllipses(12, 18, 7, 180, function(...args) {
        fill(0,130,255);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(-0.18);
  polarEllipses(12, 20, 3, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
}



function bird02(){
  scale (0.75);
  polarEllipses(12, 29, 29, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(0.07);
  polarEllipses(12, 35, 35, 180, function(...args) {
        fill(0,130,255);
        args[4] = 180+args[0]*6;
        return args;     
    });
  polarEllipses(12, 20, 7, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(0.03);
  polarEllipses(12, 18, 7, 180, function(...args) {
        fill(0,130,255);
        args[4] = 180+args[0]*6;
        return args;     
    });
  rotate(-0.18);
  polarEllipses(12, 20, 3, 180, function(...args) {
        fill(255, 255, 255, 200+args[0]*10);
        args[4] = 180+args[0]*6;
        return args;     
    });
}




function draw() {
  background(0,130,255);
  push();
  setCenter(width/2, height/2);
  noStroke();
  scale(1.8);
  rotate((10000-mouseX+mouseY)/500);
  push();
  if (mouseIsPressed == true){
    for (i = 0; i < 18; i++){
      if (i % 2 == 0) {
        bird02();  
      }else{
        bird01(); 
      }
    }
  }
  if(mouseIsPressed == false){
    for (i = 0; i < 18; i++){
      if (i % 2 == 0) {
        bird01();  
      }else{
        bird02(); 
      }
    }
  }
  pop();


  for(j=0;j<18;j++){
  fill(0,130,255,40);
  ellipse(0,0,210-(j*20));
  }
  pop();
  fill(255,255,0);
  textStyle(BOLDITALIC)
  textAlign(CENTER, CENTER);
  textSize(20);
  text("Press the mouse \n to make the bird flap its wings\nMove the mouse\n to rotate the flock of birds", 250, 250);
}
