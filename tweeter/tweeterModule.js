 const Tweeter = function () {
  let _posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  const getPosts = function () {
    return JSON.parse(JSON.stringify(_posts));
  };

  const getPost = function (postId) {
    return _posts.find((post) => post.id === postId);
  };

  const addPost = function (text) {
    const randomId = Math.random().toString().split('.')[1];
    _posts.push({ text: text, id: randomId, comments: [] });
  };

  const removePost = function (id) {
    _posts = _posts.filter((post) => (post.id) !== id);
  };

  const addComment = function (postId, text) {
    const commentId = Math.random().toString().split('.')[1];
    const post = getPost(postId);
    post.comments.push({ id: commentId, text: text });
  };

  const removeComment = function (postId, commentId) {
    const post = getPost(postId);
    post.comments = post.comments.filter(
      (comment) => comment.id !== commentId
    );

  };

  return { getPosts, addPost, removePost, addComment, removeComment };
};

