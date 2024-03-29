// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");
const error = document.getElementById("error");
error.innerHTML=" ";
// Function to display error messages
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Function to handle form submission
const handleFormData = (e) => {
  e.preventDefault();

  // Retrieving input elements
  // const fullnameInput = document.getElementById("fullname");
  const emailInput = document.getElementById("email");

  // Getting trimmed values from input fields
  // const fullname = fullnameInput.value.trim();

  const password = passwordInput.value.trim();
  const email = emailInput.value.trim();

  // Regular expression pattern for email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  // Clearing previous error messages
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // Performing validation checks
  //   if (fullname === "") {
  //     showError(fullnameInput, "Enter your full name");
  // }
  if (password === "") {
    showError(passwordInput, "Enter your password");
  }
  if (!emailPattern.test(email)) {
    showError(emailInput, "Enter a valid email address");
  }

  // Checking for any remaining errors before form submission
  const errorInputs = document.querySelectorAll(".form-group .error");
  if (errorInputs.length > 0) return;

  // Submitting the form
  // form.submit();
  const object = {
    // name: name,
    email: email,
    password: password,
  };
  document.getElementById("formSubmit").style.display="none";
  login(object);
  console.log(object);
};

// Toggling password visibility
passToggleBtn.addEventListener("click", () => {
  passToggleBtn.className =
    passwordInput.type === "password"
      ? "fa-solid fa-eye-slash"
      : "fa-solid fa-eye";
  passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);

const login = async (formData) => {
  console.log(formData);
  await fetch(`https://my-brand-be-2.onrender.com/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      // email: "barbie63@gmail.com",
      // password: "life@250",

      formData
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("formSubmit").style.display="block";
      
      if(data.message){
        error.innerHTML=data.message;
      }
      if(data.token){
      localStorage.setItem("storage", JSON.stringify(data.token));
      localStorage.setItem("users", JSON.stringify(data.user.email));

      if (data.user.role === "admin") {
         window.location.href = "menu.html";
      } else {
        
      window.location.href = "index.html";
      }}
    });

};


