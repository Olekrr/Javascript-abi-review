const form = document.querySelector(".contactform");
const userName = document.querySelector("#name")
const nameError = document.querySelector("#nameError")
const subject = document.querySelector("#subject")
const subjectError = document.querySelector("#subjectError")
const email = document.querySelector("#email")
const emailError = document.querySelector("#emailError")
const address = document.querySelector("#address")
const addressError = document.querySelector("#addressError")


function validateForm(event){

    event.preventDefault();

    if(length(userName.value, 0) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if(length(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(validateEmail(email.value) === true ) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
    
    if(length(address.value, 24) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }
}

form.addEventListener("submit", validateForm)

function length(value, len) {
    if(value.trim().length > len){
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}