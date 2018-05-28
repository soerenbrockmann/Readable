import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fetchPosts } from "../../Actions";
import "./Posts.css";
import PostsItem from "../../Components/PostsItem";
import Sort from "../Sort";
import Spinner from "../../Components/Spinner";

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    const { category } = this.props;
    await this.props.fetchPosts(category);
    await this.setState({ loading: false });
  }

  render() {
    const { posts } = this.props;
    const items = posts.map((item, i) => (
      <div key={i}>
        <Link to={`/posts/handlePost/show/${item.id}`}>
          <PostsItem item={item} />
        </Link>
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
  fetchPosts: category => dispatch(fetchPosts(category))
});

const mapStateToProps = state => {
  const { posts = [] } = state.posts;
  const { sortBy } = state.sort;
  const name = sortBy.split(",")[0] || "timestamp";
  const order = sortBy.split(",")[1] || "-";
  posts.sort((a, b) => (order === "+" ? a[name] - b[name] : a[name] + b[name]));
  return { posts, sortBy };
};

PostsItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
