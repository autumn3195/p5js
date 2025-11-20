let diam = 10;

let redColor = 255;
let greenColor = 0;
let blueColor = 0;

let redColor2 = 0;
let greenColor2 = 0;
let blueColor2 = 255;

let redColor3 = 0;
let greenColor3 = 255;
let blueColor3 = 0;

let angle = 0;
let rotationSpeed = 0.05;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(225);
  
  // 색상 변경
  if (redColor > 0) {
    redColor -=1;
  }
      if (greenColor > 0) {
        greenColor -=1;
      }
          if (blueColor > 0) {
            blueColor -=1;
          }
  else {
    redColor = random(0, 255);
    greenColor = random(0, 255);
    blueColor = random(0, 255);
  }
  
  if (redColor2 > 0) {
    redColor2 -=1;
  }
      if (greenColor2 > 0) {
        greenColor2 -=1;
      }
          if (blueColor2 > 0) {
            blueColor2 -=1;
          }
  else {
    redColor2 = random(0, 255);
    greenColor2 = random(0, 255);
    blueColor2 = random(0, 255);
  }
  
  if (redColor3 > 0) {
    redColor3 -=1;
  }
      if (greenColor3 > 0) {
        greenColor3 -=1;
      }
          if (blueColor3 > 0) {
            blueColor3 -=1;
          }
  else {
    redColor3 = random(0, 255);
    greenColor3 = random(0, 255);
    blueColor3 = random(0, 255);
  }
  
  //상단
  fill(250);
  strokeWeight(5);
  rect(2.5, 2.5, 125, 60);
  
  strokeWeight(5);
  rect(127.5, 2.5, 250, 60);
  
  fill(redColor, greenColor, blueColor);
  strokeWeight(5);
  rect(377.5, 2.5, 162.5, 60);
  
  //좌측
  fill(250);
  strokeWeight(5);
  rect(2.5, 62.5, 75, 125);
  
  fill(redColor2, greenColor2, blueColor2);
  strokeWeight(5);
  rect(2.5, 187.5, 75, 210);
  
  //하단
  fill(redColor3, greenColor3, blueColor3);
  strokeWeight(5);
  square(77.5, 287.5, 110);
  
  //크기 변화
  fill(0);
  strokeWeight(5);
  circle(132.5, 342.5, diam);
  diam += 1;
  diam %= 100;
  
  fill(redColor, greenColor, blueColor);
  strokeWeight(5);
  rect(187.5, 287.5, 117.5, 55);
  
  fill(redColor2, greenColor2, blueColor2);
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
  
  fill(redColor3, greenColor3, blueColor3);
  strokeWeight(5);
  rect(540, 152.5, 57.5, 245);
  
  //중앙
  fill(redColor, greenColor, blueColor);
  strokeWeight(5);
  square(77.5, 62.5, 227.5);
  
  fill(255);
  strokeWeight(5);
  triangle(305, 67.5, 305, 290, 80, 290);
  
  fill(redColor2, greenColor2, blueColor2);
  strokeWeight(5);
  square(305, 62.5, 175);
  
  fill(redColor, greenColor, blueColor);
  strokeWeight(5);
  square(305, 222.5, 175);
  
  fill(redColor3, greenColor3, blueColor3);
  strokeWeight(5);
  triangle(305, 222.5, 475, 222.5, 305, 395);
  
  //회전
  if (frameCount % 60 == 0) {
    rotationSpeed += 0.01;
  }
  
  fill(255);
  translate(395, 137.5);
  rotate(angle);
  angle += rotationSpeed;
  rect(0, 0, 50, 50);
}

//저장
function keyPressed() {
  if (key === 's') {
      saveGif('mySketch', 10);
  }
}