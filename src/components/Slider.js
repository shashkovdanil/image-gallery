import React, { Component, PropTypes } from 'react';

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: '4',
        };
    }

    handleChange(e) {
        this.setState({
            initialValue: e.target.value,
        });
    }

    render() {
        return(
            <input type="range"
                   min="1"
                   max="5"
                   step="1"
                   onChange={this.props.changeQtyPhotosInRow}
                   value={this.props.value} />
        );
    }
}

export default Slider;
