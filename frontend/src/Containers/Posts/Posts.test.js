import React from "react";

describe("<Posts />", () => {
  const posts = jest.mock("./Posts", () => "Posts");

  it("renders properly", () => {
    expect(posts).toMatchSnapshot();
  });
});
