import * as PostsAPIUtil from "../Util/postsApiUtil";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = category => dispatch =>
  PostsAPIUtil.fetchPosts(category)
    .then(posts => posts.json())
    .then(posts => dispatch(receivePosts(posts)))
    .catch(error => console.log(error));

export default fetchPosts;
