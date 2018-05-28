const initialState = {
  posts: []
};

const postsReducer = (state = initialState, action) => {
  const { posts } = action;

  switch (action.type) {
    case "RECEIVE_POSTS":
      return { ...state, posts };
    default:
      return state;
  }
};

export default postsReducer;
