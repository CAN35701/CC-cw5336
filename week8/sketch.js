let t = "";
let letters = [];
let speed = 0.1;

class Letter {
  constructor(x, y, c, r) {
    this.x = x;
    this.y = y;
    this.c = c;
    this.r = r;
  }
  falling(){
    if(this.y < this.r){
      fill(255);
      this.y += 2;
    }else{
      fill(0);
      this.y = this.r
      
    }
  }
  display() {
    text(this.c, this.x, this.y,this.r);
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0,0,0,50);
  fill(255,255,255,30);
  noStroke();
  textSize(20);
  text('Move to guide.\nHold to drop into water.',10,30);
  fill(255);
  for (i=letters.length-1; i >= 0; i--) {
    if(mouseIsPressed == false){
      if (i == 0) {
        letters[i].x = mouseX;
        letters[i].y = mouseY;
        letters[i].display();

      } else {
        letters[i].x += (letters[i-1].x-letters[i].x)*speed;
        letters[i].y += (letters[i-1].y-letters[i].y)*speed;
        //find new position 
        //based on the prior letter's position
        //like ++ with direction
        letters[i].display();
      }
    }else{
      letters[i].falling();
      letters[i].display();
      if(letters[i].y>letters[i].r){
        water(letters[i].x,letters[i].y);
        letters.splice(i,1);
      }
    }
  }

}

function water(a,b){
  noFill();
  stroke(255);
  strokeWeight(1);
  let h = random(20,40);
  let w = random(40,80);
  for(let j=0;j<3;j++){
    ellipse(a,b,w-j*10,h-j*10);
  }
}

function keyTyped() {
  if (key.length == 1) {
    t += key;
    letters.push(new Letter(mouseX + key.length*100, mouseY, key, random(350,500)));
  }
}

//I don't know why it doesn't working
// This part ⬇️

function keyReleased(){
  if (key == BACKSPACE){
    t = t.substring(0,t.length-1)
  }
}
