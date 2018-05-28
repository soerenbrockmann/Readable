import React from "react";
import { shallow } from "enzyme";
import Error from "./Error";

describe("<Error />", () => {
  const error = shallow(<Error />);

  it("renders properly", () => {
    expect(error).toMatchSnapshot();
  });
});
