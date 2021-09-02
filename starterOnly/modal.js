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
function closeModal(){
    modalbg.style.display = "none";
}

// treatment form data
function validate(e){
    var objetInputValue = {};
    e.preventDefault()
    formData.forEach((divFormController) => {
        var element = divFormController.querySelectorAll('input');
        
        if(element.length > 1){
            element.forEach((radio)=>{
                radio.checked? objetInputValue[radio.id] = radio.value : null;
            })
        }else{
            objetInputValue[element[0].id] = element[0].value;
        }
        
        

    });
    

    
    console.log(objetInputValue)
    return false;
}

// launch treatment form event
btnSubmit.addEventListener("click", validate);

// lanch test on input
function regexTest (objet) {
    const first = /^[A-Za-z ]{2,}"/;
    
    const last = /^[A-Za-z ]{2,}/;

    const email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
} 