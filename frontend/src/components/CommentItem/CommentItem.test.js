import React from "react";
import { shallow } from "enzyme";
import CommentItem from "./CommentItem";

describe("<CommentItem />", () => {
  const onDelete = jest.fn();
  const onEdit = jest.fn();
  const onDownVote = jest.fn();
  const onUpVote = jest.fn();
  const item = {
    timestamp: 1468166872634,
    body: "",
    author: "",
    voteScore: 0
  };

  const commentItem = shallow(
    <CommentItem
      onDelete={onDelete}
      onEdit={onEdit}
      onDownVote={onDownVote}
      onUpVote={onUpVote}
      item={item}
    />
  );
  it("renders properly", () => {
    expect(commentItem).toMatchSnapshot();
  });
});
