import React from "react";

describe("<EditComment />", () => {
  const editComment = jest.mock("./EditComment", () => "EditComment");
  it("renders properly", () => {
    expect(editComment).toMatchSnapshot();
  });
});
