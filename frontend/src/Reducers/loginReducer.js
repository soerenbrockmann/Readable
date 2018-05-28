const initialState = {
  author: undefined
};

const loginReducer = (state = initialState, action) => {
  const { author } = action;
  switch (action.type) {
    case "SAVE_AUTHOR":
      return { ...state, author };
    default:
      return state;
  }
};

export default loginReducer;
