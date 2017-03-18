import React, { Component } from 'react';

import css from '../styles/Slider.less';

class Slider extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: '4',
  }

  handleChange = (e) => {
    let size = e.target.value;
    this.setState({
      value: size,
    });
    this.props.changeSize(size);
  }

  render() {
    return(
      <input type="range"
        min="1"
        max="5"
        step="1"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

export default Slider;
