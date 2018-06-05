import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HandleComment.css";
import CommentItem from "../CommentItem";
import EditComment from "../../containers/EditComment";

class HandleComment extends Component {
  constructor() {
    super();
    this.state = {
      option: "show"
    };
  }

  render() {
    const {
      item,
      item: { id },
      onDelete,
      onUpVote,
      onDownVote
    } = this.props;

    const { option } = this.state;
    const showComment = () => this.setState({ option: "show" });
    const editPost = () => this.setState({ option: "edit" });

    return (
      <div className="handlecomment">
        {option === "show" && (
          <CommentItem
            item={item}
            onEdit={editPost}
            onDelete={onDelete}
            onUpVote={onUpVote}
            onDownVote={onDownVote}
          />
        )}
        {option === "edit" && (
          <EditComment commentId={id} showComment={showComment} />
        )}
      </div>
    );
  }
}

CommentItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

EditComment.propTypes = {
  commentId: PropTypes.string,
  showComment: PropTypes.func
};

export default HandleComment;
