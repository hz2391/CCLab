/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
  
*/
let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);
  // ...except to adjust the dancer's name on the next line:
  dancer = new HelenDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class HelenDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:
  }
  update() {
    this.sin = sin(frameCount / 2);
    this.cos = cos(frameCount / 2);
    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer here ⬇️

    // head
    push();
    strokeWeight(3);
    stroke("#D879F2");
    noFill();
    circle(0, -50, 25);
    circle(-4, -53, 2);
    circle(4, -53, 2);
    pop();

    //body
    push();
    noFill();
    strokeWeight(3);
    stroke("#FC05FC");
    rect(-12, -37 + this.sin, 25 + this.cos, 50 + this.sin);
    stroke ("#10F0C6")
    circle(0, 0, 20 + this.cos);
    stroke ("#5BD904")
    circle(0, -12, 20 + this.cos);
    stroke ("#10F0C6")
    circle(0, -25, 20 + this.cos);

    //legs
    push();
    strokeWeight(3);
    stroke("#D879F2");
    line(-5, 15 + this.sin, -5 + this.cos, 40 + this.sin);
    //left
    line(5, 15 + this.cos, 5 + this.sin, 40 + this.cos);

    // ⬆️ draw your dancer here ⬆️

    // ******** //
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too,
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes();

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 

*/
