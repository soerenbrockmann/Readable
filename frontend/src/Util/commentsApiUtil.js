const host = "http://localhost:3001" || `${process.env.REACT_APP_BACKEND}`;

export const fetchComments = postId => {
  const url = `${host}/posts/${postId}/comments`;

  return fetch(url, {
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};
