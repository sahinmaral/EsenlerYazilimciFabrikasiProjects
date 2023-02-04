import { getUser } from "./script";

const user = getUser();

const usernameAreaElement = document.getElementById("usernameArea");
const scoreAreaElement = document.getElementById("scoreArea");

const refreshGameButton = document.getElementById("homepage-startGame");
refreshGameButton.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "./index.html";
});

if (user.score < 4) {
  usernameAreaElement.innerHTML = `You lost ${user.name}`;
  scoreAreaElement.innerHTML = `Your score is ${user.score}`;
} else {
  usernameAreaElement.innerHTML = `You won ${user.name}`;
  scoreAreaElement.innerHTML = `Your score is ${user.score}`;
}
