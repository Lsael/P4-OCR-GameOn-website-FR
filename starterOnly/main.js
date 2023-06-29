const editNav = () => {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
};

const formValidationModal = () => {
  const modalBody = document.querySelector('.modal-body > form');
  const validationModal = document.querySelector('.validation');

  modalBody.style.opacity = '0';
  modalBody.style.visibility = 'hidden';
  validationModal.style.visibility = 'visible';
};

const checkName = (name) => {
  const regex = /^[aA-zZ\s-]{2,}$/;
  return regex.test(name);
};

const checkEmail = (email) => {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
};

const checkBirthdate = (birthdate) => {
  const date = new Date(birthdate);
  const currentDate = new Date();
  return date instanceof Date && !isNaN(date) && date.getFullYear() >= 1900 && date <= currentDate;
};

const validate = () => {
  let isFormValidated = true;

  const firstname = document.querySelector('#first');
  const lastname = document.querySelector('#last');
  const email = document.querySelector('#email');
  const birthdate = document.querySelector('#birthdate');
  const quantity = document.querySelector('#quantity');
  const tournament = document.querySelectorAll('input[name="location"]:checked');
  const usageTermsCheckbox = document.querySelector('#checkbox1');

  if (!checkName(firstname.value)) {
    firstname.classList.add('error-display');
    isFormValidated = false;
  } else {
    firstname.classList.remove('error-display');
  }

  if (!checkName(lastname.value)) {
    lastname.classList.add('error-display');
    isFormValidated = false;
  } else {
    lastname.classList.remove('error-display');
  }

  if (!checkEmail(email.value)) {
    email.classList.add('error-display');
    isFormValidated = false;
  } else {
    email.classList.remove('error-display');
  }

  if (!checkBirthdate(birthdate.value)) {
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

  if (!usageTermsCheckbox.checked) {
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
};
