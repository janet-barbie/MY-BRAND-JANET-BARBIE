//getting single blog
const blog = async () => {
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
        document.getElementById("heading").innerText = singleBlog.title;
        document.getElementById("intro").innerHTML = singleBlog.intro;
        document.getElementById("post-container").innerHTML =
          singleBlog.article;
        document
          .querySelector(".post-img")
          .setAttribute("src", singleBlog.image);
      }
    });
};
blog();
