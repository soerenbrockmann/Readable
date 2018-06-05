import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import "./CommentForm.css";

class CommentForm extends Component {
  constructor(props) {
    super(props);

    const { id = uuidv1(), parentId, author, body = "" } = this.props;

    this.state = {
      id,
      parentId,
      timestamp: Date.now(),
      body,
      author,
      error: ""
    };
  }

  render() {
    const { body, error, parentId } = this.state;
    const { onComment, showComment, increaseCommentCount } = this.props;
    const onChangeBody = event =>
      this.setState({ body: event.target.value, error: "" });
    const reset = () => {
      this.setState({ body: "", id: uuidv1(), error: "" });
      showComment && showComment();
    };
    const onCancelClick = () => reset();
    const onCommentClick = () => {
      if (body.length > 0) {
        onComment(this.state);
        increaseCommentCount && increaseCommentCount(parentId);
        reset();
      } else {
        this.setState({ error: "Please write some words!" });
      }
    };
    return (
      <div className="commentorm">
        <form>
          <div>
            <div>
              <textarea
                name="body"
                rows="4"
                cols="50"
                value={body}
                onChange={onChangeBody}
                placeholder="Add Comment"
              />
            </div>
            <div className="commentError">{error}</div>
          </div>

          <div>
            <button className="link" type="button" onClick={onCommentClick}>
              Comment
            </button>
            {body.length > 0 && (
              <button className="link" type="button" onClick={onCancelClick}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}

export default CommentForm;
