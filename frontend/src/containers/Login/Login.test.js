import React from "react";

describe("<Login />", () => {
  const login = jest.mock("./Login", () => "Login");
  it("renders properly", () => {
    expect(login).toMatchSnapshot();
  });
});
