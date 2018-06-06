import React from "react";

describe("<Sort />", () => {
  const sort = jest.mock("./Sort", () => "Sort");

  it("renders properly", () => {
    expect(sort).toMatchSnapshot();
  });
});
