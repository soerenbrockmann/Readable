import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Logo from "./Logo";

describe("<Logo />", () => {
  const logo = shallow(<Logo />);

  it("renders properly", () => {
    expect(logo).toMatchSnapshot();
  });
});
