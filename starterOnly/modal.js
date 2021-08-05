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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal form
modalClose.addEventListener('click', () => {
  if(getComputedStyle(modalbg).display != "none"){
      modalbg.style.display = "none";
  }
})



// close second modal after submiting
const secondModalClose = document.querySelector('.close2');
const btnSecondModalClose = document.querySelector('btnAfterSubmit');

secondModalClose.addEventListener('click', () => {
  if(getComputedStyle(modalBg2, btnSecondModalClose).display != "none"){
    modalBg2.style.display = "none";
    btnSecondModalClose.style.display = "none";
  }
})


// Contrôle de validation des champs
let myForm = document.getElementsByName('reserve');

// DOM elements form
const monPrenom = document.getElementById('first');
const monNom = document.getElementById('last');
const monEmail = document.getElementById('email');
const myRegex = /^[a-zA-Z-\s]+$/;

myForm.addEventListener('submit', function (e) {

  if (monPrenom.value.trim() == '') {
    alert('Compléter les champs')
  }
})

// launch second modal after submit registration ok
const modalBg2 = document.querySelector('.bground2');
const modalbgAfterSubmit = document.querySelector(".bground2");
const modalBtnSubmit = document.querySelector(".modal-btn-submit");

