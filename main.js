// "use strict";
//Elements
const elements = document.querySelectorAll(".btns");
//Event
elements.forEach((element) => {
  element.addEventListener("click", () => {
    let command = element.dataset["element"];
    if (command == "createLink" || command == "insertImage") {
      let url = prompt("enter the link here:", "http://");
      document.execCommand(command, false, url);
    } else {
      document.execCommand(command, false, null);
    }
  });
});
