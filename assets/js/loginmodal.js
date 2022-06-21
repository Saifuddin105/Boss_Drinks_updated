// login form validation
const Email = document.getElementById("email");

const form = document.getElementById("form");
const password = document.getElementById("login_modal_pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;

  const errorDisplay = inputControl.querySelector(".error");
  console.log(errorDisplay);
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  // const sign_up_emailValue = Email_signup.value.trim();
  // const sign_up_passValue = password_signup.value.trim();
  // const confirm_passValue = password_confirm.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

// login_form validation ends
// signup_form_validation

const form_signup = document.getElementById("form_signup");

const Email_signup = document.getElementById("email_2");
const password_signup = document.getElementById("signup_pass");
const password_confirm = document.getElementById("signup_pass_confirm");
form_signup.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs_signup();
});

const setError_signup = (element, message) => {
  const FormControl = element.parentElement;

  const errorDisplay_signup = FormControl.querySelector(".error2");
  console.log(errorDisplay_signup);
  errorDisplay_signup.innerText = message;
  FormControl.classList.add("error2");
  FormControl.classList.remove("success2");
};
const setSuccess_signup = (element) => {
  const FormControl = element.parentElement;
  const errorDisplay_signup = FormControl.querySelector(".error2");
  errorDisplay_signup.innerText = "";
  FormControl.classList.add("success2");
  FormControl.classList.remove("error2");
};
const isValidEmail_signup = (email) => {
  const re2 =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re2.test(String(email).toLowerCase());
};

const validateInputs_signup = () => {
  const sign_up_emailValue = Email_signup.value.trim();
  const sign_up_passValue = password_signup.value.trim();
  const confirm_passValue = password_confirm.value.trim();

  if (sign_up_emailValue === "") {
    setError_signup(email_2, "Email is required");
  } else if (!isValidEmail(sign_up_emailValue)) {
    setError_signup(email_2, "Provide a valid email address");
  } else {
    setSuccess_signup(email_2);
  }
  if (sign_up_passValue === "") {
    setError_signup(password_signup, "Password is required");
  } else if (sign_up_passValue.length < 8) {
    setError_signup(password_signup, "Password must be at least 8 character.");
  } else {
    setSuccess_signup(password_signup);
  }
  if (confirm_passValue === "") {
    setError_signup(password_confirm, "Please confirm your Password");
  } else if (confirm_passValue !== sign_up_passValue) {
    setError_signup(password_confirm, "Password Does't match");
  } else {
    setSuccess_signup(password_confirm);
  }
};
// signup_form_validation ends
