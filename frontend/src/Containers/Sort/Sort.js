import React, { Component } from "react";
import { connect } from "react-redux";
import { setSort } from "../../actions";
import sort from "./sortCriteria";
import "./Sort.css";

class Sort extends Component {
  render() {
    const items = sort.map((items, i) => (
      <option key={i} value={items.value}>
        {items.label}
      </option>
    ));

    return (
      <div className="sort">
        <h3>Sort By</h3>
        <select
          className="select"
          value={this.props.sortBy}
          onChange={e => this.props.setSort(e.target.value)}
        >
          {items}
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setSort: sortBy => dispatch(setSort(sortBy))
});

const mapStateToProps = state => {
  const { sortBy } = state.sort;
  return { sortBy };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sort);
