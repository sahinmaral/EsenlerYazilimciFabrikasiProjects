import {
  closeModal,
  openModal,
  clearUsername,
  saveInitialUsername,
} from "./script.js";

document
  .querySelector("#homepage-startGame button")
  .addEventListener("click", () => {
    openModal('enterNameModal');
  });

  document
  .querySelector("#enterNameModal button[type=submit]")
  .addEventListener("click", () => {
    let name = document.querySelector("#enterNameModal input").value

    if(!name || name.length > 8){
      alert("Wrong")
    }else{
      closeModal('enterNameModal')
      saveInitialUsername(name)
      openModal('startGameModal')
    }
  });

document
  .querySelector("#startGameModal .close-button")
  .addEventListener("click", () => {
    closeModal('startGameModal');
    clearUsername();
  });

  document
  .querySelector("#enterNameModal .close-button")
  .addEventListener("click", () => {
    closeModal('enterNameModal');
    fetchAllQuestions()
  });

  document
  .querySelectorAll(".startGameModal-buttons button")[0]
  .addEventListener("click", () => {
    window.location.href = './questions.html'
  });

  document
  .querySelectorAll(".startGameModal-buttons button")[1]
  .addEventListener("click", () => {
    closeModal('startGameModal');
    clearUsername();
  });
