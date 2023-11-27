function setup() {
  createCanvas(400, 400);

  // createButton 함수를 사용하여 버튼 생성
  let button = createButton('Commit');
  button.position(10, 10); // 버튼의 위치 설정
  button.mousePressed(changeBackgroundColor); // 버튼 클릭 시 실행할 함수 지정
}

function draw() {
  // 여기에 그림 그리기 코드 추가
}

function changeBackgroundColor() {
  // 배경 색상을 무작위로 변경
  background(random(255), random(255), random(255));
}
