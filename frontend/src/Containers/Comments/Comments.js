import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchComments, deleteComment, voteComment } from "../../Actions";
import "./Comments.css";
import HandleComment from "../../Components/HandleComment";
import CommentForm from "../CommentForm";
import Spinner from "../../Components/Spinner";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    const { postId } = this.props;
    await this.props.fetchComments(postId);
    await this.setState({ loading: false });
  }

  render() {
    const { postId } = this.props;
    const { comments, deleteComment } = this.props;
    const items = comments.map((item, i) => (
      <div key={i}>
        <HandleComment
          item={item}
          onDelete={() => deleteComment(item.id)}
          onUpVote={() => this.props.voteComment(item.id, { option: "upVote" })}
          onDownVote={() =>
            this.props.voteComment(item.id, { option: "downVote" })
          }
        />
      </div>
    ));

    return (
      <div className="comments">
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && (
          <div>
            <h3>{`Comments (${comments.length})`}</h3>
            {items}
            <CommentForm postId={postId} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  voteComment: (id, option) => dispatch(voteComment(id, option)),
  deleteComment: (commentId, comment) =>
    dispatch(deleteComment(commentId, comment))
});

const mapStateToProps = state => {
  const { comments } = state.comments;
  return { comments };
};

HandleComment.propTypes = {
  item: PropTypes.object.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

CommentForm.propTypes = {
  postId: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
