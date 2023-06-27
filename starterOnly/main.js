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

// validName verify the name, return true if valid
const checkName = (name) => {
  const regex = /^[aA-zZ\s-]{2,}$/;
  return regex.test(name);
};

// validEmail verify the email address, return true if valid
const validEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

// ValidBirthdate verify if the date is valid and between year 1900 and today date.
const validBirthdate = (birthdate) => {
  const date = new Date(birthdate);
  const currentDate = new Date();
  return date instanceof Date && !isNaN(date) && date.getFullYear() >= 1900 && date <= currentDate;
};


// function is called on modal submit
const validate = () => {
  let isFormValidated = true;

  const firstname = document.querySelector('#first');
  const lastname = document.querySelector('#last');
  const email = document.querySelector('#email');
  const birthdate = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const tournament = document.querySelectorAll('input[name="location"]:checked');
  // modifier le nom
  const cgValid = document.querySelector('#checkbox1');


  // factoriser le classlist add
  if (!validName(firstname.value)) {
    firstname.classList.add('error-display');
    isFormValidated = false;
  } else {
    firstname.classList.remove('error-display');
  }

  if (!validName(lastname.value)) {
    lastname.classList.add('error-display');
    isFormValidated = false;
  } else {
    lastname.classList.remove('error-display');
  }

  if (!validEmail(email.value)) {
    email.classList.add('error-display');
    isFormValidated = false;
  } else {
    email.classList.remove('error-display');
  }

  if (!validBirthdate(birthdate.value)) {
    birthdate.classList.add('error-display');
    isFormValidated = false;
  } else {
    birthdate.classList.remove('error-display');
  }

  if (!quantity.value || quantity.value < 1 || quantity.value > 99) {
    quantity.classList.add('error-display');
    isFormValidated = false;
  } else {
    quantity.classList.remove('error-display');
  }
  if (tournament.length === 0) {
    document.querySelector('#location1').classList.add('error-display');
    isFormValidated = false;
  } else {
    document.querySelector('#location1').classList.remove('error-display');
  }

  if (!cgValid.checked) {
    document.querySelector('#checkbox1').classList.add('error-display');
    isFormValidated = false;
  } else {
    document.querySelector('#checkbox1').classList.remove('error-display');
  }

  if (!isFormValidated) {
    document.querySelector('.btn-submit').classList.add('error-display');
  } else {
    document.querySelector('.btn-submit').classList.remove('error-display');
    formValidationModal();
  }

  // deplacer dans le html
  return false;
};
