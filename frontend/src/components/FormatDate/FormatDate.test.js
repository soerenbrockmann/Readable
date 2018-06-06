import React from "react";
import { shallow } from "enzyme";
import FormatDate from "./FormatDate";

describe("<FormatDate />", () => {
  const timestamp = 1527512775719;
  const formatDate = shallow(<FormatDate timestamp={timestamp} />);

  it("renders properly", () => {
    expect(formatDate).toMatchSnapshot();
  });
});
