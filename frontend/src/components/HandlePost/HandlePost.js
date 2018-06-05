import React, { Component } from "react";
import PropTypes from "prop-types";
import "./HandlePost.css";
import PostItem from "../PostItem";
import PostForm from "../../containers/PostForm";

class HandlePost extends Component {
  constructor() {
    super();
    this.state = {
      option: "show"
    };
  }

  render() {
    const { option } = this.state;
    const {
      to,
      post,
      isCommentCount,
      isClosedBtn,
      votePost,
      updatePost,
      onDelete
    } = this.props;

    const showPost = () => this.setState({ option: "show" });
    const editPost = () => this.setState({ option: "edit" });
    const upVote = () => votePost(post.id, { option: "upVote" });
    const downVote = () => votePost(post.id, { option: "downVote" });
    const deletePost = () => onDelete(post.id);

    return (
      <div className="handlepost">
        <div>
          {option === "show" && (
            <PostItem
              post={post}
              to={to}
              onEdit={editPost}
              onUpVote={upVote}
              onDownVote={downVote}
              onDelete={deletePost}
              isClosedBtn={isClosedBtn}
              isCommentCount={isCommentCount}
            />
          )}
          {option === "edit" && (
            <PostForm
              item={post}
              isEdit={true}
              onCancel={showPost}
              onUpdate={showPost}
              updatePost={updatePost}
            />
          )}
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  to: PropTypes.string,
  post: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isClosedBtn: PropTypes.bool.isRequired,
  isCommentCount: PropTypes.bool.isRequired
};

PostForm.propTypes = {
  item: PropTypes.object,
  isEdit: PropTypes.bool,
  onCancel: PropTypes.func,
  onUpdate: PropTypes.func,
  updatePost: PropTypes.func
};

export default HandlePost;
