function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal form
modalClose.addEventListener('click', () => {
  if (getComputedStyle(modalbg).display != "none") {
    modalbg.style.display = "none";
  }
})

// Contrôle de validation des champs
let myForm = document.getElementsByName('reserve');

// DOM elements form
  const monNom = document.getElementById('last');
  const monEmail = document.getElementById('email');

myForm.addEventListener("submit", function (e) {
  const monPrenom = document.getElementById('first');
  const myRegex = /^[a-zA-Z-\s]+$/;

  if (monPrenom.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ suivant est requis.";
    myError.style.color = "red";
    e.preventDefault();
  } else if (myRegex.test(monPrenom.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le nom doit comporter uniquement des lettres, des tirets.";
    myError.style.color = "red";
    e.preventDefault();
  }
})

// launch second modal after submit registration ok
const modalBtnSubmit = document.querySelector("submitbtn");
const modalBg2 = document.querySelector('second-modal');
const modalbgAfterSubmit = document.querySelector(".bground2-close");



// close second modal after submiting
const secondModalClose = document.querySelector('.close2');
const btnSecondModalClose = document.querySelector('btnAfterSubmit');

secondModalClose.addEventListener('click', () => {
  if (getComputedStyle(modalBg2, btnSecondModalClose).display != "none") {
    modalBg2.style.display = "none";
    btnSecondModalClose.style.display = "none";
  }
})