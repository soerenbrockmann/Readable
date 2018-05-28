import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { connect } from "react-redux";
import { saveComment, fetchComment, updateComment } from "../../Actions";
import Spinner from "../../Components/Spinner";
import "./CommentForm.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    const { item = {}, author, postId } = this.props;
    const { id = uuidv1(), body = "" } = item;
    this.state = {
      id,
      parentId: postId,
      timestamp: Date.now(),
      body,
      author,
      loading: true
    };
  }

  async componentDidMount() {
    if (this.props.commentId) {
      await this.props.fetchComment(this.props.commentId);
      await this.setState({
        id: this.props.commentId,
        timestamp: Date.now(),
        body: this.props.comment.body,
        author: this.props.comment.author
      });
    }
    await this.setState({
      loading: false
    });
  }
  render() {
    const { body } = this.state;
    const { showComment } = this.props;
    return (
      <div className="commentorm">
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && (
          <form>
            <div>
              <div>
                <textarea
                  name="body"
                  rows="4"
                  cols="50"
                  value={body}
                  onChange={event =>
                    this.setState({ body: event.target.value })
                  }
                  placeholder="Add Comment"
                />
              </div>
            </div>
            <div>
              <button
                className="link"
                type="button"
                onClick={() => {
                  this.props.commentId
                    ? this.props.updateComment(this.props.commentId, this.state)
                    : this.props.saveComment(this.state);
                  showComment
                    ? showComment()
                    : this.setState({
                        id: uuidv1(),
                        timestamp: Date.now(),
                        body: ""
                      });
                }}
              >
                Comment
              </button>
              {this.state.body !== "" && (
                <button
                  className="link"
                  type="button"
                  onClick={() => {
                    this.props.commentId
                      ? showComment()
                      : this.setState({ body: "" });
                  }}
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { comment } = state.selectedComment;
  const { author = "Anonymous" } = state.login;
  return { author, comment };
};

const mapDispatchToProps = dispatch => ({
  saveComment: comment => dispatch(saveComment(comment)),
  updateComment: (commentId, comment) =>
    dispatch(updateComment(commentId, comment)),
  fetchComment: commentId => dispatch(fetchComment(commentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
