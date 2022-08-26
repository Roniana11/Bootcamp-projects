const {renderPosts} = Renderer();
const { getPosts, addPost, removePost, addComment, removeComment } = Tweeter();

renderPosts(getPosts());

const post = function(){
    addPost($('#input').val());
    renderPosts(getPosts());
    $('#input').val('');
}

const deletePost = function(e){
    removePost(e.target.closest('.post').id);
    renderPosts(getPosts());   
}

const comment = function(e){
    const postId = e.target.closest('.post').id;
    addComment(postId, $(`#${postId}`).find('.input-comment').val());
    renderPosts(getPosts());   
}

const deleteComment = function(e){
    const postId = e.target.closest('.post').id;
    removeComment(postId, e.target.closest('li').id);
    renderPosts(getPosts());   
}

