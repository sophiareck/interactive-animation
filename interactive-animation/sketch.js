var animation = false;
var size = 50;
var direction = 0;
var colorPalette = 1;
var r = 0;
var g = 0;
var b = 0;
var beginning = true;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  if (animation == false) {
    noLoop();
    if (beginning == true) {
      fill(255);
      textAlign(CENTER);
      textSize(25);
      text("interactive animated color palettes", width / 2, 100);
      textSize(20);
      text("-press enter to toggle animation on/off", width / 2, 200);
      text("-press shift to toggle between horizontal \n and vertical movement", width / 2, 250);
      text("-press alt to change color palette", width / 2, 325);
      text("-press up and down arrow keys \n to increase/decrease size", width / 2, 375);
      beginning = false;
    }
  } else {
    loop();
  }
  range = 200;
  //cycles fill colors from pink to purple
  if (colorPalette == 1) {
    r = ((frameCount % range) * 2);
    g = (frameCount % range);
    b = ((frameCount % range) * 4);
  } else if (colorPalette == 2) {
    r = (frameCount % range);
    g = (frameCount % range) * 6;
    b = (frameCount % range);
  } else if (colorPalette == 3) {
    r = (frameCount % range);
    g = (frameCount % range) * 2;
    b = (frameCount % range) *6;
  }
  fill(r, g, b);
  noStroke();

  if (direction % 2 == 0) { //if direction is even go horizontal
    for (let i = 0; i < 7; i++) {
      ellipse(frameCount % 500, (90 * i), size, size + (5 * i) * sin(frameCount / 4));
    }
  } else { //if direction is odd go vertical
    for (let i = 0; i < 7; i++) {
      ellipse((80 * i), frameCount % 500, size + (5 * i) * sin(frameCount / 2), size);
    }
  }
}

function keyPressed() {
  if (keyCode == ENTER) { //pause and play animation
    animation = !animation;
    if (animation == false) {
      noLoop();
    } else {
      loop();
    }
  }
  if (keyCode == 38) { //up arrow increase size
    if (size <= (height - 20)) {
      size += 20;
    }
  }
  if (keyCode == 40) { //down arrow decrease size
    if (size >= 40) {
      size -= 20;
    }
  }
  if (keyCode == SHIFT) { //change direction
    direction++;
  }
  if (keyCode == ALT) {
    if (colorPalette == 3) {
      colorPalette = 1;
    } else {
      colorPalette++;
    }
  }
}
