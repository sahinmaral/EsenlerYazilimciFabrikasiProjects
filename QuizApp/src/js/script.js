import questions from "../questions.json";

const answeredQuestions = !localStorage.getItem("answeredQuestions")
  ? []
  : JSON.parse(localStorage.getItem("answeredQuestions"));

let currentAnswer = null;

export const closeModal = (modalElementId) => {
  const modalElement = document.getElementById(modalElementId);

  modalElement.classList.add("invisible");
  modalElement.classList.remove("visible");
};

export const openModal = (modalElementId) => {
  const modalElement = document.getElementById(modalElementId);

  modalElement.classList.add("visible");
  modalElement.classList.remove("invisible");
};

export const saveInitialUsername = (name) => {
  localStorage.setItem("user", JSON.stringify({ name, score: 0 }));

  let user = localStorage.getItem("user");

  if (user) {
    user = JSON.parse(user);
    document.getElementById(
      "startGameModal-callingName"
    ).innerText = `So ${user.name}`;
  }
};

export const clearUsername = () => {
  localStorage.removeItem("user");
};

export const getAllQuestions = () => {
  return questions;
};

export const setCurrentQuestion = (currentQuestion) => {
  localStorage.setItem("currentQuestion", JSON.stringify({
    id : currentQuestion.id,
    question : currentQuestion.question,
    answer1 : currentQuestion.answer1,
    answer2 : currentQuestion.answer2,
    answer3 : currentQuestion.answer3,
    answer4 : currentQuestion.answer4,
  }));

};

export const getCurrentQuestion = () => {
  return JSON.parse(localStorage.getItem("currentQuestion"));
};

export const setCurrentAnswer = (answer) => {
  currentAnswer = answer;
};

export const getCurrentAnswer = () => {
  return currentAnswer;
};

export const getAnsweredQuestions = () => {
  return answeredQuestions;
};

export const pushQuestionToAnsweredQuestions = (currentQuestion) => {
  answeredQuestions.push({
    id : currentQuestion.id,
    question : currentQuestion.question,
    answer1 : currentQuestion.answer1,
    answer2 : currentQuestion.answer2,
    answer3 : currentQuestion.answer3,
    answer4 : currentQuestion.answer4,
    isCorrect: currentQuestion.isCorrect
  });
  localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));
};

export const selectAnswer = (answer) => {
  openModal("verifyAnswerModal");
  setCurrentAnswer(answer);
};

export const verifyAnswer = () => {

  if (getAllQuestions().find((question) => question.id === getCurrentQuestion().id).correctAnswer === getCurrentAnswer()) {
    pushQuestionToAnsweredQuestions({
      ...getCurrentQuestion(),
      isCorrect: true,
    });
    if (
      getAllQuestions()[getAllQuestions().length - 1].id !==
      getCurrentQuestion().id
    ) {
      setCurrentQuestion(
        getAllQuestions().find(
          (question) => question.id === getCurrentQuestion().id + 1
        )
      );

      window.location.href = "./questions.html";
    } else {
      setScore();
    }
  } else {
    pushQuestionToAnsweredQuestions({
      ...getCurrentQuestion(),
      isCorrect: false,
    });
    if (
      getAllQuestions()[getAllQuestions().length - 1].id !==
      getCurrentQuestion().id
    ) {
      setCurrentQuestion(
        getAllQuestions().find(
          (question) => question.id === getCurrentQuestion().id + 1
        )
      );

      window.location.href = "./questions.html";
    } else {
      setScore();
    }
  }
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const setScore = () => {
  const correctAnsweredQuestionCount = getAnsweredQuestions().filter(
    (question) => question.isCorrect === true
  ).length;

  const user = JSON.parse(localStorage.getItem("user"));
  user.score = correctAnsweredQuestionCount;

  localStorage.setItem("user", JSON.stringify(user));

  window.location.href = "./scoreboard.html";
};
