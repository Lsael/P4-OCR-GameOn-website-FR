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

  return false
}