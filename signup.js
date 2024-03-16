let namesError = document.getElementById("names-error");
let emailsError = document.getElementById("emails-error");

let submitsError = document.getElementById("submits-error");
function validateNames() {
  let name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateEmails() {
  let email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Invalid Email";
    return false;
  }
  emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
  return true;
}

function validateForms() {
  // if (!validateName() || !validateEmail() || !validateMessage()) {
  //   submitError.innerHTML = "Please fix error to submit";
  //   return false;
  // }
}
document.getElementById("buttons").addEventListener("click", function (event) {
  event.preventDefault();
  console.log("hello");
  // validateNames();
  // validateEmails();
  // validateForms();
  let name = document.getElementById("names").value;
  let email = document.getElementById("emails").value;
  let password = document.getElementById("password").value;
  let error = document.querySelector(".errors");
  console.log(email);
  console.log(name);
  console.log(password);
  let object = {
    name: name,
    email: email,
    password: password,
  };
  console.log(object);
  fetch(`https://my-brand-be-2.onrender.com/api/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      // email: "barbie63@gmail.com",
      // password: "life@250",

      object
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        //alert(data.error);
        error.innerHTML = data.error;
      } else {
        //alert("signed up sucessfully");
        error.innerHTML = "signed up successfully";
        document.getElementById("signup").reset();
        error.innerHTML = "";
        namesError.innerHTML = "";
        emailsError.innerHTML = "";
      }
    });
});
