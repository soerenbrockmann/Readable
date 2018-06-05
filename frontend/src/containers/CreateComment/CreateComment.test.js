import React from "react";

describe("<CreateComment />", () => {
  const createComment = jest.mock("./CreateComment", () => "CreateComment");

  it("renders properly", () => {
    expect(createComment).toMatchSnapshot();
  });
});
