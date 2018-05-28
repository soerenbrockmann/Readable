const initialState = {
  post: {}
};

const handlePostReducer = (state = initialState, action) => {
  const { post } = action;
  switch (action.type) {
    case "RECEIVE_POST":
      return { ...state, post };
    default:
      return state;
  }
};

export default handlePostReducer;
