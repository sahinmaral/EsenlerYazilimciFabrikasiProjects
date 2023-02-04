import {
  getCurrentQuestion,
  getAllQuestions,
  setCurrentQuestion,
  selectAnswer,
  closeModal,
  verifyAnswer,
  clearUsername,
} from "./script";

document
  .querySelector("#verifyAnswerModal .close-button")
  .addEventListener("click", () => closeModal("verifyAnswerModal"));
document
  .querySelectorAll(".verifyAnswerModal-buttons button")[0]
  .addEventListener("click", () => verifyAnswer());
document
  .querySelectorAll(".verifyAnswerModal-buttons button")[1]
  .addEventListener("click", () => closeModal("verifyAnswerModal"));

document.getElementById("quitGameButton").addEventListener("click", () => {
  clearUsername();
  window.location.href = "./index.html";
});

const questionAreaElement = document.querySelector("#questions-area h3");
const answer1Button = document.querySelector("#answerButton1");
const answer2Button = document.querySelector("#answerButton2");
const answer3Button = document.querySelector("#answerButton3");
const answer4Button = document.querySelector("#answerButton4");

answer1Button.addEventListener("click", (event) =>
selectAnswer(event.target.id.replace("Button", ""))
);
answer2Button.addEventListener("click", (event) =>
selectAnswer(event.target.id.replace("Button", ""))
);
answer3Button.addEventListener("click", (event) =>
selectAnswer(event.target.id.replace("Button", ""))
);
answer4Button.addEventListener("click", (event) =>
selectAnswer(event.target.id.replace("Button", ""))
);

let currentQuestion = getCurrentQuestion();

if (currentQuestion && currentQuestion.id !== 1) {
  questionAreaElement.innerText = currentQuestion.question;

  answer1Button.innerText = currentQuestion.answer1;
  answer2Button.innerText = currentQuestion.answer2;
  answer3Button.innerText = currentQuestion.answer3;
  answer4Button.innerText = currentQuestion.answer4;

} else {

  const firstQuestion = getAllQuestions()[0];
  setCurrentQuestion(firstQuestion);

  questionAreaElement.innerText = firstQuestion.question;

  answer1Button.innerText = firstQuestion.answer1;
  answer2Button.innerText = firstQuestion.answer2;
  answer3Button.innerText = firstQuestion.answer3;
  answer4Button.innerText = firstQuestion.answer4;

  document.title = `Question ${firstQuestion.id}`;
}
