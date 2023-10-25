import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

// Pour la souris

const mousemove = document.querySelector(".mousemove");

// Mouvements souris

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

window.addEventListener("mouseenter", () => {
  mousemove.style.background = "black";
});

window.addEventListener("mouseout", () => {
  mousemove.style.background = "none";
});

// Pour me contacter

const form = document.getElementById("form");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const objet = document.getElementById("objet");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const objetValue = objet.value;

  if (nomValue === "") {
    // si erreur le nom
    setErrorFor(nom, "le nom doit être renseigné");
  } else {
    // si le nom est bien indiqué
    setSucessFor(nom);
  }
  // si erreur sur le mail
  if (emailValue === "") {
    setErrorFor(email, "le mail doit être correctement renseigné");
  } else {
    setSucessFor(email);
  }
  // si erreur sur le mail
  if (objetValue === "") {
    setErrorFor(objet, "l'objet de votre message doit être renseigné");
  } else {
    setSucessFor(objet);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // message d'erreur
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function emailIsValid(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Pour boite modale

// pour selectionner le conteneur
const modalContainer = document.querySelector("#modal-container");

// pour le trigger (éléments déclencheurs)

const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}
