const initialState = {
  comment: {}
};

const handleCommentReducer = (state = initialState, action) => {
  const { comment } = action;

  switch (action.type) {
    case "RECEIVE_SINGLE_COMMENT":
      return { ...state, comment };
    default:
      return state;
  }
};

export default handleCommentReducer;
