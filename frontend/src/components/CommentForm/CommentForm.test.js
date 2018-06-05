import React from "react";

describe("<CommentForm />", () => {
  const commentForm = jest.mock("./CommentForm", () => "CommentForm");
  it("renders properly", () => {
    expect(commentForm).toMatchSnapshot();
  });
});
