const initialState = {
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  const { comments = [], comment = {} } = action;
  switch (action.type) {
    case "RECEIVE_COMMENTS": {
      return { ...state, comments };
    }
    case "ADD_COMMENT": {
      return {
        ...state,
        comments: [...state.comments, comment]
      };
    }
    case "DELETE_COMMENT": {
      return {
        ...state,
        comments: state.comments.filter(item => item.id !== comment.id)
      };
    }
    case "UPDATE_COMMENT": {
      return {
        ...state,
        comments: state.comments.map(
          item => (item.id === comment.id ? comment : item)
        )
      };
    }
    default:
      return state;
  }
};

export default commentsReducer;
