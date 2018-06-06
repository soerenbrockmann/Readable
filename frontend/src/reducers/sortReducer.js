const initialState = {
  sortBy: "timestamp,desc"
};

const sortReducer = (state = initialState, action) => {
  const { sortBy } = action;
  switch (action.type) {
    case "SET_SORT":
      return { ...state, sortBy };
    default:
      return state;
  }
};

export default sortReducer;
