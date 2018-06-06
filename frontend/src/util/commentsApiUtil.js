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

export const fetchComment = id => {
  const url = `${host}/comments/${id}`;

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

export const saveComment = comment => {
  const url = `${host}/comments`;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(comment),
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};

export const updateComment = comment => {
  const url = `${host}/comments/${comment.id}`;

  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(comment),
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
};

export const deleteComment = id => {
  const url = `${host}/comments/${id}`;

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

export const voteComment = (id, option) => {
  const url = `${host}/comments/${id}`;
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
