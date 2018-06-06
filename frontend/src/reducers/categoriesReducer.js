const initialState = {
  categories: []
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RECEIVE_CATEGORIES": {
      const { categories } = action;
      return { ...state, categories };
    }
    default:
      return state;
  }
};

export default categoriesReducer;
