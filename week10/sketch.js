let faceMesh;
let handPose;
let video;
let hands = [];
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: true };

let images = [];
let videos = [];
let meme = [];

let onFaceVideo = -1;
let grabbed = -1;

async function setup() {
  createCanvas(windowWidth,windowHeight);
  pixelDensity(1);
  imageMode(CENTER);
  images[0] = await loadImage("media/goat.png");
  images[1] = await loadImage("media/dog.png");
  images[2] = await loadImage("media/blackCat.png");
  images[3] = await loadImage("media/dancingCat.png");
  videos[0] = createVideo("media/goat.mp4");
  videos[1] = createVideo("media/dog.mp4");
  videos[2] = createVideo("media/blackCat.mp4");
  videos[3] = createVideo("media/dancingCat.mp4");

  for(let i=0;i<4;i++) {
    //videos[i].elt.muted = true;
    videos[i].hide();
    meme[i] = { //PNG
      x:width/2-375+240*i,
      y:height/2+175,
    };
  }
  handPose = await ml5.handPose({ flipped: true });
  faceMesh = await ml5.faceMesh(options);

  video = createCapture(VIDEO,{ flipped: true });
  video.size(1000, 750);
  video.hide();
  handPose.detectStart(video, gotHands);
  faceMesh.detectStart(video, gotFaces);
}

function resetItem(i) {
  meme[i].x = width/2-375+240*i;
  meme[i].y = height/2+175;
}

function draw() {
  // Draw the webcam video
  image(video, width/2, height/2, 1000, 750);
  textSize(20);
  fill(0);
  textAlign(CENTER);
  text("Pinch a meme with your index finger and thumb to pick it up. \n Drag it into the face area and release your fingers to place it on your face.", windowWidth/2,80);

    //draw PNG
  for (let i = 0; i < 4; i++) {
    if (i != onFaceVideo) {
      image(images[i],meme[i].x,meme[i].y,200,200);
    }
  }

  // draw video on the face
  if (onFaceVideo!=-1 && faces.length>0) {
    let nose = faces[0].keypoints[1];
    greenScreen(videos[onFaceVideo]); // function to remove green background from the video
    image(videos[onFaceVideo],
      nose.x+(width-1000)/2,nose.y+(height-750)/2,
      640,360);
  }

  if (faces.length > 0) {
      let nose = faces[0].keypoints[1];
      noFill();
      stroke(255);
      strokeWeight(4);
      ellipse(nose.x+(windowWidth-1000)/2,nose.y+(windowHeight-750)/2,300);
    }

  if (hands.length > 0) {
    let hand = hands[0];
    let a = hand.keypoints[8];
    let b = hand.keypoints[4];

    let x = a.x+(width-1000)/2;// camera 2000x1500
    let y = a.y+(height-750)/2;//canvas is windowWidth x windowHeight
    noStroke();
    fill(255);
    ellipse(x,y,20,20);
    ellipse(b.x+(width-1000)/2,b.y+(height-750)/2,20);
    noFill();
    stroke(255);
    strokeWeight(4);
    line(x,y,b.x+(width-1000)/2,b.y+(height-750)/2);

    if (dist(a.x,a.y,b.x,b.y)<40) {
      if(grabbed == -1){
        for (let i = 0; i < 4; i++) {
          if (i != onFaceVideo && dist(x,y,meme[i].x,meme[i].y)<75){
            grabbed = i;
          }
        }
      }
      if(grabbed != -1){
        meme[grabbed].x = x;
        meme[grabbed].y = y;
      }
    } else {
      if(grabbed != -1){
        if (faces.length > 0) {
          let nose = faces[0].keypoints[1];
          if (dist(a.x, a.y, nose.x, nose.y) < 150) {
            if (onFaceVideo != -1) {
              videos[onFaceVideo].pause();
              resetItem(onFaceVideo);
            }
            onFaceVideo = grabbed; //change on face vedio
            videos[grabbed].time(0);
            videos[grabbed].loop();
          }
        }
        resetItem(grabbed);
        grabbed = -1;
      } 
    }
  }
}

//Green screen keying
//Reference: https://idmp5.github.io/creative-coding/videos/
//Course example black pixels ➡️ red channel
//Reuse: green pixels ➡️ alpha channel = 0
function greenScreen(mVideo) {
  mVideo.loadPixels();
  if (mVideo.pixels.length === 0) {
    return;
  }
  for (let i = 0; i < mVideo.pixels.length; i += 4) {
    let r = mVideo.pixels[i + 0];
    let g = mVideo.pixels[i + 1];
    let b = mVideo.pixels[i + 2];
    if (r<100 && g>100 && b<100) {
      mVideo.pixels[i + 3] = 0;
    }
  }
  mVideo.updatePixels();
}


function gotHands(results) {
  hands = results;
}

function gotFaces(results) {
  faces = results;
}



