// const AllBlogs = async () => {
//   await fetch(url + "/api/blogs")
//     .then((res) => res.json())
//     .then((result) => {
//       document.querySelector(".loaders").style.display = "none";
//       result.data.forEach((blog) => {
//         console.log(blog);
//         output += `<div class="image-item" style="background-color:red">
//                       <img src="${blog.image}" alt="Article image of"/>
//                       <div class="blog-card-text" style="width:95%">
//                           <div class="fun-fact">
//                               <span>Published on:${blog.createdAt}</span>
//                           </div>
//                           <div class="main-title" style="width:97%"><a href="blog.html?id=${
//                             blog._id
//                           }">${blog.title}</a></div>
//                           <div class="single-blog-title">
//                           ${blog.blogIntro.substr(0, 48) + "....."}
//                           </div>
//                           <div class="fun-fact">
//                               <span>${
//                                 blog.likes
//                               } <i class="fa fa-thumbs-up" style="font-size:15px; color:#A53DFF"></i> </span>
//                               <span>${
//                                 blog.comments
//                               } <i class="fa fa-comments" style="font-size:15px; color:#A53DFF"></i></span>
//                           </div>
//                       </div>
//                    </div>`;
//         blogContainer.innerHTML = output;
//         // console.log(blog)
//       });
//     });
// };
// AllBlogs();
// const querries = async (formData) => {
//   document.querySelector(".loader").style.display = "block";
//   document.querySelector("#submit-button").style.display = "none";
//   //console.log(formData.email)
//   await fetch(url + "/api/querries", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData),
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector(".loader").style.display = "none";
//       document.querySelector("#submit-button").style.display = "block";
//       if (data.error) {
//         showMessage(data.error);
//       } else {
//         //alert(data.message)
//         showMessage(data.message);
//         document.getElementById("contact-form").reset();
//         document.querySelector(".fa-check-circle").style.visibility = "hidden";
//       }
//     });
// };

const cards = async () => {
  await fetch("https://my-brand-be-2.onrender.com/api/blogs")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.blog);
      let cardList = data.blog;
      const cardcontainer = document.getElementById("card-posts");

      if (cardList.length > 0) {
        for (let i = 0; i < cardList.length; i++) {
          let singleCard = ` <div class="cards">
      <div class="card-img">
        <img src="${cardList[i].image}" alt="blog post" />
      </div>
      <div class="card-body">
        <a href="blog.html?blog_id=${cardList[i]._id}" class="blog-post"
          >${cardList[i].title}</a
        >
        <p class="post">
    ${cardList[i].intro}
        </p>
      </div>
      <div class="card-footer">
        <a href="#"><i class="fas fa-thumbs-up"></i></a>
        <a href="#"><i class="fas fa-comment"></i></a>
      </div>
    </div> `;
          cardcontainer.insertAdjacentHTML("beforeend", singleCard);
        }
      }
    });
};
//alert("No cards to be dis

cards();
