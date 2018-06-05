import React from "react";
import { shallow } from "enzyme";
import PostItem from "./PostItem";

describe("<PostItem />", () => {
  const item = {
    timestamp: 1468166872634,
    title: "",
    body: "",
    author: "",
    category: "",
    voteScore: 1,
    commentCount: 2
  };

  const postItem = shallow(
    <PostItem
      post={item}
      onDelete={jest.fn()}
      onEdit={jest.fn()}
      onDownVote={jest.fn()}
      onUpVote={jest.fn()}
      to={"/"}
    />
  );
  it("renders properly", () => {
    expect(postItem).toMatchSnapshot();
  });
});
