// getElementByTagName: 태그에 해당되는 모든 요소들을 배열로 반환.
//const title = document.getElementsByTagName("h1"); // html collection : 배열로 값들 반환.

// const title = document.getElementById("title");
// const wrapper = document.getElementsByClassName("wrapper");
// console.log(wrapper);

// // 태그는 태그이름으로, id는 #id로, 클래스는 .class로 접근함.
// // => css 선택자 방색으로 요소를 가져올 수 있는 방식.
// const t1 = document.querySelector(".wrapper #title");
// t1.innerHTML = "Good";
// t1.classList.add("textBlue");
// // t1.style.backgroundColor;
// // t1.style[background - Color];
// console.log(t1);

// const t2 = document.querySelectorAll("h1");
// console.log(t2);

const newP = document.createElement("p"); // p 생성
newP.innerHTML = "wow"; // text 추가
newP.classList.add("textBlue"); // css 추가

const wrapperDiv = document.querySelector(".wrapper"); // wrapper 클래스 가져옴
wrapperDiv.appendChild(newP); // wrapper클래스에 p 넣기

//이벤트 처리
const clickFn = function () {
  const age = prompt("나이?");
  alert(age);
};

// // newP.addEventListener("click", clickFn);
// newP.onclick = clickFn;

const clickText = document.querySelector("#clickText");
clickText.addEventListener("click", clickFn);
