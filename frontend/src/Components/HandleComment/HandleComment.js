import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HandleComment.css";
import CommentForm from "../../Containers/CommentForm";
import CommentItem from "../CommentItem";

class HandleComment extends Component {
  constructor() {
    super();
    this.state = {
      option: "show"
    };
  }

  render() {
    const showComment = () => this.setState({ option: "show" });
    const { id } = this.props.item;
    return (
      <div className="handlecomment">
        {this.state.option === "show" && (
          <CommentItem
            item={this.props.item}
            onEdit={() => this.setState({ option: "edit" })}
            onDelete={this.props.onDelete}
            onUpVote={this.props.onUpVote}
            onDownVote={this.props.onDownVote}
          />
        )}
        {this.state.option === "edit" && (
          <CommentForm commentId={id} showComment={showComment} />
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

CommentForm.propTypes = {
  commentId: PropTypes.string,
  showComment: PropTypes.func
};

export default HandleComment;
