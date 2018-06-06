import React from "react";

describe("<HandleComment  />", () => {
  const handleComment = jest.mock("./HandleComment", () => "HandleComment");

  it("renders properly", () => {
    expect(handleComment).toMatchSnapshot();
  });
});
