console.log("hi hi");

var age = 10;
var str = "wow";
var height = 158.8;
var flag = false;

// var : 전역함수 개념이고, 자료형 선언 안해도 알아서 판단해줌. => 안 좋음!

let strawberry = 10;
let cookie = "delicious";

// let : 수정 가능

const exnum = 100;
const exstr = "holy";

// const : 선언한 변수라면 수정 불가능
// const를 기본 자료형으로 매번 사용해주고, 수정 필요하면 let 사용하기.

const user = {
  name: "dawon",
  age: 18,
  likes: ["cookie", "animal", "people"],
}; // key : value

user[exstr] = "yolo";

// 값에 참조할 수 있는 2가지 유형~~
console.log(user.name);
console.log(user["name"]);

console.log(user.age);
console.log(user.likes);
console.log(user);

delete user.age;
delete user.hahaha; // 존재하지 않는 키값을 지우려고 해도 에러 안남...

const user_age = Number(prompt("what's your age?"));
console.log("next year.." + (user_age + 1) + " years old.");
