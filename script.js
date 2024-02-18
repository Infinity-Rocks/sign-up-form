const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordElement = document.getElementsByClassName('bottom-row')[0].children[0];
const loginPassword = document.getElementById("login-password");
const submitForm = document.getElementById("signup-form");
const loginForm = document.getElementById("login-form");


let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
let lowerCaseRegex = /[a-z]/g;
let upperCaseRegex = /[A-Z]/g;
let numberRegex = /[0-9]/g;

let passwordMismatch = document.createElement('div');

let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

email.addEventListener("input", (event) => {
    if (email.value.match(emailRegex)) {
        email.setCustomValidity("");
    }
    else {
        email.setCustomValidity("Please enter a valid email address");
    }
});

phone.addEventListener("input", (event) => {
    if (phone.value.match(phoneRegex)) {
        phone.setCustomValidity("");
    }
    else {
        phone.setCustomValidity("Please enter a valid phone number");
    }
});

password.onfocus = function () {
    document.getElementById("message").style.display = "block";
};

password.onblur = function () {
    document.getElementById("message").style.display = "none";
};

password.onkeyup = () => {
    if (password.value.match(lowerCaseRegex)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    if (password.value.match(upperCaseRegex)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    if (password.value.match(numberRegex)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    if (password.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
};

confirmPassword.addEventListener("input", (event) => {
    if (password.value != confirmPassword.value || password.value == "" && confirmPassword.value == "") {
        confirmPassword.style.borderColor = "rgb(255, 0, 0)";
        password.style.borderColor = "rgb(255, 0, 0)";
        passwordMismatch.textContent = "*Passwords do not match";
        passwordMismatch.style.color = "rgb(255, 0, 0)";
        passwordMismatch.style.fontSize = "12px"
        passwordElement.appendChild(passwordMismatch);
    }
    else {
        confirmPassword.style.borderColor = "rgb(0, 255, 0)";
        password.style.borderColor = "rgb(0, 255, 0)";
        passwordElement.removeChild(passwordMismatch);
    }
});

submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Form Submitted Successfully!");
    window.location.replace("login.html");
});