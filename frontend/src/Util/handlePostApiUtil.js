const host = "http://localhost:3001" || `${process.env.REACT_APP_BACKEND}`;

export const fetchPost = id => {
  const url = `${host}/posts/${id}`;

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

export const savePost = post => {
  const url = `${host}/posts`;

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};

export const updatePost = (id, post) => {
  const url = `${host}/posts/${id}`;

  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};

export const deletePost = id => {
  const url = `${host}/posts/${id}`;

  return fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};

export const votePost = (id, option) => {
  const url = `${host}/posts/${id}`;

  return fetch(url, {
    method: "POST",
    body: JSON.stringify(option),
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};
