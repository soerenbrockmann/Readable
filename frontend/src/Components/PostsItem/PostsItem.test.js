import React from "react";
import { shallow } from "enzyme";
import PostsItem from "./PostsItem";

describe("<PostsItem />", () => {
  const item = {
    timestamp: 1468166872634,
    title: "",
    body: "",
    author: "",
    category: "",
    voteScore: 1,
    commentCount: 2
  };
  const postsItem = shallow(<PostsItem item={item} />);
  it("renders properly", () => {
    expect(postsItem).toMatchSnapshot();
  });
});
