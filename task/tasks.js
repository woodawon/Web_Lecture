const cat = document.querySelector("#cat");

const clickImg = function () {
  alert("TaskSite에 방문해 주셔서 감사합니다.");
  const age = prompt("당신은 몇 살입니까?");
  if (age <= 19) {
    alert("환영합니다. 수업 시간표를 확인해주세요.");
  } else {
    alert("여긴 학생 수업 시간표 확인 사이트입니다.");
  }
};

cat.addEventListener("click", clickImg);
