import React from "react";
import PropTypes from "prop-types";
import "./CommentItem.css";
import Votes from "../Votes";
import FormatDate from "../FormatDate";

const CommentItem = props => {
  const { item, onDelete, onEdit, onUpVote, onDownVote } = props;
  const { timestamp, body, author, voteScore } = item;

  return (
    <div className="commentitem">
      <div>{body}</div>
      <div className="commentitemmain">
        <div className="meta">
          <div>{author} - </div>
          <FormatDate timestamp={timestamp} />
        </div>
        <div className="ondelete meta" onClick={onDelete}>
          Delete
        </div>
        <div className="ondelete meta" onClick={onEdit}>
          Edit
        </div>
      </div>

      <div>
        <Votes
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          voteScore={voteScore}
        />
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

export default CommentItem;
