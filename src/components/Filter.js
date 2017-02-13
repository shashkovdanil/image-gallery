import React, { PropTypes } from 'react';

const Filter = (props) => (
    <input type="text"
           onChange={props.filterImages}
           value={props.queryFilter} />
);

Filter.propTypes = {
    filterImages: PropTypes.func.isRequired,
    queryFilter: PropTypes.string,
};

export default Filter;
