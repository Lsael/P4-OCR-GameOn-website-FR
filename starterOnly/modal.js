
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const validationModal = document.querySelector(".validation");
const modalBody = document.querySelector(".modal-body > form");
const modalCloseBtn = document.querySelectorAll(".close-modal")

// launch modal form
const launchModal = () => {
  modalbg.style.display = "block";

}
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// Close modal form
const closeModal = () => {
  modalbg.style.display = "none";
  modalBody.style.visibility = "visible";
  modalBody.style.opacity = "1";
  validationModal.style.visibility = "hidden";
}
// Close modal event
modalCloseBtn.forEach((btn) => btn.addEventListener("click", closeModal))
