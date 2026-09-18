// Review and Extend
//Intro to iterating

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255,0,0);
  //drawing01();
  //drawing02();
  //drawing03();
  drawing04();

  noLoop();

}

// first for loop
function drawing01(){
  //cod goes here
    // ellipse(100,height/2,50);
  // ellipse(150,height/2,50);
  // ellipse(200,height/2,50);
  // ellipse(250,height/2,50);
  // ellipse(300,height/2,50);

  //for loop
  const startingX = 100;
  const s = 50;
  const space = 80;
 
  for (i=0; i<5; i++){
    console.log(startingX + (i*50));
    ellipse(startingX + (i*space),height/2,s);
  }

}

// first nested for loop
function drawing02(){
  const startingX = 100;
  const startingY = 100;
  const s = 50;
  const space = 80;
  for (i=0; i<5; i++){
    for(j=0 ; j<5; j++){
      ellipse(startingX + (i*space),startingY+(j*space),s);
      console.log(j);
    }
  }

}

//Using conditionals to change color
function drawing03(){
  const startingX = 100;
  const startingY = 100;
  const s = 50;
  const space = 80;
  for (i=0; i<5; i++){
    for(j=0 ; j<5; j++){
      //  if(j<3 && i<3){
      //   fill('yellow');
      //  }else{
      //   fill(255,255,255);
      //  }
      // || or，&& and

      // % modulo (comparison operatior)
      //余数
      console.log(i%2);

      const condition1 = (i%2 == 0 && j%2 ==0);
      const condition2 = (i%2 == 1 && j%2 ==1);
      if (condition1||condition2){
        fill('yellow');
      }else{
        fill(255);
      }

      ellipse(startingX + (i*space),startingY+(j*space),s);
      fill('blue');
      text(j+""+ i,startingX + (i*space),startingY+(j*space));
      //console.log(j);
    }
  }

}


//starting to iterate
function drawing04(){
  noFill();
  //stroke(255);
  strokeWeight(5);
  const startingX = 100;
  const startingY = 100;
  const s = 50;
  const space = 80;
  for (i=0; i<5; i++){
    for(j=0 ; j<5; j++){
      stroke(255,(i+1)*50,255,(j+1)*50);
      push();
      scale(j/5);
      ellipse(startingX + (i*space),startingY+(j*space),s);
      pop();
      //ellipse(startingX + (i*space),startingY+(j*space),s+(i*20));
      //console.log(j);
    }
  }

}
