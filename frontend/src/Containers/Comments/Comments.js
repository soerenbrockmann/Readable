import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchComments,
  deleteComment,
  voteComment,
  decreaseCommentCount
} from "../../actions";
import "./Comments.css";
import HandleComment from "../../components/HandleComment";
import CreateComment from "../CreateComment";
import Spinner from "../../components/Spinner";

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
    const {
      postId,
      comments,
      deleteComment,
      voteComment,
      commentCount,
      author,
      decreaseCommentCount
    } = this.props;
    const items = comments.map((item, i) => (
      <div key={i}>
        <HandleComment
          item={item}
          onDelete={() => {
            deleteComment(item.id);
            decreaseCommentCount(item.parentId);
          }}
          onUpVote={() => voteComment(item.id, { option: "upVote" })}
          onDownVote={() => voteComment(item.id, { option: "downVote" })}
        />
      </div>
    ));

    return (
      <div className="comments">
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && (
          <div>
            <h3>{`Comments (${commentCount})`}</h3>
            {items}
            <CreateComment postId={postId} author={author} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  voteComment: (id, option) => dispatch(voteComment(id, option)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  decreaseCommentCount: parentId => dispatch(decreaseCommentCount(parentId))
});

const mapStateToProps = state => {
  const { author = "Anonymous" } = state.login;
  const {
    postDetails: { commentCount }
  } = state.posts;
  const { comments } = state.comments;
  return { comments, commentCount, author };
};

HandleComment.propTypes = {
  item: PropTypes.object.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

CreateComment.propTypes = {
  postId: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
