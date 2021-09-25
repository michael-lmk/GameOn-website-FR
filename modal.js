function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelector(".close");
const btnSubmit = document.querySelector(".btn-submit");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event
closeModalBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

function testCheckbox(arrayOfCheckbox) {
  var countCheckedCheckbox = 0;
  var errorCritique = false;
  arrayOfCheckbox.forEach((checkbox) => {
    // console.log(checkbox);
    // var key = checkbox.innerText
    if (checkbox.id === "checkbox1") {
      // verif condition generale d'utilisation
      errorCritique = checkbox.checked ? true : false;
    } else {
      checkbox.checked && checkbox.id !== "checkbox2"
        ? countCheckedCheckbox++
        : (countCheckedCheckbox += 0);
    }
  });
  if (errorCritique === true) {
    return errorCritique;
  }
  console.log("count", countCheckedCheckbox);

  return countCheckedCheckbox > 0 ? true : false;
}

function testInput(input) {
  //console.log(input);

  var regexExp = getRegexExp(input.id);
  var result = regexExp.test(input.value);
  // console.log(regexExp, result);

  return result;
}

function changeCss(res, divFormController) {
  if (!res) {
    // result = responseTest;

    divFormController.getElementsByClassName("condition")[0].style.display =
      "block";
    divFormController.setAttribute("data-error-visible", "true");
  } else {
    divFormController.getElementsByClassName("condition")[0].style.display =
      "none";
    divFormController.setAttribute("data-error-visible", "false");
  }
}

function AnimationFormValid(opacity) {
  document.getElementById("form").style.cssText = "display : none;";

  document.getElementById("loader").style.opacity =
    parseInt(opacity, 10) === 1 ? 0 : 1;
  setTimeout(() => {
    document.getElementsByClassName("modal-body")[0].innerHTML =
      "Formulaire envoyer!<br>Félicitation vous êtes inscrit.";
  }, 750);

  console.log("ok");
}

function validate(e) {
  var formIsValid = {
    result: true,
    error_list: {}
  };

  e.preventDefault();
  formData.forEach(async (divFormController, i) => {
    var element = divFormController.querySelectorAll("input");
    // console.log(element);
    var res;
    // test des champs
    if (element.length > 1) {
      res = testCheckbox(element);
      formIsValid.error_list["checkbox" + i] = res;
    } else {
      res = testInput(element[0]);

      formIsValid.error_list[element[0].id] = res;
    }
    changeCss(res, divFormController);
  });

  for (const [, value] of Object.entries(formIsValid.error_list)) {
    console.log("aaaaaa", value);

    if (value === false) {
      formIsValid.result = false;
    }
  }

  console.log("aze", formIsValid);
  return formIsValid;
}

// envoi du formulaire
async function onSubmit(e) {
  var formIsValid = validate(e);

  if (formIsValid.result) {
    //animation quand le formulaire est valide
    AnimationFormValid(0);

    ///envoie du formulaire

    setTimeout(() => {}, 2000);
  } else {
    alert("formulaire incorrect");
  }

  return "ok";
}

// launch treatment form event
btnSubmit.addEventListener("click", onSubmit);

// lanch test on input
function getRegexExp(key) {
  switch (key) {
    case "last":
      return /^[A-Za-z ]{3,}/;

    case "first":
      return /^[A-Za-z ]{3,}/;

    case "email":
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    case "birthdate":
      return /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;

    case "quantity":
      return /^(\d?[1-9]|[1-9]0)$/;

    case "checkbox1":
      return /^(\d?[1-9]|[1-9]0)$/;

    default:
      return false;
  }
}
