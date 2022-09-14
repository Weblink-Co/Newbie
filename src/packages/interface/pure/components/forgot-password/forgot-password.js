"use strict";

let forgotPass = document.getElementById("forgot-pass");

forgotPass.addEventListener("click", function () {
  document.querySelector("#signin-form").classList.toggle("d-none");
  // document.querySelectorAll(".r-form").forEach(function(el){
  //     el.style.display = "none";
  // })
  document.getElementById("forgot-section").classList.toggle("d-none");
});

let singInUp = document.getElementById("sing-in-up");

singInUp.addEventListener("click", function () {
  document.getElementById("forgot-section").classList.toggle("d-none");
  document.querySelector("#signin-form").classList.toggle("d-none");
});
