"use strict";

forgotPass.onclick = () => {
    document.querySelector("#signin-form").classList.toggle("d-none");

    document.getElementById("forgot-section").classList.toggle("d-none");
}

singInUp.onclick = () => {
    document.getElementById("forgot-section").classList.toggle("d-none");

    document.querySelector("#signin-form").classList.toggle("d-none");
}

register.onclick = () => {
    document.querySelector("#signin-form").classList.toggle("d-none");

    document.querySelector("#registerForm").classList.toggle("d-none");
}

login.onclick = () => {
    document.querySelector("#registerForm").classList.toggle("d-none");

    document.querySelector("#signin-form").classList.toggle("d-none");
}