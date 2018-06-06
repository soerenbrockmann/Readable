import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPosts, votePost, deletePost, updatePosts } from "../../actions";
import "./Posts.css";
import HandlePost from "../../components/HandlePost";
import Sort from "../Sort";
import Spinner from "../../components/Spinner";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    const { category = undefined } = this.props;
    await this.props.fetchPosts(category);
    await this.setState({ loading: false });
  }

  render() {
    const { votePost, deletePost, updatePosts, nextPosts } = this.props;

    const items = nextPosts.map((item, i) => (
      <div key={i}>
        <HandlePost
          post={item}
          to={`/${item.category}/${item.id}`}
          isCommentCount={true}
          isClosedBtn={false}
          onDelete={deletePost}
          updatePost={updatePosts}
          votePost={votePost}
        />
      </div>
    ));

    return (
      <div className="posts">
        <div className="postheader">
          <div className="posttitle">
            <h3>Posts</h3>
          </div>
          <div className="postsort">
            <Sort />
          </div>
        </div>
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && <div>{items}</div>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updatePosts: (id, post) => dispatch(updatePosts(id, post)),
  fetchPosts: category => dispatch(fetchPosts(category)),
  votePost: (id, option) => dispatch(votePost(id, option)),
  deletePost: id => dispatch(deletePost(id))
});

const mapStateToProps = state => {
  const { posts = [] } = state.posts;
  const { sortBy } = state.sort;
  const name = sortBy.split(",")[0] || "timestamp";
  const order = sortBy.split(",")[1] || "desc";
  const nextPosts = posts.slice().sort((a, b) => a[name] - b[name]);
  order === "desc" && nextPosts.reverse();
  return { nextPosts };
};

HandlePost.propTypes = {
  post: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  isCommentCount: PropTypes.bool.isRequired,
  isClosedBtn: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
