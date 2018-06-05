import React from "react";

describe("<PostDetails />", () => {
  const postDetails = jest.mock("./PostDetails", () => "PostDetails");

  it("renders properly", () => {
    expect(postDetails).toMatchSnapshot();
  });
});
