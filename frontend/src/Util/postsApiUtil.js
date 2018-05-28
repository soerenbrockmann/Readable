const host = "http://localhost:3001" || `${process.env.REACT_APP_BACKEND}`;

export const fetchPosts = category => {
  const url =
    category === undefined ? `${host}/posts` : `${host}/${category}/posts`;

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
