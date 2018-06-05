import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Votes from "../Votes";
import "./PostItem.css";
import FormatDate from "../FormatDate";

const PostItem = ({
  onDelete,
  onEdit,
  onDownVote,
  onUpVote,
  post: { timestamp, title, body, author, category, voteScore, commentCount },
  to,
  isClosedBtn = false,
  isCommentCount = false
}) => {
  return (
    <div className="postitem">
      <div className="postitemheader">
        {to && (
          <Link to={to}>
            <div className="title">{title}</div>
          </Link>
        )}
        {!to && <div className="title">{title}</div>}
        <div>
          <Link to={"/"} className="ondelete" onClick={onDelete}>
            Delete
          </Link>
        </div>
        <div className="onedit" onClick={onEdit}>
          Edit
        </div>
        {isClosedBtn && (
          <div>
            <Link to={"/"} className="onclose">
              Close
            </Link>
          </div>
        )}
      </div>
      <div className="meta">
        <div>{author} - </div> <FormatDate timestamp={timestamp} />
      </div>
      <div className="body">
        {body}
        {to && (
          <Link to={to}>
            <div className="readmore">...Read more</div>
          </Link>
        )}
      </div>
      <div className="postitemnav">
        <Votes
          onUpVote={onUpVote}
          onDownVote={onDownVote}
          voteScore={voteScore}
        />
        {isCommentCount && (
          <Link to={to}>
            <div className="commentcount">{commentCount} Comments</div>
          </Link>
        )}
        <div className="category">[{category}]</div>
      </div>
    </div>
  );
};

FormatDate.propTypes = {
  timestamp: PropTypes.number.isRequired
};

Votes.propTypes = {
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  voteScore: PropTypes.number
};

export default PostItem;
