const Renderer = function(){

const renderPosts = (posts) => {
  const postsEL = $("#posts");
  postsEL.empty();
  posts.forEach((post) => {
    postsEL.append(createPostEl(post.id, post.text, post.comments));
  });
};

const createPostEl = (id, text, comments) => {
  const commentsList = createComments(comments);
  const post = $(`<div class="post" id=${id}><h3>${text}</h3></div>`);
  post.append(commentsList);
  post.append(`
  <div>
    <input type="text" class="input-comment" placeholder="comment something"/>
    <button class="comment" onclick='comment(event)'>COMMENT</button>
    <button class="delete" onclick='deletePost(event)'>DELETE POST</button>
  </div>`
  );
  return post;
};

const createComments = (comments) => {
  const list = $('<ul class="comments-list"></ul>');
  comments.forEach((comment) =>
    list.append(`
    <li class="comment-li" id=${comment.id}>
    <p>${comment.text}</p>
    <button class='delete-comment' onclick="deleteComment(event)">X</button>
    </li>`
    ));

  return list;
};

return {renderPosts};

}
