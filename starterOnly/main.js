const editNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  
// Trigger the validation modal
const formValidationModal = () => {
  const modalBody = document.querySelector('.modal-body > form')
  const validationModal = document.querySelector('.validation')

  modalBody.style.opacity = "0"
  modalBody.style.visibility = "hidden"
  validationModal.style.visibility = "visible"
}

// validName verify if the name contain only alphabetic caracters, return true if valid
const validName = (name) => {
  const regex = /[^aA-zZ\s]/
  return !regex.test(name)
}


// function is called on modal submit
const validate = () => {
  let status = true

  const firstName = document.querySelector("#first").value
  const lastName = document.querySelector("#last").value
  const email = document.querySelector("#email").value
  const birthdate = document.querySelector("#birthdate").value
  const quantity = document.querySelector("#quantity").value
  const cgValid = document.querySelector("#checkbox1").value

  if(!validName(firstName)) {
    document.querySelector(".firstname-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".firstname-error").style.display = "none"
  }

  if(!validName(lastName)) {
    document.querySelector(".lastname-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".lastname-error").style.display = "none"
  }

  if(!validEmail(email)) {
    document.querySelector(".email-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".email-error").style.display = "none"
  }

  if(!validBirthdate(birthdate)) {
    document.querySelector(".birthdate-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".birthdate-error").style.display = "none"
  }

  if(!validQuantity(quantity)) {
    document.querySelector(".quantity-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".quantity-error").style.display = "none"
  }

  if(!validCgValid(cgValid)) {
    document.querySelector(".lastname-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".lastname-error").style.display = "none"
  }


console.log(validName(firstName))

if(status) {
  formValidationModal()
}

return false

}