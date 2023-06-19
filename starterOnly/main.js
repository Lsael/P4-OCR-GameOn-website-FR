const editNav = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const validate = () => {
  const firstName = document.querySelector("#first").value
  const lastName = document.querySelector("#last").value
  const email = document.querySelector("#email").value
  const birthdate = document.querySelector("#birthdate").value
  const quantity = document.querySelector("#quantity").value
  const cgValid = document.querySelector("#checkbox1").value
  const newsLetterSubcribe = document.querySelector("#checkbox2").value

  return false
}