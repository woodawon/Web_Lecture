score = Number(prompt("성적을 입력하세요."));

if (Number.isNaN(score)) {
  console.log("ERROR");
} else {
  if (score >= 80) {
    console.log("A");
  } else if (score >= 60 && score < 80) {
    console.log("B");
  } else if (score >= 40 && score < 60) {
    console.log("C");
  } else {
    console.log("F");
  }
}
