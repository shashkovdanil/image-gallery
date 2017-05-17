import React, { PropTypes } from 'react';
import '../styles/Slider.less';

const Slider = props => (
  <input
    type="range"
    min="1"
    max="5"
    step="1"
    onChange={props.onChange}
    value={props.value}
  />
);

Slider.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Slider;
