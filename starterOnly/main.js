const editNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// validName verify if the name contain only alphabetic caracters, return true if valid
const validName = (name) => {
  const regex = /[^aA-zZ\s]/
  return !regex.test(name)
}

// Trigger the validation modal
const formValidationModal = () => {
  const modalBody = document.querySelector('.modal-body > form')
  const validationModal = document.querySelector('.validation')

  modalBody.style.opacity = "0"
  modalBody.style.visibility = "hidden"
  validationModal.style.visibility = "visible"
}

// function is called on modal submit
const validate = () => {
  const firstName = document.querySelector("#first").value
  const lastName = document.querySelector("#last").value
  const email = document.querySelector("#email").value
  const birthdate = document.querySelector("#birthdate").value
  const quantity = document.querySelector("#quantity").value
  const cgValid = document.querySelector("#checkbox1").value
  const newsLetterSubcribe = document.querySelector("#checkbox2").value

  console.log(validName(firstName))
  formValidationModal()
  
  return false
}