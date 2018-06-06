export { default as fetchCategories } from "./categoriesAction";
export { default as setSort } from "./sortAction";
export {
  fetchPosts,
  receivePost,
  savePost,
  deletePost,
  votePost,
  votePostDetails,
  updatePosts,
  updatePostDetails,
  fetchPost,
  increaseCommentCount,
  decreaseCommentCount
} from "./postsAction";
export { default as saveAuthor } from "./loginAction";
export {
  fetchComments,
  saveComment,
  deleteComment,
  updateComment,
  voteComment
} from "./commentsAction";
