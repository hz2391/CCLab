// Click mouse to begin interaction

// line ray inspiration from https://p5js.org/examples/math-sine-wave.html

let colors = ["#45858C", "#A0D9D9", "#D9C589", "#BF9765", "#A62626"]
let ring;
let diameter = 100;
let angle = 120
let waveheight = 100;
let repeat = 150.0;
let xchange;
let whvalues; 

function setup() {
  createCanvas(600, 500);
  background("#A9A097");
  ring = new conRing(width/2, height/2);
 xchange = (PI / repeat) * 30;
  whvalues = new Array(floor(width* 4/ 30));
}

function draw() {
  ring.update();
  ring.display();
  ray();
  displayray();
}

function ray() {
angle += 0.01
  // For every x value, calculate a y value with sine
let x = angle;
  for (let i = 0; i < whvalues.length; i++) {
    whvalues[i] = sin(x) * waveheight;
    x += xchange;
  }
}

function displayray() {
  noStroke();
  stroke ("#E1E1DF")  
  for (let x = 10; x < whvalues.length; x++) {
    line (x * 20, height + whvalues[x], 0, 0);
  }
}

class conRing {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = random (-5, 5)
    this.speedY = random (-5, 5)
    this.sin = sin (frameCount*2)
    this.cos = cos (frameCount/5)
  }
  
  update() {
    // circles will move out in a random direction at a random speed
    if (mouseIsPressed) {
    this.x += this.speedY * this.cos
    this.y += this.speedX * this.sin
      
       if (this.x < 0 || this.x > width) {
      this.x = this.speedX *= -1
    }
      if (this.x < 0 || this.y > height) {
      this.y = this.speedY *= -1
  }
    }
  }

//concentric circles
  display(){
    push();
    translate();
    noFill();
    strokeWeight (3)
    frameRate (10)
    stroke(random (colors));
    ellipse(this.x, this.y, diameter);
    ellipse(this.x, this.y, diameter + 50)
    ellipse(this.x, this.y, diameter + 100)
    ellipse (this.x, this.y, diameter + 150)
    ellipse(this.x, this.y, diameter + 200)
    pop();
}
}