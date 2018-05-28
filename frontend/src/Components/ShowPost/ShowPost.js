import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Votes from "../Votes";
import FormatDate from "../FormatDate";
import "./ShowPost.css";

const ShowPost = props => {
  const { onDelete, onEdit, onDownVote, onUpVote } = props;
  const { item } = props;
  const {
    timestamp = Date.now(),
    title = "",
    body = "",
    author = "",
    category = "",
    voteScore = 0
  } = item;

  return (
    <div className="showpost">
      <div>
        <div className="showpostheader">
          <div className="title">{title}</div>
          <div>
            <Link to={"/"} className="ondelete" onClick={onDelete}>
              Delete
            </Link>
          </div>
          <div className="onedit" onClick={onEdit}>
            Edit
          </div>
          <div>
            <Link to={"/"} className="onclose">
              Close
            </Link>
          </div>
        </div>
        <div className="meta">
          <div>{author} - </div> <FormatDate timestamp={timestamp} />
        </div>
        <div className="body">{body}</div>
        <div className="showpostnav">
          <div>
            <Votes
              onUpVote={onUpVote}
              onDownVote={onDownVote}
              voteScore={voteScore}
            />
          </div>
          <div className="category">[{category}]</div>
        </div>
      </div>
    </div>
  );
};

Votes.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  voteScore: PropTypes.number
};

FormatDate.propTypes = {
  timestamp: PropTypes.number.isRequired
};

export default ShowPost;
