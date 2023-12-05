let EmailInput = document.querySelector(".email-input");
let submitButton = document.querySelector(".submit-btn");
let errorState = document.querySelector("#error");

// regex //
let regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// validate email function //

function ValidateEmail(){
    if(EmailInput.value.match(regex)){
        alert("Thank you for your subscription");
    }
    else{
        errorState.textContent = "please provide a valid email address";
        EmailInput.style.border = "2px solid hsl(354, 100%, 66%)";
    }
}

// event listener
submitButton.addEventListener("click", ValidateEmail);