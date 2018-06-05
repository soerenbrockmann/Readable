import React, { Component } from "react";
import { connect } from "react-redux";
import { updateComment } from "../../actions";
import * as CommentsAPIUtil from "../../util/commentsApiUtil";
import Spinner from "../../components/Spinner";
import CommentForm from "../../components/CommentForm";
import "./EditComment.css";

class EditComment extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      commentDetails: { id: "", body: "", parentId: "" }
    };
  }

  async componentDidMount() {
    if (this.props.commentId) {
      const { commentId, showComment } = this.props;
      await CommentsAPIUtil.fetchComment(commentId)
        .then(comment => comment.json())
        .then(comment => {
          const { id, body, parentId } = comment;
          this.setState({
            commentDetails: { id, body, parentId }
          });
        })
        .catch(() => showComment());
    }
    await this.setState({
      loading: false
    });
  }
  render() {
    const { showComment, updateComment, author } = this.props;
    const {
      loading,
      commentDetails: { id, body, parentId }
    } = this.state;

    return (
      <div className="commentorm">
        {loading === true && <Spinner />}
        {loading === false && (
          <CommentForm
            id={id}
            body={body}
            parentId={parentId}
            showComment={showComment}
            onComment={updateComment}
            author={author}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { commentDetails: comment } = state.comments;
  const { author = "Anonymous" } = state.login;
  return { author, comment };
};

const mapDispatchToProps = dispatch => ({
  updateComment: (commentId, comment) =>
    dispatch(updateComment(commentId, comment))
  // fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditComment);
