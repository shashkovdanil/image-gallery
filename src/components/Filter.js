import React, { Component, PropTypes } from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: '',
        };
    }

    render() {
        return(
            <input type="text"
                   onChange={this.props.filterPhotos}
                   value={this.props.value} />
        );
    }
}

export default Filter;
