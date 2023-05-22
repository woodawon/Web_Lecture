const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

if (localStorage.getItem("username") === null) {
  //form 태그 보여주기
  loginForm.classList.remove("hidden");

  loginForm.addEventListener("submit", (event) => {
    // const value = loginInput.value; 와 같음.
    const { value } = loginInput;
    event.preventDefault();
    console.log(value);

    // 유저가 id값을 입력한 경우, greeting에 글자 표시 & form 안 보이게 하기!
    greeting.innerHTML = `${value}님 환영합니다`;

    localStorage.setItem("username", value);

    greeting.classList.remove("hidden");
    loginForm.classList.add("hidden");
    //   if (loginInput.value === "") {
    //     alert("아이디를 입력하세요.");
    //   } else if (loginInput.value.length > 15) {
    //     alert("15자 미만으로 입력해주세요.");
    //   }
  });
} else {
  //h1 태그 보여주기
  greeting.innerHTML = `${localStorage.getItem("username")}님 환영합니다.`;
  greeting.classList.remove("hidden");
}
