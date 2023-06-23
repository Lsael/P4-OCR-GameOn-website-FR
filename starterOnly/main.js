const editNav = () => {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
};

// Trigger the validation modal
const formValidationModal = () => {
  const modalBody = document.querySelector('.modal-body > form');
  const validationModal = document.querySelector('.validation');

  modalBody.style.opacity = '0';
  modalBody.style.visibility = 'hidden';
  validationModal.style.visibility = 'visible';
};

// validName verify if the name contain only alphabetic caracters, return true if valid
const validName = (name) => {
  const regex = /^[aA-zZ]{2,}$/;
  return regex.test(name);
}
;
const validEmail = (name) => {
  const regex = /^([aA-zZ]{2,})+@+([aA-zZ]{2,})+.+([aA-zZ]{2,4})$/;
  return regex.test(name);
};

const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const cgValid = document.querySelector('#checkbox1');

// function is called on modal submit
const validate = () => {
  let status = true;

  if (!validName(firstName.value)) {
    document.querySelector('.firstname-error').style.display = 'block';
    status = false;
  } else {
    document.querySelector('.firstname-error').style.display = 'none';
  }

  if (!validName(lastName.value)) {
    document.querySelector('.lastname-error').style.display = 'block';
    status = false;
  } else {
    document.querySelector('.lastname-error').style.display = 'none';
  }

     if(!validEmail(email)) {
    document.querySelector(".email-error").style.display = "block"
    status = false
  } else {
    document.querySelector(".email-error").style.display = "none"
  }

/*  if(!validBirthdate(birthdate)) {
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
  } */

  /* if(status) {
    formValidationModal()
  } */

  return false;
};
