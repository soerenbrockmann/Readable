import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  fetchPost,
  deletePost,
  votePostDetails,
  updatePostDetails
} from "../../actions";
import "./PostDetails.css";
import HandlePost from "../../components/HandlePost";
import Comments from "../Comments";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    const { post_id, fetchPost } = this.props;
    await fetchPost(post_id);
    await this.setState({ loading: false });
  }
  render() {
    const { loading } = this.state;
    const {
      postDetails,
      post_id,
      deletePost,
      votePostDetails,
      updatePostDetails
    } = this.props;
    const error = Object.keys(postDetails).length === 0 && loading === false;
    if (error) return <Error />;

    return (
      <div className="postdetails">
        {loading === true && <Spinner />}
        {loading === false && (
          <div>
            <HandlePost
              post={postDetails}
              isCommentCount={false}
              isClosedBtn={true}
              onDelete={deletePost}
              votePost={votePostDetails}
              updatePost={updatePostDetails}
            />
            <Comments postId={post_id} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePostDetails: (id, post) => dispatch(updatePostDetails(id, post)),
  fetchPost: post => dispatch(fetchPost(post)),
  votePostDetails: (id, option) => dispatch(votePostDetails(id, option)),
  deletePost: id => dispatch(deletePost(id))
});

const mapStateToProps = state => {
  const { postDetails } = state.posts;
  return { postDetails };
};

HandlePost.propTypes = {
  post: PropTypes.object.isRequired,
  isCommentCount: PropTypes.bool.isRequired,
  isClosedBtn: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

Comments.propTypes = {
  postId: PropTypes.string
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
