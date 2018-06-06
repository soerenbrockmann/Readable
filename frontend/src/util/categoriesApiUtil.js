const host = "http://localhost:3001" || `${process.env.REACT_APP_BACKEND}`;

export const fetchCategories = () =>
  fetch(`${host}/categories`, {
    headers: {
      Authorization: "User Password",
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "",
      Host: host
    }
  });
