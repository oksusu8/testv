let buttonX, buttonY;

let video;

let menu, flip;
let shutterBtn;


function preload() {
  menu = loadImage("menu.png");
  flip = loadImage("flip.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  buttonX = width / 2;
  buttonY = height / 2;
  
  video = createCapture(VIDEO);
  video.size(width, height*0.7);
  video.hide();
  
  layoutDraw();
  // rectMode 함수를 사용하여 사각형 모드를 CENTER로 설정
  rectMode(CENTER);
  
  
  captureBtn()
  shutterBtn = createButton('');
  shutterBtn.class('shutterBtn');
  shutterBtn.position(buttonX-(height*0.09)/2, height*0.91-(height*0.09)/2);
  shutterBtn.size(height*0.09, height*0.09);


  
}

function draw() {
  image(video, 0, height*0.08);
  image(menu, width*0.03, height*0.03, width*0.06, height*0.04);
  image(flip, width*0.88, height*0.03, width*0.06, height*0.04);
  
  //image(menu, width*0.03, height*0.03, height*0.08, height*0.04);
  //image(flip, width*0.94, height*0.03, height*0.08, height*0.04);
}


function layoutDraw() {
  // 상단 레이아웃 박스
  fill(255);
  noStroke();
  rect(0, 0, width, height*0.08);
  
  fill(0);
  noStroke();
  rect(0, height*0.78, width, height*0.22);
}

function captureBtn() {
  fill(255);
  noStroke();
  circle(buttonX, height*0.91, height*0.1);

}



function capture() {
  background(255);
}


