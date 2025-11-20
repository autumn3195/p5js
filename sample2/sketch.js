function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  //얼굴형
  noStroke()
  fill(240, 200, 180);
  ellipse(300, 180, 185, 220);
  
  //귀
  noStroke()
  fill(240, 200, 180);
  arc(220, 180, 50, 60, radians(90), radians(315));
  
  noStroke()
  fill(240, 200, 180);
  arc(380, 180, 50, 60, radians(225), radians(90));
  
  //머리카락
  noStroke()
  fill(50, 0, 0);
  arc(275, 100, 160, 150, radians(135), radians(330));
  
  noStroke()
  fill(50, 0, 0);
  arc(325, 110, 160, 150, radians(225), radians(30));
  
  noStroke()
  fill(50, 0, 0);
  triangle(215, 150, 275, 150, 310, 70);
  
  noStroke()
  fill(50, 0, 0);
  triangle(392.5, 145, 325, 150, 290, 70);
  
  //눈
  noStroke()
  fill(255);
  ellipse(260, 170, 50, 25);
  
  noStroke()
  fill(255);
  ellipse(340, 170, 50, 25);
  
  noStroke()
  fill(50, 0, 0);
  ellipse(260, 170, 17.5, 22.5);
  
  noStroke()
  fill(50, 0, 0);
  ellipse(340, 170, 17.5, 22.5);
  
  //코
  stroke(0)
  strokeWeight(2);
  line(300, 180, 285, 215);
  
  stroke(0)
  strokeWeight(2);
  line(285, 215, 300, 215);
  
  //입
  stroke(0)
  strokeWeight(2);
  noFill();
  arc(300, 205, 100, 100, radians(30), radians(150));
  
  //목
  noStroke()
  fill(240, 200, 180);
  rect(270, 260, 60, 50);
  
  //옷1
  noStroke()
  fill(255);
  rect(270, 310, 60, 100);
  
  //목걸이
  stroke(127)
  strokeWeight(2);
  arc(300, 312.5, 62.5, 50, radians(0), radians(180));
  
  //옷2
  noStroke()
  fill(30, 30, 100);
  quad(130, 400, 200, 325, 275, 300, 300, 400);
  
  noStroke()
  fill(30, 30, 100);
  quad(480, 400, 400, 325, 325, 300, 300, 400);
}