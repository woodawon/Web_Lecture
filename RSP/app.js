//유저가 가위,바위,보 중 하나를 클릭 시 게임 실행하기
// 컴퓨터는 랜덤으로 가위,바위,보 중 하나를 선택함.
// 유저가 이긴 경우 result 클래스 안의 글자를 유저 승리! 라고 바꾸기
// 비기면 무승부!
// 컴퓨터가 이긴 경우 컴퓨터 승리! 라고 하기

let comResult = document.querySelector("#coms");
let userResult = document.querySelector("#users");
let result = document.querySelector(".result");

function show(com, user, results) {
  comResult.innerHTML = com;
  userResult.innerHTML = user;
  result.innerHTML = results;
}

function play(com, user) {
  let results = "";
  if (user === com) {
    results = "무승부!";
  } else {
    switch (user + com) {
      case "가위보":
      case "보바위":
      case "바위가위":
        results = "유저 승리!";
        break;
      case "가위바위":
      case "바위보":
      case "보가위":
        results = "컴퓨터 승리!";
        break;
    }
  }

  show(com, user, results);
}

function game(event) {
  //유저가 클릭한 버튼 받아오기
  //랜덤한 컴퓨터 숫자 생성
  // 가위바위보 결과 연산
  //결과 ->  화면에 출력
  const user = event.target.innerText; // button 안의 text 값을 받아오기 위해 target.innerText 로 한거임.
  const cases = ["가위", "바위", "보"];
  let com;
  com = cases[parseInt(Math.floor(Math.random() * 3))];

  play(com, user);

  // let result = document.querySelector(".result");
  //   if (user === "가위" && com === "바위") {
  //     result.innerText = "컴퓨터 승리!";
  //   } else if (user === "가위" && com === "보") {
  //     result.innerText = "유저 승리!";
  //   } else if (user === "바위" && com === "가위") {
  //     result.innerText = "유저 승리!";
  //   } else if (user === "바위" && com === "보") {
  //     result.innerText = "컴퓨터 승리!";
  //   } else if (user === "보" && com === "가위") {
  //     result.innerText = "컴퓨터 승리!";
  //   } else if (user === "보" && com === "바위") {
  //     result.innerText = "유저 승리!";
  //   } else if (user === com) {
  //     result.innerText = "무승부!";
  //   }
}

const buttons = document.querySelectorAll("button");
// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", game);
// }

buttons.forEach((button) => {
  button.addEventListener("click", game);
});
