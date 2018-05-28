export const SAVE_AUTHOR = "SAVE_AUTHOR";

const saveAuthor = author => ({
  type: SAVE_AUTHOR,
  author
});

export default saveAuthor;
