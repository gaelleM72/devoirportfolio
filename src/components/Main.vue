<script>
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

// formulaire de contact

const form = document.getElementById("form");
const nom = document.getElementById("nom");
const email = document.getElementById("email");
const objet = document.getElementById("objet");

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
</script>

<template>
  <div id="pc-image">
    <img src="./icons/imagepc.png" alt="pc"/>
  </div>

  <!-- Partie présentation -->

  <section id="présentation">
    <h2>Développeuse web junior</h2>
    <p>
      Ma passion pour le développement web commence en 2023 et m'a demandé un
      changement radical de cursus afin de pouvoir pleinement l'exploiter.
      J'apprends les différents langages et techniques au fur et à mesure afin
      de pouvoir devenir développeuse web professionelle. Dès lors, je mis tout
      en oeuvre pour apprendre, tout en prenant du plaisir sur les divers
      projets développés.
    </p>
  </section>

  <!-- Partie des projets -->

  <h3>Mes projets</h3>
  <section id="project-container">
    <div id="projets1">
      <img src="./icons/cv-png.PNG" alt="cv"/>
      <div id="modal-container">
        <div class="overlay modal-trigger"></div>
        <div id="modal">
          <button class="close-modal modal-trigger">X</button>
          <h4>Création de CV</h4>
          <p>
            Curriculum vitae réalisé en HTML5 et CSS3. A la fois simple et
            efficace mais aussi moderne.
          </p>
          <div id="cv2">
            <img src="./icons/cv2.PNG" alt="cv2"/>
          </div>
        </div>
      </div>
      <button class="modal-btn1 modal-trigger">Création de CV</button>
    </div>

    <div id="projets2">
      <img src="./icons/cahier-des-charges.PNG" alt="cdc"/>
      <a target="_blank" href="../src/assets/cahier-des-charges.pdf"
        >Cahier des charges</a
      >
    </div>

    <div id="projets3">
      <img src="./icons/espace-commentaire.PNG" alt="commentaire"/>
      <a target="_blank" href="./404.vue">Espace commentaire</a>
    </div>
  </section>

  <!-- les différents langages utilisés -->

  <div id="langages">
    <img src="./icons/langages.png" alt="langages"/>
  </div>

  <!-- Formulaire de contact -->

  <div class="container-contact">
    <h4>contactez moi</h4>
  </div>
  <form class="form" id="form" action="https://formsubmit.co/adressemail@email.fr" method="post">
    <div class="form-control1">
      <label>Nom:</label>
      <input type="text" placeholder="Votre nom" id="nom"/>
      <small>message d'erreur</small>
    </div>

    <div class="form-control2">
      <label>Email:</label>
      <input type="text" placeholder="Votre mail" id="email"/>
      <small>message d'erreur</small>
    </div>

    <div class="form-control3">
      <label>Objet:</label>
      <input type="text" placeholder="Objet" id="objet"/>
      <small>message d'erreur</small>
    </div>

    <div class="form-control4">
      <label>Message:</label>
      <textarea id="message" placeholder="Votre message" rows="6"></textarea>
    </div>
    <div class="form-control5">
      <button>Envoyer message</button>
    </div>
  </form>

  <!-- logo pour ramener en haut de page -->

  <div id="scrollUp">
    <a href="#top"><img src="./icons/avatar.png" alt="avatar"/></a>
  </div>
</template>

<style scoped>

body {
  padding: 0 2%;
  margin: 0;
}

/* Image pc*/

#pc-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50%;
  padding-top: 40px;
  padding-bottom: 40px;
}

#pc-image img {
  width: 700px;
  height: 700px;
  padding-bottom: 50px;
  border-radius: 50%;
  box-shadow: 0px 0px 40px rgb(12, 147, 156);
}

/* Présentation */

h2 {
  display: flex;
  justify-content: center;
  margin: 0;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  color: rgb(12, 147, 156);
  padding-top: 10px;
  padding-bottom: 50px;
}

#présentation p {
  text-indent: 50px;
  line-height: 30px;
  font-size: 20px;
}

/* Projet */

h3 {
  display: flex;
  justify-content: center;
  margin: 0;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  color: rgb(12, 147, 156);
  padding-top: 50px;
  padding-bottom: 50px;
}

h4 {
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 100px;
  text-transform: uppercase;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 50px;
  color: rgb(12, 147, 156);
}

#project-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
}

#project-container img:hover {
  color: black;
  box-shadow: 10px 18px #283045;
}
div.liste-projets {
  display: flex;
  padding-block: 30px;
  text-align: justify;
  line-height: 30px;
  font-size: 20px;
  gap: 50px;
}

/* boutons */

.modal-btn1 {
  background-color: inherit;
  color: rgb(12, 147, 156);
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  text-decoration: underline;
  display: block;
  border: none;
  outline: none;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  padding-top: 40px;
  padding-bottom: 5px;
  cursor: pointer;
}

/* conteneur qui contient l'overlay et la modal */

#modal-container {
  display: none;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
}

/* créer une class active du conteneur */

#modal-container.active {
  display: block;
}

/* overlay */

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #333333d3;
}

/* positionner le modal */

#modal {
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  padding: 30px;
  background: white;
  border-radius: 5px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* bouton croix pour fermer */

.close-modal {
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  position: absolute;
  top: 5px;
  right: 10px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: red;
  color: white;
}

/* pour le titre du pop */

#modal h4 {
  margin-bottom: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  font-weight: bold;
}

/* pour le paragraphe du pop */

#modal p {
  line-height: 1.4;
  margin-top: 0;
  margin-bottom: 10px;
}

#cv2 {
  display: flex;
  justify-content: center;
}

/* projets */

#projets2 a {
  color: rgb(12, 147, 156);
  text-transform: uppercase;
  display: block;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 5px;
  cursor: pointer;
}

#projets3 a {
  color: rgb(12, 147, 156);
  text-transform: uppercase;
  display: block;
  text-decoration: underline;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  padding-top: 50px;
  padding-bottom: 5px;
  cursor: pointer;
}

/* Image des différents langages */

#langages {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(12, 147, 156);
}

#langages img {
  width: 30%;
  height: 30%;
}

/* Formulaire de contact */

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  display: block;
  color: rgb(12, 147, 156);
  font-size: 25px;
  margin: 20px 0;
}

button {
  display: block;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 0px;
  width: 90%;
  max-width: 200px;
  color: #70d0fe;
  background-color: #283045;
  font-size: 20px;
  border-radius: 6px;
  margin-bottom: 50px;
}

.form-control1 input {
  display: block;
  width: 500px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border-bottom: 3px solid #d3d3d3;
}

.form-control1 small {
  visibility: hidden;
}

.form-control1.success input {
  color: green;
  visibility: visible;
}

.form-control2 input {
  display: block;
  width: 500px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border-bottom: 3px solid #d3d3d3;
}

.form-control2 small {
  visibility: hidden;
}

.form-control2.success input {
  color: green;
  visibility: visible;
}
.form-control3 input {
  display: block;
  width: 500px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border-bottom: 3px solid #d3d3d3;
}

.form-control3 small {
  visibility: hidden;
}

.form-control3.success input {
  color: green;
}
.form-control.error small {
  color: red;
  visibility: visible;
}

textarea {
  width: 500px;
  height: 200px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  border: none;
  border-bottom: 1px solid #d3d3d3;
}

/* logo pour ramener en haut de page */

#scrollUp {
  position: fixed;
  right: 0px;
  bottom: 10px;
  opacity: 100%;
}

#scrollUp img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgb(12, 147, 156);
}
</style>
