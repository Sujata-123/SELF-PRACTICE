const num1 = Math.ceil(Math.random() * 10);

const num2 = Math.ceil(Math.random() * 10);

const questionEle = (document.getElementById(
  "question"
).innerText = `What is ${num1} multiply by ${num2} ?`);

const inpEle = document.getElementById("input");
const formEle = document.getElementById("form");
const scoreEle = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
  score = 0;
}
const correctAns = num1 * num2;

formEle.addEventListener("submit", () => {
  const userAns = +inpEle.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

scoreEle.innerText = `score: ${score}`;
