// let nameError = document.getElementById("name-error");
// let messageError = document.getElementById("message-error");
// let emailError = document.getElementById("email-error");
// //let phoneError = document.getElementById("phone-error");
// let submitError = document.getElementById("submit-error");
// // let names = "";
// // let email = "";
// // let message = "";
// function validateName() {
//   let name = document.getElementById("name").value;
//   if (name.length == 0) {
//     nameError.innerHTML = "name is required";
//     return false;
//   }
//   if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
//     nameError.innerHTML = "Write full name";
//     return false;
//   }
//   nameError.innerHTML = "<i class='fas fa-check-circle'></i>";
//   return true;
// }

// function validateMessage() {
//   let message = document.getElementById("message").value;
//   console.log(message);
//   let required = 5;
//   let left = required - message.length;

//   if (left > 0) {
//     messageError.innerHTML = "add more characters";
//     return false;
//   }
//   messageError.innerHTML = "<i class='fas fa-check-circle'></i>";
// }
// function validateEmail() {
//   let email = document.getElementById("email").value;
//   console.log(email);
//   if (email.length == 0) {
//     emailError.innerHTML = "Email is required";
//     return false;
//   }
//   if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
//     emailError.innerHTML = "Invalid Email";
//     return false;
//   }
//   emailError.innerHTML = "<i class='fas fa-check-circle'></i>";
//   return true;
// }

// function validateForm() {}
// // }
// document.getElementById("button").addEventListener("click", function (event) {
//   event.preventDefault();
//   //console.log(email);
//   // if (!validateName() || !validateEmail() || !validateMessage()) {
//   //   submitError.innerHTML = "Please fix error to submit";
//   //   return false;
//   // }
//   let names = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let message = document.getElementById("message").value;
//   let error = document.querySelector(".error");
//   console.log(email);
//   console.log(names);
//   console.log(message);
//   let object = {
//     name: names,
//     email: email,
//     message: message,
//   };
//   fetch(`https://my-brand-be-2.onrender.com/api/queries`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(
//       // email: "barbie63@gmail.com",
//       // password: "life@250",

//       object
//     ),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       if (data.error) {
//         // alert(data.error);
//         error.innerHTML = data.error;
//       } else {
//         // alert("message sent");
//         error.innerHTML = "message sent";
//         document.getElementById("form").reset();
//         error.innerHTML = "";
//         nameError.innerHTML = "";
//         emailError.innerHTML = "";
//         messageError.innerHTML = "";
//       }
//     });
// });

const contactForm=document.getElementById("contacts");

const error=document.getElementById("contact-error");
contactForm.addEventListener("submit",(e)=>{

  e.preventDefault();

  //retrieving form data
  const nameInput=document.getElementById("name");
  const emailInput=document.getElementById("email");
  const messageInput=document.getElementById("message");

//trimmed values
const name=nameInput.value.trim();
const email=emailInput.value.trim();
const message=messageInput.value.trim();
//regular expression
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

//performing validation
 
    if (name === "") {
      // showError(nameInput, "Enter your full name");
      error.innerHTML="Enter your full name";
  }

  if (!emailPattern.test(email)) {
    //showError(emailInput, "Enter a valid email address");
    error.innerHTML="Enter valid email";
  }
  if(message===""){
    error.innerHTML="Enter your message";
  }
    let object = {
    name: name,
    email: email,
    message: message,
  };
  document.getElementById("formSubmit").style.display="none";
  queries(object);
  console.log(object);

}
)
//contactForm.addEventListener("submit",handler);

const queries=async(FormData)=>{
console.log(FormData)
await fetch(`https://my-brand-be-2.onrender.com/api/queries`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      FormData
    ),
  })
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("formSubmit").style.display="block";
      if (data.error) {
        // alert(data.error);
        error.innerHTML = data.error;
      }
      else{
        error.innerHTML = " ";
        contactForm.reset();
        alert("message sent");


      }
    })
  }
 