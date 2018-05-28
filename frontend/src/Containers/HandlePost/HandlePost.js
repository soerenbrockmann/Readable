import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { fetchPost, receivePost, deletePost, votePost } from "../../Actions";
import "./HandlePost.css";
import ShowPost from "../../Components/ShowPost";
import PostForm from "../PostForm";
import Comments from "../Comments";
import Error from "../../Components/Error";
import Spinner from "../../Components/Spinner";

class HandlePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.action,
      loading: true
    };
  }
  async componentDidMount() {
    const { id } = this.props;
    const { option } = this.state;
    option !== "create" && (await this.props.fetchPost(id));
    await this.setState({ loading: false });
  }
  render() {
    const { option } = this.state;
    const error =
      Object.keys(this.props.post).length === 0 && this.state.loading === false;
    if (option !== "create" && error) return <Error />;

    const showPost = () => this.setState({ option: "show" });
    const { id } = this.props;
    return (
      <div className="handlepost">
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && (
          <div>
            {this.state.option === "show" && (
              <ShowPost
                item={this.props.post}
                onEdit={() => this.setState({ option: "edit" })}
                onUpVote={() =>
                  this.props.votePost(this.props.post.id, {
                    option: "upVote"
                  })
                }
                onDownVote={() =>
                  this.props.votePost(this.props.post.id, {
                    option: "downVote"
                  })
                }
                onDelete={() => this.props.deletePost(this.props.post.id)}
              />
            )}
            {this.state.option === "edit" && (
              <PostForm
                item={this.props.post}
                isEdit={true}
                showPost={showPost}
              />
            )}
            {this.state.option === "create" && <PostForm showPost={showPost} />}
            {this.state.option !== "create" && <Comments postId={id} />}
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPost: post => dispatch(fetchPost(post)),
  votePost: (id, option) => dispatch(votePost(id, option)),
  receivePost: post => dispatch(receivePost(post)),
  deletePost: id => dispatch(deletePost(id))
});

const mapStateToProps = state => {
  const { post } = state.selectedPost;
  const { categories = [] } = state.categories;
  return { post, categories };
};

ShowPost.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onUpVote: PropTypes.func.isRequired,
  onDownVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

PostForm.propTypes = {
  item: PropTypes.object,
  isEdit: PropTypes.bool,
  showPost: PropTypes.func.isRequired
};

Comments.propTypes = {
  postId: PropTypes.string
};
export default connect(mapStateToProps, mapDispatchToProps)(HandlePost);
