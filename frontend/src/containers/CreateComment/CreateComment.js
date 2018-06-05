import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComment, increaseCommentCount } from "../../actions";
import "./CreateComment.css";
import CommentForm from "../../components/CommentForm";

class CreateComment extends Component {
  render() {
    const { saveComment, increaseCommentCount, postId, author } = this.props;
    return (
      <div className="createcomment">
        <CommentForm
          parentId={postId}
          increaseCommentCount={increaseCommentCount}
          onComment={saveComment}
          author={author}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment)),
  increaseCommentCount: parentId => dispatch(increaseCommentCount(parentId))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateComment);
