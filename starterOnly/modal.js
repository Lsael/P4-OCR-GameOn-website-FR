
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloseBtn = document.querySelector(".close")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
}

// Close modal event
modalCloseBtn.addEventListener("click", closeModal)

// Close modal form
const closeModal = () => {
  modalbg.style.display = "none";
}

