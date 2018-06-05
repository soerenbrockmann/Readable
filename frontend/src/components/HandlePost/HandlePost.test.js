import React from "react";

describe("<HandlePost />", () => {
  const handlePost = jest.mock("./HandlePost", () => "HandlePost");

  it("renders properly", () => {
    expect(handlePost).toMatchSnapshot();
  });
});
