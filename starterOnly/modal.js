
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const modalCloseBtn = document.querySelector(".close")

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal form
const closeModal = () => {
  modalbg.style.display = "none";
}

// Close modal event
modalCloseBtn.addEventListener("click", closeModal)


