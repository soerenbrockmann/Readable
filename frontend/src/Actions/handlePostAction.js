import * as HandlePostAPIUtil from "../Util/handlePostApiUtil";

export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const savePost = post => dispatch =>
  HandlePostAPIUtil.savePost(post)
    .then(post => post.json())
    .then(post => dispatch(receivePost(post)))
    .catch(error => console.log(error));

export const updatePost = (id, post) => dispatch =>
  HandlePostAPIUtil.updatePost(id, post)
    .then(post => post.json())
    .then(post => dispatch(receivePost(post)))
    .catch(error => console.log(error));

export const fetchPost = id => dispatch =>
  HandlePostAPIUtil.fetchPost(id)
    .then(post => post.json())
    .then(post => dispatch(receivePost(post)))
    .catch(error => console.log(error));

export const deletePost = id => dispatch =>
  HandlePostAPIUtil.deletePost(id)
    .then(post => post.json())
    .then(post => dispatch(receivePost(post)))
    .then(post => console.log(post))
    .catch(error => console.log(error));

export const votePost = (id, option) => dispatch =>
  HandlePostAPIUtil.votePost(id, option)
    .then(post => post.json())
    .then(post => dispatch(receivePost(post)))
    .catch(error => console.log(error));

export default fetchPost;
