const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let blogId = urlParams.get("blog_id");
let error = document.querySelector(".error");
document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();
  let names = document.getElementById("name").value;
  //let email = document.getElementById("email").value;
  let opinion = document.getElementById("opinion").value;
  let error = document.querySelector(".error");
  //console.log(email);
  console.log(names);
  console.log(opinion);
  let object = {
    name: names,
    // email: email,
    comment: opinion,
  };

  newComment(object);
});

const comments = async () => {
  console.log(blogId);

  await fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}/comments`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let commentList = data.comments;
      console.log(commentList);
      let comment = document.getElementById("comment-emoji");
      comment.innerHTML = `
      ${commentList.length}  <i class="fas fa-comment"></i>`;

      const commentContainer = document.getElementById("comments");
      if (commentList.length > 0) {
        for (let i = 0; i < commentList.length; i++) {
          let comment = `         <div class="comment-session">
      <div class="post-comment">
        <div class="comment-list">
        <div class="flex">
          <div class="user">
            <div class="user-image"><img src="scarlet-jones.jpg" alt="user-image"></div>
             <div class="user-meta"> 
              <div class="name">${commentList[i].name}</div>
  
            </div>
            </div>
            <div class="reply">
              <div class="tick-icon"><i class="fas fa-thumbs-up"></i></div>
              <div class="re-comment">Reply</div>
            </div>
          </div>
          <div class="comment">${commentList[i].comment}</div>
        </div>
        
      </div> `;
          commentContainer.insertAdjacentHTML("beforeend", comment);
        }
      }
    });
};
comments();

//posting a comment

const newComment = async (object) => {
  const token = JSON.parse(localStorage.getItem("storage"));
  console.log(token);
  console.log(object);
  fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}/comments`, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(object),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        // alert(data.error);
        error.innerHTML = data.error;
      } else {
        // alert("message sent");
        // error.innerHTML = "message sent";
        window.location.reload();
      }
    });
};
//posting a like
const likes = document.getElementById("like");
likes.addEventListener("click", function () {
  console.log("cliked");
  likeBlog();
});
const likeBlog = async () => {
  console.log(blogId);
  let token = JSON.parse(localStorage.getItem("storage"));
  if (!token) {
    return alert(" No token found please login to continue");
  }
  console.log(token);
  await fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}/likes`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data) {
        //alert("like added");
        window.location.reload();
      }
    });
};

//getting likes
const getLikes = async () => {
  const like = document.getElementById("like");

  await fetch(`https://my-brand-be-2.onrender.com/api/blogs/${blogId}/likes`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.bloglike);
      like.innerHTML = `
      ${data.total}  <i class="fas fa-thumbs-up"></i>`;
    });
};
getLikes();
