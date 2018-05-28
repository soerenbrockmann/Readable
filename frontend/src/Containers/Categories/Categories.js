import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCategories } from "../../Actions";
import Spinner from "../../Components/Spinner";
import "./Categories.css";

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    await this.props.fetchCategories();
    await this.setState({ loading: false });
  }
  render() {
    const { categories = [] } = this.props;
    const items = categories.map((items, i) => (
      <li key={i}>
        <Link to={`/category/${items.path}`} className="categorieslink">
          {items.name}
        </Link>
      </li>
    ));
    return (
      <div className="categories">
        <div className="categoriestitle">
          <h3>Categories</h3>
        </div>
        {this.state.loading === true && <Spinner />}
        {this.state.loading === false && (
          <ul>
            <li key="all">
              <Link to={"/"} className="categorieslink">
                All
              </Link>
            </li>
            {items}
          </ul>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

const mapStateToProps = state => {
  const { categories = [] } = state.categories;

  return {
    selected: "",
    categories
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
