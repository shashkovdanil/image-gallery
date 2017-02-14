import React, { PropTypes } from 'react';

import css from '../styles/Filter.less';

const Filter = (props) => (
    <div className="filter-div">
        <input type="text"
           placeholder="...filter"
           className="filter-bar"
           onChange={props.onChange}
           value={props.value} />
    </div>
);

Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

export default Filter;
