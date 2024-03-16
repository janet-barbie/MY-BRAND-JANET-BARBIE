const error = document.getElementById("error");
const update = async () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let blogId = urlParams.get("blog_id");
  console.log(blogId);
  await fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.blog);
      let singleBlog = [];
      singleBlog = data.blog;

      if (singleBlog) {
        document.getElementById("title").value = singleBlog.title;
        document.getElementById("intro").value = singleBlog.intro;
        editor.setHTML(`${singleBlog.article}`);
        document.querySelector("profile").setAttribute("src", singleBlog.image);
      }
    });
};

update();
const formel = document.getElementById("form");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let blogId = urlParams.get("blog_id");
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
  updateBlogs(formData);
});
const updateBlogs = async (formData) => {
  const token = JSON.parse(localStorage.getItem("storage"));
  console.log(token);
  await fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}`, {
    method: "PATCH",
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
