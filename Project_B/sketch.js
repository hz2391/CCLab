let cityselector1, cityselector2, cityselector3;
let img

function preload(){
  img = loadImage("assets/travel.jpg")
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  selector = createSelect();
  selector.position(10, 10);
  selector.option("New York");
  selector.option("Paris");
  selector.option("Seoul");
  selector.option("Rome");
}

function draw() {
  fill ("#401201")
  rect(0, 0, windowWidth/3, windowHeight);
  fill("#F2E8C9");
  rect(windowWidth/3, 0, windowWidth, windowHeight);
 

  strokeWeight (5);
  stroke(255);
  rect (1.7 * (windowWidth/3), 0, windowWidth, windowHeight);
  rect (2.40 * (windowWidth/3), 0, windowWidth, windowHeight);
  
  noStroke();
  fill(255);
  textFont ("Shadows Into Light");
  textSize (40);
  text ("NEXT STOP...", 50, 100);
  fill (0);
  text ("NEW YORK", 550, 100);
  text ("Seoul", 940, 100);
  text ("Rome", 1250, 100)
  
  textFont ("Playfair Display")
  fill (255)
  textSize (30);
  text ("Browse different locations", 50, 175)
  text ("to travel to and see what", 50, 225);
  text ("they have to offer.", 50, 275);

  image(img, 0, 325, 475, 320)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}