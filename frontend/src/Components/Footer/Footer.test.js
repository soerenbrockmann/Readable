import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
  const footer = shallow(<Footer />);
  const currentYear = new Date().getFullYear().toString();

  it("renders the current year", () => {
    expect(footer.text()).toBe(currentYear);
  });

  it("renders properly", () => {
    expect(footer).toMatchSnapshot();
  });
});
