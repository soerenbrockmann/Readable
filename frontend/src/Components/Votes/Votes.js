import React from "react";
import "./Votes.css";

const Votes = ({ onUpVote, onDownVote, voteScore }) => {
  return (
    <div className="votes">
      <div className="upvote" onClick={onUpVote}>
        Upvote
      </div>
      {voteScore >= 0 && <div className="votescore">({voteScore})</div>}
      <div className="downvote" onClick={onDownVote}>
        Downvote
      </div>
      {voteScore < 0 && <div className="votescore">({voteScore})</div>}
    </div>
  );
};

export default Votes;
