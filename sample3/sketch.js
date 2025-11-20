let bgColor;
let clothedColor;
let lefteye_x;
let lefteye_y;
let righteye_x;
let righteye_y;

function setup() {
  createCanvas(600, 400);
  bgColor = color(220);
  clothedColor = color(30, 30, 100);
  lefteye_x = 260;
  lefteye_y = 170;
  righteye_x = 340;
  righteye_y = 170;
}

function draw() {
  background(bgColor);
  
  //얼굴형
  noStroke();
  fill(240, 200, 180);
  ellipse(300, 180, 185, 220);
  
  //귀
  noStroke();
  fill(240, 200, 180);
  arc(220, 180, 50, 60, radians(90), radians(315));
  
  noStroke();
  fill(240, 200, 180);
  arc(380, 180, 50, 60, radians(225), radians(90));
  
  //머리카락
  noStroke();
  fill(50, 0, 0);
  arc(275, 100, 160, 150, radians(135), radians(330));
  
  noStroke();
  fill(50, 0, 0);
  arc(325, 110, 160, 150, radians(225), radians(30));
  
  noStroke();
  fill(50, 0, 0);
  triangle(215, 150, 275, 150, 310, 70);
  
  noStroke();
  fill(50, 0, 0);
  triangle(392.5, 145, 325, 150, 290, 70);
  
  //눈
  noStroke();
  fill(255);
  ellipse(260, 170, 50, 25);
  
  noStroke();
  fill(255);
  ellipse(340, 170, 50, 25);
  
  //눈동자
  noStroke();
  fill(50, 0, 0);
  ellipse(lefteye_x, lefteye_y, 17.5, 22.5);
  
  noStroke();
  fill(50, 0, 0);
  ellipse(righteye_x, righteye_y, 17.5, 22.5);
  
  //코
  stroke(0);
  strokeWeight(2);
  line(300, 180, 285, 215);
  
  stroke(0);
  strokeWeight(2);
  line(285, 215, 300, 215);
  
  //입
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(300, 205, 100, 100, radians(30), radians(150));
  
  //목
  noStroke();
  fill(240, 200, 180);
  rect(270, 260, 60, 50);
  
  //옷1
  noStroke();
  fill(255);
  rect(270, 310, 60, 100);
  
  //목걸이
  stroke(127);
  strokeWeight(2);
  arc(300, 312.5, 62.5, 50, radians(0), radians(180));
  
  //옷2
  noStroke();
  fill(clothedColor);
  quad(130, 400, 200, 325, 275, 300, 300, 400);
  
  noStroke();
  fill(clothedColor);
  quad(480, 400, 400, 325, 325, 300, 300, 400);
}

function mousePressed() {
  // random() 함수를 사용하여 0부터 255 사이의 랜덤한 RGB 값을 생성합니다.
  bgColor = color(random(255), random(255), random(255));
  clothedColor = color(random(255), random(255), random(255));
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    lefteye_x -= 10; // 왼쪽 화살표 키를 누르면 왼쪽으로 이동
    righteye_x -= 10;
  } else if (keyCode === RIGHT_ARROW) {
    lefteye_x += 10; // 오른쪽 화살표 키를 누르면 오른쪽으로 이동
    righteye_x += 10;
  } else if (keyCode === UP_ARROW) {
    lefteye_y -= 10; // 위쪽 화살표 키를 누르면 위로 이동
    righteye_y -= 10;
  } else if (keyCode === DOWN_ARROW) {
    lefteye_y += 10; // 아래쪽 화살표 키를 누르면 아래로 이동
    righteye_y += 10;
  } else if (key === 's') {
    saveGif('mySketch', 10);
  }
}