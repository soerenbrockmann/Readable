import React from "react";
import { shallow } from "enzyme";
import ShowPost from "./ShowPost";

describe("<ShowPost />", () => {
  const onDelete = jest.fn();
  const onEdit = jest.fn();
  const onDownVote = jest.fn();
  const onUpVote = jest.fn();
  const item = {
    timestamp: 1468166872634,
    title: "",
    body: "",
    author: "",
    category: "",
    voteScore: 0
  };
  const showPost = shallow(
    <ShowPost
      onDelete={onDelete}
      onEdit={onEdit}
      onDownVote={onDownVote}
      onUpVote={onUpVote}
      item={item}
    />
  );
  it("renders properly", () => {
    expect(showPost).toMatchSnapshot();
  });
});
