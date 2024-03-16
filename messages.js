const messages = async () => {
  const token = JSON.parse(localStorage.getItem("storage"));
  console.log(token);
  await fetch("https://my-brand-be-2.onrender.com/api/queries", {
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data.queries);
      messageList = data.queries;
      console.log(messageList);
      const messagesContainer = document.getElementById("messages");
      if (messageList.length > 0) {
        for (let i = 0; i < messageList.length; i++) {
          let query = `
  <div class="comment-session">
    <div class="post-comment">
      <div class="comment-list">
        <div class="flex">
          <div class="user">
             <div class="user-meta"> 
              <div class="name">${messageList[i].name}</div>
               <div class="day">${messageList[i].email}</div> 
            </div>
            </div>
            <div class="reply">
              <div class="tick-icon"><i class="fas fa-reply"></i></div>
              <div class="re-comment">Reply</div>
            </div>
          </div>
          <div class="comment">${messageList[i].message}</div>
        </div>`;
          messagesContainer.insertAdjacentHTML("beforeend", query);
        }
      }
    });
};
messages();
