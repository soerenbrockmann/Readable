import React, { Component } from "react";
import uuidv1 from "uuid/v1";
import { connect } from "react-redux";
import { savePost, fetchCategories, updatePost } from "../../Actions";
import { Link } from "react-router-dom";
import "./PostForm.css";

class PostForm extends Component {
  constructor(props) {
    super(props);
    const { item = {}, author } = this.props;
    const {
      id = uuidv1(),
      title = "",
      body = "",
      category = "",
      commentCount = 0
    } = item;
    this.state = {
      id,
      timestamp: Date.now(),
      title,
      body,
      author,
      category,
      commentCount
    };
  }
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    const { title, body, category } = this.state;
    const { categories = [], isEdit = false } = this.props;
    const items = categories.map((items, i) => (
      <option key={i} value={items.name}>
        {items.name}
      </option>
    ));
    return (
      <form className="postform">
        <div>
          <div>
            <input
              name="title"
              size="100"
              type="text"
              placeholder="Title"
              value={title}
              onChange={event => this.setState({ title: event.target.value })}
            />
          </div>
        </div>
        <div className="postformcategory">
          <label htmlFor="category">Category:</label>
          <div>
            <select
              name="category"
              value={category}
              onChange={event =>
                this.setState({ category: event.target.value })
              }
            >
              <option key="0">Select</option>
              {items}
            </select>
          </div>
        </div>
        <div>
          <div>
            <textarea
              name="body"
              rows="4"
              cols="50"
              value={body}
              placeholder="Add your text here"
              onChange={event => this.setState({ body: event.target.value })}
            />
          </div>
        </div>
        <div>
          <Link
            to="/"
            className="onsave link"
            onClick={async () => {
              isEdit
                ? this.props.updatePost(this.props.item.id, this.state)
                : this.props.savePost(this.state);
            }}
          >
            Save
          </Link>
          <Link to="/" className="oncancel link">
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { author = "Anonymous" } = state.login;
  const { categories = [] } = state.categories;
  return { author, categories };
};

const mapDispatchToProps = dispatch => ({
  savePost: post => dispatch(savePost(post)),
  updatePost: (id, post) => dispatch(updatePost(id, post)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
