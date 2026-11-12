let handPose;
let video;
let hands = [];

async function setup() {
  createCanvas(640, 480);
  
  // Load the handPose model asynchronously
  handPose = await ml5.handPose();
  
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // Draw all the tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}

//==========================================

// let video;
// let bodyPose;
// let poses = [];
// let connections;

// function preload() {
//   bodyPose = ml5.bodyPose();
// }

// function setup() {
//   createCanvas(640, 480);
//   video = createCapture(VIDEO);
//   video.size(640, 480);
//   video.hide();

//   bodyPose.detectStart(video, gotPoses);
//   connections = bodyPose.getSkeleton();
// }

// function draw() {
//   image(video, 0, 0, width, height);

//   for (let i = 0; i < poses.length; i++) {
//     let pose = poses[i];
//     let nose = pose.nose;
//     if (nose.confidence > 0.2) {
//       fill(255,0,0);
//       textSize(200);
//       textAlign(CENTER, CENTER);
//       text("+",nose.x, nose.y);
//     }
//   }
//   for (let i = 0; i < poses.length; i++) {
//     let pose = poses[i];
//     let keypoints = pose.keypoints;
//     //console.log(keypoints);
//     for (let j = 0; j < connections.length; j++) {
//       fill(0, 255, 0);
//       //ellipse(keypoints[j].x, keypoints[j].y, 10);
//     }
//   }
// }

// function gotPoses(results) {
//   poses = results;
// }
