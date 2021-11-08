document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function showAndHideBlueAlert() {
  const blueAlert = document.getElementById("blue-alert");

  blueAlert.classList.remove("hide");
  blueAlert.classList.add("show");
  blueAlert.classList.add("showAlert");
  setTimeout(function () {
    blueAlert.classList.add("hide");
    blueAlert.classList.remove("show");
  }, 3000);

  document
    .getElementById("close-button--blue")
    .addEventListener("click", closeAlerts);

  function closeAlerts() {
    blueAlert.classList.add("hide");
    blueAlert.classList.remove("show");
  }
}

function showAndHideRedAlert() {
  const redAlert = document.getElementById("red-alert");

  redAlert.classList.remove("hide");
  redAlert.classList.add("show");
  redAlert.classList.add("showAlert");
  setTimeout(function () {
    redAlert.classList.add("hide");
    redAlert.classList.remove("show");
  }, 2800);

  document
    .getElementById("close-button--red")
    .addEventListener("click", closeAlerts);

  function closeAlerts() {
    redAlert.classList.add("hide");
    redAlert.classList.remove("show");
  }
}

let secretNumber = parseInt(Math.random() * 11);

let congratulationsPopup = document.querySelector(".content__congratulations");
let failedPopup = document.querySelector(".content__failed");
let secretNumberResult = document.getElementById("secret-number");
let blueAlertText = document.getElementById("blue-alert-message");
let redAlertText = document.getElementById("red-alert-message");

function guessing() {
  const inputValue = parseInt(document.getElementById("input").value);
  document.getElementById("input").value = "";

  let attemptsInput = document.querySelector(".attempts-number");
  attemptsInput.value = parseInt(attemptsInput.value) - 1;

  if (inputValue == secretNumber) {
    congratulationsPopup.classList.add("active");
    start();
  } else if (inputValue > 10 || inputValue < 0) {
    redAlertText.innerHTML =
      "Alerta: Você deve digitar somente números de 0 a 10.";
    showAndHideRedAlert();
  } else if (attemptsInput.value == 0) {
    secretNumberResult.innerHTML = `Parece que todas as suas chances foram esgotadas 😞. Mas não desista!!! O número era ${secretNumber}.`;
    failedPopup.classList.add("active");
  } else if (inputValue < secretNumber) {
    blueAlertText.innerHTML =
      "Dica: o número secreto é maior que o número jogado.";
    showAndHideBlueAlert();
  } else if (inputValue > secretNumber) {
    blueAlertText.innerHTML =
      "Dica: o número secreto é menor que o número jogado.";
    showAndHideBlueAlert();
  } else if ((inputValue.value = "0")) {
    redAlertText.innerHTML = "Alerta: Número inválido.";
    showAndHideRedAlert();
  }
}

document
  .getElementById("close-icon--congratulations")
  .addEventListener("click", reset);

document.getElementById("close-icon--failed").addEventListener("click", reset);

function reset() {
  congratulationsPopup.classList.remove("active");
  failedPopup.classList.remove("active");
  stop();
  document.getElementById("input").value = "";
  document.querySelector(".attempts-number").value = "3";
  secretNumber = parseInt(Math.random() * 11);
}

function toggle() {
  let rulesPopup = document.getElementById("rules-popup");
  rulesPopup.classList.toggle("toggle");
}

document.getElementById('input').addEventListener('keyup', event => {
  event.preventDefault()
  if (event.keyCode === 13) {
    document.getElementById('submit-button').click()
  }
})