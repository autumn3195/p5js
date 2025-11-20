function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(225);
  
  //상단
  fill(250);
  strokeWeight(5);
  rect(2.5, 2.5, 125, 60);
  
  strokeWeight(5);
  rect(127.5, 2.5, 250, 60);
  
  fill('#FFFF66');
  strokeWeight(5);
  rect(377.5, 2.5, 162.5, 60);
  
  //좌측
  fill(250);
  strokeWeight(5);
  rect(2.5, 62.5, 75, 125);
  
  fill('#FFFF66');
  strokeWeight(5);
  rect(2.5, 187.5, 75, 210);
  
  //하단
  fill(25);
  strokeWeight(5);
  square(77.5, 287.5, 110);
  
  fill(120);
  strokeWeight(5);
  circle(132.5, 342.5, 100);
  
  fill(180);
  strokeWeight(5);
  rect(187.5, 287.5, 117.5, 55);
  
  strokeWeight(5);
  rect(187.5, 342.5, 117.5, 55);
  
  //우측
  fill(250);
  strokeWeight(5);
  rect(480, 62.5, 60, 245);

  strokeWeight(5);
  rect(480, 307.5, 60, 90);
  
  strokeWeight(5);
  rect(540, 2.5, 57.5, 150);
  
  fill('#FF6666');
  strokeWeight(5);
  rect(540, 152.5, 57.5, 245);
  
  //중앙
  fill('#FF6666');
  strokeWeight(5);
  square(77.5, 62.5, 227.5);
  
  fill(250);
  strokeWeight(5);
  triangle(305, 67.5, 305, 290, 82.5, 285);
  
  fill('#FFFF66');
  strokeWeight(5);
  square(305, 62.5, 175);
  
  fill('#6666FF');
  strokeWeight(5);
  square(305, 222.5, 175);
  
  fill(0);
  strokeWeight(5);
  triangle(305, 222.5, 475, 222.5, 305, 395);
}