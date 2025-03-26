// variables
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPhone = document.querySelector("#phone");
const userPassword = document.querySelector("#password");
const userConfirmPassword = document.querySelector("#confirmPassword");
const formValidate = document.querySelector(".form_validation");

formValidate.addEventListener("submit", function (event) {
  event.preventDefault();
  formValidation();
});

// form validation function
function formValidation() {
  const userNameValidate = userName.value.trim();
  const userEmailValidate = userEmail.value.trim();
  const userPhoneValidate = userPhone.value.trim();
  const userPasswordValidate = userPassword.value.trim();
  const userConfirmPasswordValidate = userConfirmPassword.value.trim();

  // user name validation
  if (userNameValidate === "") {
    alert("The user name cannot be blanked");
  } else if (userNameValidate.length < 3) {
    alert("The user cannot be less than 3 words");
  } else {
    console.log("The user name is valid", userNameValidate);
  }

  // user email validation
  if (userEmailValidate === "") {
    alert("The email cannot be blanked");
  } else if (!isEmail(userEmailValidate)) {
    alert("The user email is not valid");
  } else {
    console.log("The email is valid", userEmailValidate);
  }

  // user phone validation
  if (userPhoneValidate === "") {
    alert("The user phone cannot be blanked");
  } else if (userPhoneValidate.length !== 11) {
    alert("The user phone cannot be less than 11");
  } else {
    console.log("The user number is valid", userPhoneValidate);
  }

  // user password validation
  if (userPasswordValidate === "") {
    alert("The user password cannot be blanked");
  } else if (
    userPasswordValidate.length <= 5 &&
    !userPasswordValidate.match(/["!@#$%&"]/)
  ) {
    alert(
      "The password cannot be less than 5 and must include atleast 1 specail character"
    );
  } else {
    console.log("The password is correct", userPasswordValidate);
  }

  // confirm user password validation
  if (userConfirmPasswordValidate === "") {
    alert("The user confirm password cannot be blanked");
  } else if (userConfirmPasswordValidate !== userPasswordValidate) {
    alert("The user password is not matched");
  } else {
    console.log("The password is matched", userConfirmPasswordValidate);
  }
}

const isEmail = (email) => {
  let isValidEmail = email.indexOf("@");
  if (isValidEmail <= 1) return false;

  if (!email.includes("@")) return false;

  let dotValid = email.lastIndexOf(".");

  if (dotValid <= email + 3) return false;
  return true;
};
