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
let isFormValid = true;

// DOM elements form
const firstNameInput = document.getElementById('first');
const lastNameInput = document.getElementById('last');
const emailInput = document.getElementById('email');
const quantityInput = document.getElementById('quantity');
const conditionsCheckboxInput = document.getElementById('checkbox1');
const citysCheckboxInput = document.getElementsByClassName(".checkbox-input");
const tabsLocation = document.forms.reserve.location;
const birthdateInput = document.getElementById('birthdate');



function validate(e) {
    e.preventDefault();

    // Error Elements
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const emailError = document.getElementById("email-error");
    const quantityError = document.getElementById("quantity-error");
    const errorConditionsCheckbox = document.getElementById("error-checkbox1");
    const errorCityCheckbox = document.getElementById('city-checkbox-error');
    const birthdateError = document.getElementById('date-error');


    // REGEX
    const nameRegex = /^[a-zA-Z-\s]+$/;
    const emailRegex = /^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]­{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$/;
    const quantityRegex = /^[0-9]+$/;
    const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

    //first name error message
    if (firstNameInput.value.trim() == "") {
        firstNameError.innerHTML = "Le champ ci-dessus est requis";
        firstNameError.style.color = "red";
        firstNameError.style.fontSize = "14px";
        firstNameError.style.display = "flex";
        firstNameError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else if (nameRegex.test(firstNameInput.value) == false) {
        firstNameError.innerHTML = "Le champ doit comporter uniquement des lettres, des tirets.";
        firstNameError.style.color = "red";
        firstNameError.style.fontSize = "14px";
        firstNameError.style.display = "flex";
        firstNameError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else {
        isFormValid = true;
        firstNameError.style.display = "none"
    }
    //Last name error message
    if (lastNameInput.value.trim() == "") {
        lastNameError.innerHTML = "Le champ ci-dessus est requis";
        lastNameError.style.color = "red";
        lastNameError.style.fontSize = "14px";
        lastNameError.style.display = "flex";
        lastNameError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else if (nameRegex.test(lastNameInput.value) == false) {
        lastNameError.innerHTML = "Le champ doit comporter uniquement des lettres, des tirets.";
        lastNameError.style.color = "red";
        lastNameError.style.fontSize = "14px";
        lastNameError.style.display = "flex";
        lastNameError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else {
        isFormValid = true;
        lastNameError.style.display = "none"
    }
    // Email Error message
    if (emailInput.value.trim() == "") {
        emailError.innerHTML = "Le champ ci-dessus est requis";
        emailError.style.color = "red";
        emailError.style.fontSize = "14px";
        emailError.style.display = "flex";
        emailError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else if (emailRegex.test(emailInput.value) == false) {
        emailError.innerHTML = "Veuillez vérifier que l'email est valide";
        emailError.style.color = "red";
        emailError.style.fontSize = "14px";
        emailError.style.display = "flex";
        emailError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else {
        isFormValid = true;
        emailError.style.display = "none"
        
    }

    // Birthdate Check
    if (birthdateInput.value.trim() == "") {
        birthdateError.innerHTML = "Vous devez sélectionner une date"
        birthdateError.style.color = "red";
        birthdateError.style.fontSize = "14px";
        birthdateError.style.display = "flex";
        birthdateError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else if (dateRegex.test(birthdateInput.value) == false) {
        birthdateError.innerHTML = "La date est incorrecte";
        birthdateError.style.color = "red";
        birthdateError.style.fontSize = "14px";
        birthdateError.style.display = "flex";
        birthdateError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else {
        isFormValid = true;
        birthdateError.style.display = "none"
    }

    // Quantity error message
    if (quantityInput.value.trim() == "") {
        quantityError.innerHTML = "Le champ ci-dessus est requis";
        quantityError.style.color = "red";
        quantityError.style.fontSize = "14px";
        quantityError.style.display = "flex";
        quantityError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else if (quantityRegex.test(quantityInput.value) == false) {
        quantityError.innerHTML = "Seulement des caractères numérique sont autorisés";
        quantityError.style.color = "red";
        quantityError.style.fontSize = "14px";
        quantityError.style.display = "flex";
        quantityError.style.justifyContent = "flex-end";
        isFormValid = false;
    } else {
        isFormValid = true;
        quantityError.style.display = "none"
    }

    // Selection of city
    let isLocationChecked = false;
    // tabsLocation.forEach(radio => {
    //     if (radio.checked == true) { isLocationChecked = true }
    // });

    // for (const radio of tabsLocation) {
    //     if (radio.checked == true) { isLocationChecked = true }
    // }

    for (let index = 0; index < tabsLocation.length; index++) {
        const radio = tabsLocation[index];
        if (radio.checked == true) { isLocationChecked = true }
    }

    if (isLocationChecked == false) {
        errorCityCheckbox.innerHTML = "Vous devez choisir une ville";
        errorCityCheckbox.style.color = "red";
        errorCityCheckbox.style.fontSize = "14px";
        errorCityCheckbox.style.display = "flex";
        errorCityCheckbox.style.justifyContent = "flex-end";
        e.preventDefault();
    } else {
        errorCityCheckbox.style.display = "none";
    }

    // Conditions Checkbox error
    if (conditionsCheckboxInput.checked == false) {
        errorConditionsCheckbox.innerHTML = "Vous devez accepter les conditions utilisations";
        errorConditionsCheckbox.style.color = "red";
        errorConditionsCheckbox.style.fontSize = "14px";
        errorConditionsCheckbox.style.display = "flex";
        errorConditionsCheckbox.style.justifyContent = "flex-end";
        e.preventDefault();
    } else {
        errorConditionsCheckbox.style.display = "none";
    }
    e.preventDefault()

    if (isFormValid) {
        showConfirmationModal(modalBg2, modalbg);
    }

}

function showConfirmationModal(modalBg2, modalbg) {
    if (isFormValid === true) {
        modalBg2.style.display = "block"
        modalbg.style.display = "none";
    }
    if (lastNameInput.value == true) {
        modalBg2.style.display != "block"
    }
    if (emailInput.value == true) {
        modalBg2.style.display = "block"
    }
}





// launch second modal after submit registration ok
const modalBtnSubmit = document.querySelector("submitbtn");
const modalBg2 = document.getElementById('second-modal');
const modalbgAfterSubmit = document.querySelector(".bground2-close");



// close second modal after submiting
const secondModalClose = document.querySelector('.close2');
const btnSecondModalClose = document.getElementById('btnAfterSubmit');

secondModalClose.addEventListener('click', () => {
    if (getComputedStyle(modalBg2).display != "none") {
        modalBg2.style.display = "none";
    }
})

btnSecondModalClose.addEventListener('click', () => {
    if (getComputedStyle(modalBg2).display != "none") {
        modalBg2.style.display = "none";
    }
})
