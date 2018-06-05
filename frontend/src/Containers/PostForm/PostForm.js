import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions";
import uuidv1 from "uuid/v1";
import { Redirect } from "react-router";
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
      commentCount,
      titleError: "",
      selectError: "",
      bodyError: "",
      redirect: false
    };
  }
  async componentDidMount() {
    await this.props.fetchCategories();
  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    const {
      title,
      body,
      category,
      titleError,
      selectError,
      bodyError
    } = this.state;
    const {
      categories = [],
      isEdit = false,
      onCancel,
      onUpdate,
      updatePost,
      savePost
    } = this.props;

    const items = categories.map((items, i) => (
      <option key={i} value={items.name}>
        {items.name}
      </option>
    ));

    const onChangeTitle = event =>
      this.setState({ title: event.target.value, titleError: "" });
    const onChangeCategory = event =>
      this.setState({ category: event.target.value, selectError: "" });
    const onChangeBody = event =>
      this.setState({ body: event.target.value, bodyError: "" });

    const formValidation = () => {
      this.setState({
        titleError: !title.length > 0 ? "Please write a title!" : "",
        selectError:
          !category.length > 0 || category === "Select"
            ? "Please select a category!"
            : "",
        bodyError: !body.length > 0 ? "Please write a post!" : ""
      });
      return (
        !title.length > 0 ||
        !category.length > 0 ||
        category === "Select" ||
        !body.length > 0
      );
    };
    const onClickSave = async () => {
      const isError = await formValidation();
      if (!isError) {
        await savePost(this.state);
        this.setState({ redirect: true });
      }
    };
    const onClickUpdate = async () => {
      const isError = await formValidation();
      if (!isError) {
        await updatePost(this.props.item.id, this.state);
        await onUpdate();
      }
    };

    const onClickCancel = () => {
      onCancel ? onCancel() : this.setState({ redirect: true });
    };

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
              onChange={onChangeTitle}
            />
          </div>
          <div className="postError">{titleError}</div>
        </div>
        <div className="postformcategory">
          <label htmlFor="category">Category:</label>
          <div>
            <select
              name="category"
              value={category}
              onChange={onChangeCategory}
            >
              <option key="0">Select</option>
              {items}
            </select>
          </div>
        </div>
        <div className="postError">{selectError}</div>
        <div>
          <div>
            <textarea
              name="body"
              rows="4"
              cols="50"
              value={body}
              placeholder="Add your text here"
              onChange={onChangeBody}
            />
          </div>
          <div className="postError">{bodyError}</div>
        </div>

        <div className="postformedit">
          <div
            className="onsave link"
            onClick={isEdit ? onClickUpdate : onClickSave}
          >
            Save
          </div>
          <div onClick={onClickCancel} className="oncancel link">
            Cancel
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  const { author = "Anonymous" } = state.login;
  const { categories = [] } = state.categories;
  return { categories, author };
};

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
