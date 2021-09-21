//fucntion to show and hide form segments

signUpForm = document.querySelector(".signup-form")
signInForm = document.querySelector(".signin-form")

signUpRadio = document.querySelector(".signup-radio")
signInRadio = document.querySelector(".signin-radio")

function showSignUp(){
    if(signUpRadio.checked){
        signUpForm.style.display="block"
        signInForm.style.display="none"
    }
}
function showSignIn(){
    if(signInRadio.checked){
        signInForm.style.display="block"
        signUpForm.style.display="none"
    }
}

//new customer details
let form = document.getElementById("form")
let custName = document.getElementById("name")
let newEmail = document.getElementById("new-email")
let newPassword = document.getElementById("new-password")
let signup = document.getElementById("signup-btn")

//old customer details
let email =document.getElementById("email")
let password = document.getElementById("password")
let signin = document.getElementById("signin-btn")



function validateNewCust(){
    // console.log("validateInputs")
    let prompt = 0;

    //check values of inputs
    let custNameValue = custName.value.trim();
    let newEmailValue = newEmail.value.trim();
    let newPasswordValue = newPassword.value.trim();
    
    

    //validate customer name
    if (custNameValue == ""){
        onError(custName, "Customer name cannot be empty")
    }else{
        onSuccess(custName)
        prompt += 1;
    }

    //validate customer email
    if (newEmailValue == ""){
        onError(newEmail, "Email cannot be empty")
    }else if(!isEmail(newEmailValue)){
        onError(newEmail, "Email is not valid")

    }else{
        onSuccess(newEmail)
        prompt += 1;
    }

    //valiadate passsword
    if(newPasswordValue == ""){
        onError(newPassword, "Password cannot be empty")
    }else{
        onSuccess(newPassword)
        prompt += 1;
    }

    //console.log(prompt)
    return prompt;

    //return true if all condtion s are met
    
}

//function to validate old customer details
function validateOldCust(){
    let prompt = 0
    
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    
    //validate customer email 
    if (emailValue == ""){
        onError(newEmail, "Email cannot be empty")
    }else if(!isEmail(emailValue)){
        onError(newEmail, "Email is not valid")

    }else{
        onSuccess(newEmail)
        prompt += 1;
    }

    //valiadate passsword
    if(passwordValue == ""){
        onError(newPassword, "Password cannot be empty")
    }else{
        onSuccess(newPassword)
        prompt += 1;
    }

    return prompt;

}

//function to check if validation is successful
function onSuccess(input){
    let parent = input.parentElement;
    message = parent.querySelector("small")

    message.style.visibility="hidden";
    message.innerText ="";
    input.style.border="1px solid #2ecc71";


}

//function to check if validation is NOT successful
function onError(input, errorMessage){
    let parent = input.parentElement;
    let message = parent.querySelector("small");
    
    message.style.visibility="visible";
    message.innerText = errorMessage;
    input.style.border="1px solid #e74c3c";
}

//check if the email input conforms to a standard email pattern
function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}


signup.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("button clicked")
    //validateInputs();
    let allValid = validateNewCust()
    console.log(allValid);

    if (allValid === 3){
        // alert("form completed")
        document.getElementById("summary-modal-container").style.display="flex";

    }
})

signin.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("button sign in clicked")
    let allOldValid = validateOldCust()
    if (allOldValid == 2){
        alert("form finished")
    }
})