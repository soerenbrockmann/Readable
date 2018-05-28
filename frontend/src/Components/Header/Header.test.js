import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("<Header />", () => {
  const header = shallow(<Header />);

  it("renders a logo", () => {
    expect(header.find("Logo").length).toBe(1);
  });

  it("renders properly", () => {
    expect(header).toMatchSnapshot();
  });
});
