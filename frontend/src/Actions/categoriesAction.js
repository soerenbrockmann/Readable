import * as CategoriesAPIUtil from "../Util/categoriesApiUtil";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  ...categories
});

export const fetchCategories = () => dispatch =>
  CategoriesAPIUtil.fetchCategories()
    .then(categories => categories.json())
    .then(categories => dispatch(receiveCategories(categories)))
    .catch(error => error);

export default fetchCategories;
