export { default as fetchCategories } from "./categoriesAction";
export { default as fetchPosts } from "./postsAction";
export { default as fetchComments } from "./commentsAction";
export { default as setSort } from "./sortAction";
export {
  receivePost,
  savePost,
  deletePost,
  votePost,
  updatePost,
  default as fetchPost
} from "./handlePostAction";
export { default as saveAuthor } from "./loginAction";
export {
  saveComment,
  deleteComment,
  fetchComment,
  updateComment,
  voteComment
} from "./handleCommentAction";
