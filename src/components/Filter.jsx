import React, { PropTypes } from 'react';

import '../styles/Filter.less';

const Filter = ({ onChange, value }) => (
  <div className="filter-wrapper">
    <input
      type="text"
      placeholder="...filter"
      className="filter-bar"
      onChange={onChange}
      value={value}
    />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Filter.defaultProps = {
  value: '',
};

export default Filter;
