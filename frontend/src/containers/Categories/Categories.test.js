import React from "react";

describe("<Categories />", () => {
  const categories = jest.mock("./Categories", () => "Categories");

  it("renders properly", () => {
    expect(categories).toMatchSnapshot();
  });
});
