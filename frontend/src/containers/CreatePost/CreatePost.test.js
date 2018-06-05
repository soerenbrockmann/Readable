import React from "react";

describe("<CreatePost />", () => {
  const createPost = jest.mock("./CreatePost", () => "CreatePost");

  it("renders properly", () => {
    expect(createPost).toMatchSnapshot();
  });
});
