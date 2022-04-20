function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(13, 0, 7);

  if (keyIsPressed) {
    strokeWeight(5);
  } else {
    strokeWeight(10);
  }
  stroke(115, 78, 32);

  let x1 = 0;
  let x2 = 400;

  line(x1, 150, x2, 300);
  stroke(140, 105, 39);
  line(x1, 200, x2, 50);
  line(x1, 350, x2, 30);
  stroke(217, 189, 106);
  line(x1, 50, x2, 130);
  line(x1, 250, x2, 240);

  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
    print(mouseX + "->" + mouseY);
  } else {
    noStroke();
    fill(115, 78, 32);
    circle(mouseX, mouseY, 20);
  }
}
