const initialState = {
  posts: [],
  postDetails: {}
};

const postsReducer = (state = initialState, action) => {
  const { postDetails = {}, posts = [], parentId = "" } = action;

  switch (action.type) {
    case "RECEIVE_POSTS": {
      return {
        ...state,
        posts
      };
    }
    case "UPDATE_POSTS": {
      return {
        ...state,
        posts: state.posts.map(
          item => (item.id === postDetails.id ? postDetails : item)
        )
      };
    }
    case "VOTE_POST": {
      return {
        ...state,
        posts: state.posts.map(
          item => (item.id === postDetails.id ? postDetails : item)
        )
      };
    }
    case "VOTE_POST_DETAILS": {
      return { ...state, postDetails };
    }
    case "RECEIVE_POST_DETAILS": {
      return { ...state, postDetails };
    }
    case "UPDATE_POST_DETAILS": {
      return { ...state, postDetails };
    }

    case "INCREASE_COMMENT_COUNT": {
      const increaseCount = item => {
        item.commentCount++;
        return item;
      };
      return {
        ...state,
        posts: state.posts.map(
          item => (item.id === parentId ? increaseCount(item) : item)
        ),
        postDetails: increaseCount(state.postDetails)
      };
    }
    case "DECREASE_COMMENT_COUNT": {
      const decreaseCount = item => {
        item.commentCount--;
        return item;
      };
      return {
        ...state,
        posts: state.posts.map(
          item => (item.id === parentId ? decreaseCount(item) : item)
        ),
        postDetails: decreaseCount(state.postDetails)
      };
    }
    default:
      return state;
  }
};

export default postsReducer;
