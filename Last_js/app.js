const title = document.querySelector("h1");
const text = document.querySelector("input");
const button = document.querySelector("button");

const form = document.querySelector("form");
const submitFn = function (event) {
  event.preventDefault();
};
form.addEventListener("submit", form);

//button 요소에게 클릭 이벤트가 발생했을 때.
// input안에 들어가 있는(사용자가 입력한) 값을 가져와서(event 객체에서 잡아오기) h1 글자로 바꿔주기

// 만약 input 안에 들어있는 값이 아무것도 없다면,
// h1은 "Defalut Title"로 변경하기.

//h1을 변경한 다음, input안에 들어가있는 값을 제거해야함.
//(다시 placeholder가 표시되어야 함.)

// const funC = () => {
//   if (text.value === "") {
//     title.textContent = "Defalut Title";
//   } else if (text.value !== "") {
//     text.value = title.textContent;
//   }
// };

// button.addEventListener("click", funC);
