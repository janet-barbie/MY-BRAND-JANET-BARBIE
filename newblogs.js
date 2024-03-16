const formel = document.getElementById("form");
const error = document.getElementById("error");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let blogId = urlParams.get("blog_id");
document.getElementById("update").style.display = "none";

formel.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submit");
  const profile1 = document.getElementById("profile").files[0];
  const title1 = document.getElementById("title").value;
  const intro1 = document.getElementById("intro").value;
  const article1 = document.getElementById("div_editor1").value;

  const formData = new FormData();
  formData.append("title", title1);
  formData.append("intro", intro1);
  formData.append("article", article1);
  formData.append("profile", profile1);
  newBlogs(formData);
});

const newBlogs = async (formData) => {
  const token = JSON.parse(localStorage.getItem("storage"));
  console.log(token);
  await fetch(`https://my-brand-be-2.onrender.com/api/blogs`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        // alert(data.error);
        error.innerHTML = data.error;
      } else {
        window.location.href = "blogs.html";
      }
    });
};
