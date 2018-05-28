const initialState = {
  comments: []
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_COMMENTS": {
      const { comments } = action;
      return { ...state, comments };
    }
    case "RECEIVE_COMMENT": {
      const { comment } = action;
      return {
        comments: [...state.comments, comment]
      };
    }
    case "DELETE_COMMENT": {
      const { comment } = action;
      return {
        comments: state.comments.filter(item => item.id !== comment.id)
      };
    }
    case "UPDATE_COMMENT": {
      const { comment } = action;
      return {
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
