let faceMesh;
let handPose;
let video;
let hands = [];
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipHorizontal: false };

let images = [];
let videos = [];
let meme = [];

let onFaceVideo = -1;

async function setup() {
  createCanvas(windowWidth, windowHeight);
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

  for (let i = 0; i < 4; i++) {
    //videos[i].elt.muted = true;
    videos[i].hide();
    meme[i] = {
      x: width/2 + 750 - i * 500,
      y: height/2 + 750 - 70,
      grabbedBy: ""
    };
  }

  // Load handPose and faceMesh
  handPose = await ml5.handPose();
  faceMesh = await ml5.faceMesh(options);

  video = createCapture(VIDEO);
  video.size(2000, 1500);
  video.hide();

  handPose.detectStart(video, gotHands);
  faceMesh.detectStart(video, gotFaces);
}


function draw() {
  background(0);

  // Mirror the entire canvas
  translate(width, 0);
  scale(-1, 1);

  image(video, width/2, height/2, 2000, 1500);

  checkPGR();

  // Draw PNG images
  for (let i = 0; i < 4; i++) {
    if (i != onFaceVideo) {
      image(images[i], meme[i].x, meme[i].y, 160, 90);
    }
  }

  // Draw video on the face
  if (onFaceVideo != -1 && faces.length > 0) {
    let nose = faces[0].keypoints[1];
    let mVideo = videos[onFaceVideo];

    greenScreen(mVideo);

    image(mVideo,
      nose.x + (width - 2000)/2,
      nose.y + (height - 1500)/2,
      320, 180
    );
  }
}


// Check pinch, grab and release
function checkPGR() {
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let index = hand.keypoints[8];
    let thumb = hand.keypoints[4];

    let x = index.x + (width - 2000)/2;
    let y = index.y + (height - 1500)/2;

    let pinching = dist(index.x, index.y, thumb.x, thumb.y) < 35;
    let holding = -1;

    // Find the image held by this hand
    for (let j = 0; j < 4; j++) {
      if (meme[j].grabbedBy == hand.handedness) {
        holding = j;
      }
    }

    // Move or release
    if (holding != -1) {
      if (pinching) {
        meme[holding].x = x;
        meme[holding].y = y;
      } else {
        if (faces.length > 0) {
          let nose = faces[0].keypoints[1];

          if (dist(index.x, index.y, nose.x, nose.y) < 200) {
            playOnFace(holding);
          }
        }

        resetItem(holding);
      }
    }

    // Grab a new image
    else if (pinching) {
      for (let j = 0; j < 4; j++) {
        if (
          j != onFaceVideo &&
          meme[j].grabbedBy == "" &&
          dist(x, y, meme[j].x, meme[j].y) < 80
        ) {
          meme[j].grabbedBy = hand.handedness;
          break;
        }
      }
    }
  }
}


function playOnFace(i) {
  if (onFaceVideo != -1) {
    videos[onFaceVideo].pause();
    resetItem(onFaceVideo);
  }

  onFaceVideo = i;
  videos[i].time(0);
  videos[i].loop();
}


// Reset image position
function resetItem(i) {
  meme[i].x = width/2 + 750 - i * 500;
  meme[i].y = height/2 + 750 - 70;
  meme[i].grabbedBy = "";
}


function greenScreen(mVideo) {
  //Green screen keying
  //Reference: https://idmp5.github.io/creative-coding/videos/
  //Course example black pixels ➡️ red channel
  //Reuse: green pixels ➡️ alpha channel = 0

  mVideo.loadPixels();

  if (mVideo.pixels.length === 0) {
    return;
  }

  for (let i = 0; i < mVideo.pixels.length; i += 4) {
    let r = mVideo.pixels[i + 0];
    let g = mVideo.pixels[i + 1];
    let b = mVideo.pixels[i + 2];

    if (r < 100 && g > 100 && b < 100) {
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



