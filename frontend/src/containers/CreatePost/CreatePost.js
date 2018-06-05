import React, { Component } from "react";
import { connect } from "react-redux";
import { savePost } from "../../actions";
import "./CreatePost.css";
import PostForm from "../../containers/PostForm";

class CreatePost extends Component {
  render() {
    const { savePost } = this.props;
    return (
      <div className="createpost">
        <PostForm savePost={savePost} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  savePost: post => dispatch(savePost(post))
});

export default connect(
  null,
  mapDispatchToProps
)(CreatePost);
