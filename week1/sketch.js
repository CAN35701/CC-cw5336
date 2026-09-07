// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!

const quotes = [
  { text: "the practice of making art with code", source: "Andrew" },
  { text: "a school of thought", source: "Tim" },
  { text: "a new interdisciplinary art form", source: "Ahmad" },
  { text: "about experimentation, not functionality", source: "Maura" },
  { text: "about free exploration", source: "Patrik" },
  { text: "a set of software platforms", source: "Axelle" },
  { text: "suggesting programming visuals is always a creative activity", source: "Régis" },
  { text: "the intersection of art and technology", source: "Javier" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable that holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Seed with millis() so each page load gives a different quote.
  randomSeed(millis());
  textSize(32);
  fill(50, 0, 255);
  // calls the function to pick a quote
  pickQuote();
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(random(quotes.length))];
}

function draw() {
  background(255, 255, 200); // set the background color
  drawQuote();  // draw the quote on screen
}

function drawQuote() {   // draw text
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textStyle(BOLDITALIC);
  text("<" + current.text + ">", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}