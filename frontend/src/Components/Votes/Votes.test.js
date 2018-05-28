import React from "react";
import { shallow } from "enzyme";
import Votes from "./Votes";

describe("<Votes />", () => {
  const votes = shallow(<Votes />);
  it("renders properly", () => {
    expect(votes).toMatchSnapshot();
  });
});
