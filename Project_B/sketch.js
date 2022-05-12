let sel
let c
let mySound
let img, img2, img3
let NYim = [];
let numofNYimages = 5
let Seoulim = [];
let numSeoulim = 5
let RomeImages = [];
let numofRome = 4

function preload(){
  mySound = loadSound ("assets/noise.mp3")
  // train icon 
  // <a target="_blank" href="https://icons8.com/icon/61959/maglev-vehicle">Maglev Vehicle</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  img = loadImage("assets/train.png");
  // <a target="_blank" href="https://icons8.com/icon/104767/travel-signpost">Travel Signpost</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  img2 = loadImage("assets/signpost.png");
  // <a target="_blank" href="https://icons8.com/icon/9898/travel-visa">Travel Visa</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
  img3 = loadImage("assets/visa.png");

}

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
      translate(230, 50);
      image(NYim[i], windowWidth/100, windowHeight/8);
    }

  } else if (item == "Seoul"){
    c = color ("#BABDBF")
    fill (c)

    for (let i = 0; i<numSeoulim; i++) {
      Seoulim[i].resize(width/7, height/3);
      translate(230, 50);
      image(Seoulim[i], windowWidth/100, windowHeight/8)
    }
  } else if (item == "Rome"){
    c = color ("#BABDBF");
    fill (c);

    for (let i=0; i<numofRome; i++){
      RomeImages[i].resize(width/5.5, height/4);
      translate(275, 50);
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

  push()
  image (img, windowWidth/2, windowHeight/10)
  image (img, windowWidth/2, 0.90 * windowHeight)
  image (img2, windowWidth/2.5, windowHeight/9)
  image (img2, windowWidth/2.5, 0.90 * windowHeight)
  image (img3, windowWidth/1.5, windowHeight/10)
  image (img3, windowWidth/1.5, 0.90 * windowHeight)
  translate (50, 0)
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}