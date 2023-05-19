// score = Number(prompt("성적을 입력하세요."));

// if (Number.isNaN(score)) {
//   console.log("ERROR");
// } else {
//   if (score >= 80) {
//     console.log("A");
//   } else if (score >= 60 && score < 80) {
//     console.log("B");
//   } else if (score >= 40 && score < 60) {
//     console.log("C");
//   } else {
//     console.log("F");
//   }
// }

// do {
//   user_pw = prompt("비밀번호 입력하기");
// } while (user_pw !== "1234");
// alert("로그인 성공.");

// var person1 = {
//   name: "Lee",
// };

// var person2 = {
//   name: "Lee",
// };

// console.log(person1 === person2); // false --> 두 개의 다른 주소에 있는 값을 비교함.
// console.log(person1.name === person2.name); // true --> 다른 주소 값이 아니라, "Lee" 라는 문자열끼리로 비교함.

// function add(a, b) {
//   let sum = a + b;
//   console.log(arguments); // arguments? : add()안의 값들 중 a,b 가 아닌 추가로 받아지는 값을 의미함.
//   return sum;
// }

// console.log(add(1, 2, 3));

// const plus = function (a, b, ...rest) {
//   // 함수 선언 --> const name = function() 로 작성하기!! 호이스팅 되지 않게 const로..
//   // rest? : a,b 즉, 지정한 인자 외의 나머지 받아진 값들을 묶어놔줌.
//   console.log(a, b);
//   console.log(rest);
// };

// plus(1, 2, 3, 4, 5);

// // =>(화살표 함수) 로 함수 선언
// const func = (a, b) => a * b;
// const solo = (a) => console.log(a);

// const arr = [1, 2].concat([3, 4]);
// console.log(arr);

// const arr1 = [...[1, 2], ...[2, 3]];
// console.log(arr1);

// const arr2 = [3, 4].slice();
// console.log(arr2);

// // 최대값 구하는 게 두 줄이면 끝난다니... 대박
// const arrs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.max(...arrs));

// const [one, two, three, four] = arr; // arr의 각각 4개의 값들의 변수명을 선언해주는 것.
// const [g, , h, m] = arr1; // g : [0], h : [2], k : [3]

// const [x, y, z = 100] = [1, 2]; // 전달 받은 배열이 부족하다면 기본값(z = 100) 사용.
// const [i = 10, j = 20, k = 30] = [1, 2, 3]; // 기본값이라는 건 해당 변수의 값이 undefined일 경우에만 사용하는 것이기 때문에 답은 1,2,3임.

const user = {
  firstName: "woo",
  lastName: "dawon",
};

const { firstName, lastName } = user;

console.log(firstName, lastName);
