// variable references
const formValidationForm = document.querySelector(".form_validation");
const Name = document.getElementById("name");
const Email = document.getElementById("email");
const Phone = document.getElementById("phone");
const Password = document.getElementById("password");
const ConfirmPassword = document.getElementById("confirmPassword");



// form validation submit
formValidationForm.addEventListener("submit", function (event) {
  event.preventDefault();
//   console.log("working");
  formValidation();
});

// form validation function

function formValidation() {
  const userName = Name.value.trim();
  const userEmail = Email.value.trim();
  const userPhone = Phone.value.trim();
  const userPassword = Password.value.trim();
  const userConfirmPassword = ConfirmPassword.value.trim();

//   user name validation
   if (userName === '') {
    alert(' the user name cannot be blank');
        // errorMessage()
   } else if(userName.length <= 3){
    alert(' the user name cannot be 3 characters');
    // errorMessage()
   } else{
    console.log(' user name is correct');
    // successMessage()
   }
  
//    user email validation
if (userEmail === '') {
    alert('the user email cannot be blank');
        // errorMessage()
   } else if(!isEmailValid(userEmail)){
    alert('please enter the valid email');
    
    // errorMessage()
   } 
   else{
    console.log(Email.value);
    // successMessage()
   }

  //  user phone validation
  if (userPhone === '') {
    alert('the user phone cannot be blank');
  }else if(userPhone.length < 11){
    alert('please enter the valid phone number');
    // errorMessage()
  }else{
    console.log('phone number is correct');
  }
  //  user password validation
  if (userPassword === '') {
    alert('the user password cannot be blank');
  }else if(userPassword.length <= 5 && userPassword.includes("!")){
    alert('the password must be more than 5 character and must include atleast 1 special character');
    // errorMessage()
  }else{
    console.log('password is correct');
  }

  //  user confirm password validation
  if (userConfirmPassword === '') {
    alert('the user confirm password cannot be blank');
  }else if(userConfirmPassword !== userPassword){
    alert('the password is not matched');
    // errorMessage()
  }else{
    console.log('password is matched');
  }
}

// email validation function
function isEmailValid(inputEmail) {
    let emailValid = inputEmail.indexOf("@");
    if (emailValid <= 1 ) return false;
    let dotValid = inputEmail.lastIndexOf(".");
    if (dotValid <= inputEmail + 3) return false;
    return true
}

// error message function
// function errorMessage(input,message) {
    
// }