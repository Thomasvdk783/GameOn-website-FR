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


// DOM elements form
const monPrenom = document.getElementById('first');
const monNom = document.getElementById('last');
const monEmail = document.getElementById('email');


function validate(e) {
  const myRegex = /^[a-zA-Z-\s]+$/;

  if (monPrenom.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ ci-dessus est requis.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  } else if (myRegex.test(monPrenom.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ doit comporter uniquement des lettres, des tirets.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  }
  modalBg2()
}

function modalBg2() {
  if (monPrenom.value() == true) {
    
  }
}

function validate(e) {
  const myRegex = /^[a-zA-Z-\s]+$/;

  if (monNom.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ ci-dessus est requis.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  } else if (myRegex.test(monNom.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ doit comporter uniquement des lettres, des tirets.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  }
}

function validate(e) {
  const myRegex = /^[a-zA-Z-\s]+$/;

  if (monEmail.value.trim() == "") {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ ci-dessus est requis.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  } else if (myRegex.test(monEmail.value) == false) {
    let myError = document.getElementById("error");
    myError.innerHTML = "Le champ doit comporter uniquement des lettres, des tirets.";
    myError.style.color = "red";
    myError.style.fontSize = "14px";
    myError.style.display = "flex";
    myError.style.justifyContent = "flex-end";
    e.preventDefault();
  }
}
// Nom 


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