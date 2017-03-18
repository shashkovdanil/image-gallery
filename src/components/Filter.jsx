import React, { Component } from 'react';

import css from '../styles/Filter.less';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: '',
  }

  handleChange = (e) => {
    let filterQuery = e.target.value;
    this.setState({
      value: filterQuery,
    });
    this.props.handleFilter(filterQuery);
  }

  render() {
    return(
      <div className="filter-wrapper">
        <input type="text"
          placeholder="...filter"
          className="filter-bar"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default Filter;
