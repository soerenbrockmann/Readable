import * as HandleCommentAPIUtil from "../Util/handleCommentApiUtil";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const UPDATE_COMMENT = "UPDATE_COMMENT";

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const editComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: DELETE_COMMENT,
  comment
});

export const saveComment = comment => dispatch =>
  HandleCommentAPIUtil.saveComment(comment)
    .then(comment => comment.json())
    .then(comment => dispatch(receiveComment(comment)))
    .catch(error => console.log(error));

export const fetchComment = id => dispatch =>
  HandleCommentAPIUtil.fetchComment(id)
    .then(comment => comment.json())
    .then(comment => dispatch(receiveSingleComment(comment)))
    .catch(error => console.log(error));

export const deleteComment = id => dispatch =>
  HandleCommentAPIUtil.deleteComment(id)
    .then(comment => comment.json())
    .then(comment => dispatch(removeComment(comment)))
    .catch(error => console.log(error));

export const updateComment = (id, comment) => dispatch =>
  HandleCommentAPIUtil.updateComment(id, comment)
    .then(comment => comment.json())
    .then(comment => dispatch(editComment(comment)))
    .catch(error => console.log(error));

export const voteComment = (id, option) => dispatch =>
  HandleCommentAPIUtil.voteComment(id, option)
    .then(comment => comment.json())
    .then(comment => dispatch(editComment(comment)))
    .catch(error => console.log(error));

export default fetchComment;
