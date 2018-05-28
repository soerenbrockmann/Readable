import React from "react";
import PropTypes from "prop-types";
import "./PostsItem.css";
import FormatDate from "../FormatDate";

const PostsItem = props => {
  const { item } = props;
  const {
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    commentCount
  } = item;

  return (
    <div className="postsitem">
      <div className="title">{title}</div>
      <div className="meta">
        <div>{author} - </div> <FormatDate timestamp={timestamp} />
      </div>
      <div className="body">{body}</div>
      <div className="nav">
        <div className="votescore">{voteScore} Votes</div>
        <div className="commentcount">{commentCount} Comments</div>
        <div className="category">[{category}]</div>
      </div>
    </div>
  );
};

FormatDate.propTypes = {
  timestamp: PropTypes.number.isRequired
};

export default PostsItem;
