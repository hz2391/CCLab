let sel
let c
let NYim = [];
let numofNYimages = 10
let Seoulim = [];
let numSeoulim = 11
let RomeImages = [];
let numofRome = 10

function setup(){
  createCanvas(windowWidth, windowHeight);
  background ("#BABDBF")

  for (let i=0; i<numofNYimages; i++){
    NYim[i] = loadImage("NY/" +i+ "NY.jpg")
  }

  for (let i = 0; i<numSeoulim; i++){
    Seoulim[i] = loadImage("Seoul/" +i+ "Seoul.jpg")
  }

  for (let i=0; i<numofRome; i++){
    RomeImages[i] = loadImage("Rome/" +i+ "Rome.jpg")
  }

  sel = createSelect();
  sel.position(0, 10);
  sel.option ("Select City")
  sel.option("New York");
  sel.option("Seoul");
  sel.option("Rome");
  sel.selected ("Select City");

  sel.changed (mySelectEvent);
}

function mySelectEvent() {
  let item = sel.value();

  if (item == "New York") {
    c = color ("#BABDBF");
    fill (c);

    for (let i = 0; i < numofNYimages; i++){
      NYim[i].resize(width/7, height/3);
      translate(220, 0);
      image(NYim[i], windowWidth/100, windowHeight/8);
    }

  } else if (item == "Seoul"){
    c = color ("#BABDBF")
    fill (c)

    for (let i = 0; i<numSeoulim; i++) {
      Seoulim[i].resize(width/7, height/3);
      translate(220, 0);
      image(Seoulim[i], windowWidth/100, windowHeight/8)
    }
  } else if (item == "Rome"){
    c = color ("#BABDBF");
    fill (c);

    for (let i=0; i<numofRome; i++){
      RomeImages[i].resize(width/5.5, height/4);
      translate(275, 0);
      image(RomeImages[i], windowWidth/100, windowHeight/8);
    }
  }
  else {
    c = color("#BABDBF")
  }
}

function keyPressed(){
  clear();
  background ("#BABDBF")
  noStroke();
  fill (0);
  textFont ("Playfair Display");
  textSize (20);
  text ("Canvas is cleared. You can select another city in the upper left hand corner.", windowWidth/3, windowHeight/2); 
  pop();
}

function draw() {
  fill ("#732B1A")
  rect(0, 0, windowWidth, windowHeight/10);

  push();
  noStroke();
  fill(255);
  textFont ("Shadows Into Light")
  textSize (40);
  text ("CITIES OF THE WORLD", windowWidth/2.5, windowHeight/15);
  fill (255);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}