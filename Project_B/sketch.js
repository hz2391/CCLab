let sel
let c
let NYim = [];
let numofNYimages = 10
let Seoulim = [];
let numSeoulim = 11
let RomeImages = [];
let numofRome = 10
let img

function preload(){
  img = loadImage("assets/travel.jpg")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background ("#F2E8C9")

  c = color ("#F2E8C9")

  for (let i=0; i<numofNYimages; i++){
    NYim[i] = loadImage("NYimages/" +i+ "NY.jpg")
  }

  for (let i = 0; i<numSeoulim; i++){
    Seoulim[i] = loadImage("Seoul/" +i+ "S.jpg")
  }

  for (let i=0; i<numofRome; i++){
    RomeImages[i] = loadImage("RomeIm/" +i+ "Rome.jpg")
  }

  sel = createSelect();
  sel.position(windowWidth/3, 10);
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
    c = color ("#F2EDD0");
    fill (c);

    for (let i = 0; i < numofNYimages; i++){
      NYim[i].resize(width/4, height/3);
      translate(random(-100, 5), random (100, -5));
      rotate(random(-5))
      image(NYim[i], windowWidth/2, height < windowHeight/4);
    }

  } else if (item == "Seoul"){
    c = color ("#D9B29C")
    fill (c)

    for (let i = 0; i<numSeoulim; i++) {
      Seoulim[i].resize(width/4, height/3);
      translate(random(-100, 5), random (100, -5));
      rotate(random(5));
      image(Seoulim[i], windowWidth/2, height < windowHeight/4)
    }
  } else if (item == "Rome"){
    c = color ("#F2E8C9");
    fill (c);

    for (let i=0; i<numofRome; i++){
      RomeImages[i].resize(width/4, height/3);
      translate(random(-100, 5), random (100, -5));
      rotate(random(-5));
      image(RomeImages[i], windowWidth/2, height < windowHeight/4);
    }
  }
  else {
    c = color("#F2E8C9")
  }
}

function draw() {
  fill ("#401201")
  rect(0, 0, windowWidth/3, windowHeight);
  
  
  noStroke();
  fill(255);
  textFont ("Shadows Into Light");
  textSize (40);
  text ("NEXT STOP...", 50, 100);
  fill (0);
  
  textFont ("Playfair Display")
  fill (255)
  textSize (30);
  text ("Select a location", 50, 175)
  text ("to see various photos", 50, 225);
  text ("of the city.", 50, 275);
  image (img, 0, 325, 475, 320)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}