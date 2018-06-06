import * as PostsAPIUtil from "../util/postsApiUtil";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST_DETAILS = "RECEIVE_POST_DETAILS";
export const UPDATE_POSTS = "UPDATE_POSTS";
export const UPDATE_POST_DETAILS = "UPDATE_POST_DETAILS";
export const VOTE_POST_DETAILS = "VOTE_POST_DETAILS";
export const VOTE_POST = "VOTE_POST";
export const SORT_POSTS = "SORT_POSTS";
export const INCREASE_COMMENT_COUNT = "INCREASE_COMMENT_COUNT";
export const DECREASE_COMMENT_COUNT = "DECREASE_COMMENT_COUNT";

export const increaseCommentCount = parentId => ({
  type: INCREASE_COMMENT_COUNT,
  parentId
});

export const decreaseCommentCount = parentId => ({
  type: DECREASE_COMMENT_COUNT,
  parentId
});

export const receivePostsAction = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePostDetailsAction = postDetails => ({
  type: RECEIVE_POST_DETAILS,
  postDetails
});

export const votePostDetailsAction = postDetails => ({
  type: VOTE_POST_DETAILS,
  postDetails
});

export const votePostAction = postDetails => ({
  type: VOTE_POST,
  postDetails
});

export const updatePostDetailsAction = postDetails => ({
  type: UPDATE_POST_DETAILS,
  postDetails
});

export const updatePostsAction = postDetails => ({
  type: UPDATE_POSTS,
  postDetails
});

export const fetchPosts = category => dispatch =>
  PostsAPIUtil.fetchPosts(category)
    .then(posts => posts.json())
    .then(posts => dispatch(receivePostsAction(posts)))
    .catch(error => console.log(error));

export const savePost = post => dispatch =>
  PostsAPIUtil.savePost(post)
    .then(post => post.json())
    .then(post => dispatch(receivePostDetailsAction(post)))
    .catch(error => console.log(error));

export const updatePosts = (id, post) => dispatch =>
  PostsAPIUtil.updatePost(id, post)
    .then(post => post.json())
    .then(post => dispatch(updatePostsAction(post)))
    .catch(error => console.log(error));

export const updatePostDetails = (id, post) => dispatch =>
  PostsAPIUtil.updatePost(id, post)
    .then(post => post.json())
    .then(post => dispatch(updatePostDetailsAction(post)))
    .catch(error => console.log(error));

export const fetchPost = id => dispatch =>
  PostsAPIUtil.fetchPost(id)
    .then(post => post.json())
    .then(post => dispatch(receivePostDetailsAction(post)))
    .catch(error => console.log(error));

export const deletePost = id => dispatch =>
  PostsAPIUtil.deletePost(id).catch(error => console.log(error));

export const votePost = (id, option) => dispatch =>
  PostsAPIUtil.votePost(id, option)
    .then(post => post.json())
    .then(post => dispatch(votePostAction(post)))
    .catch(error => console.log(error));

export const votePostDetails = (id, option) => dispatch =>
  PostsAPIUtil.votePost(id, option)
    .then(post => post.json())
    .then(post => dispatch(votePostDetailsAction(post)))
    .catch(error => console.log(error));
