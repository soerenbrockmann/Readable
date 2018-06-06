import React from "react";

describe("<PostForm />", () => {
  const postForm = jest.mock("./PostForm", () => "PostForm");
  it("renders properly", () => {
    expect(postForm).toMatchSnapshot();
  });
});
