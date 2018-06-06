import React from "react";

describe("<Comments />", () => {
  const comments = jest.mock("./Comments", () => "Comments");

  it("renders properly", () => {
    expect(comments).toMatchSnapshot();
  });
});
