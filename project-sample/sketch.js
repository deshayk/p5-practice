function setup() { //setup canvas and create a new p5.js sketch
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
}

function windowResized() { //resizes canvas to window size
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(220);
  // function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(55);
  }
  rect(mouseX, mouseY, 80, 80);
}