import * as CommentsAPIUtil from "../util/commentsApiUtil";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const editComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const addComment = comment => ({
  type: ADD_COMMENT,
  comment
});

export const fetchComments = postId => dispatch =>
  CommentsAPIUtil.fetchComments(postId)
    .then(comments => comments.json())
    .then(comments => dispatch(receiveComments(comments)))
    .catch(error => console.log(error));

export const saveComment = comment => dispatch =>
  CommentsAPIUtil.saveComment(comment)
    .then(comment => comment.json())
    .then(comment => dispatch(addComment(comment)))
    .catch(error => console.log(error));

export const deleteComment = id => dispatch =>
  CommentsAPIUtil.deleteComment(id)
    .then(comment => comment.json())
    .then(comment => dispatch(removeComment(comment)))
    .catch(error => console.log(error));

export const updateComment = (id, comment) => dispatch =>
  CommentsAPIUtil.updateComment(id, comment)
    .then(comment => comment.json())
    .then(comment => dispatch(editComment(comment)))
    .catch(error => console.log(error));

export const voteComment = (id, option) => dispatch =>
  CommentsAPIUtil.voteComment(id, option)
    .then(comment => comment.json())
    .then(comment => dispatch(editComment(comment)))
    .catch(error => console.log(error));
