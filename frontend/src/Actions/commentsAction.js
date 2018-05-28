import * as CommentsAPIUtil from "../Util/commentsApiUtil";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = postId => dispatch =>
  CommentsAPIUtil.fetchComments(postId)
    .then(comments => comments.json())
    .then(comments => dispatch(receiveComments(comments)))
    .catch(error => console.log(error));

export default fetchComments;
