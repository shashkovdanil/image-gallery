import React, { Component } from 'react';

import Filter from './Filter';
import ImagesGrid from './ImagesGrid';
import Slider from './Slider';

import images from '../data/images';

import css from '../styles/App.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChangeFilter = this.handleChangeFilter.bind(this);
        this.handleChangeSlider = this.handleChangeSlider.bind(this);
        this.state = {
            visibleImages: images,
            filter: '',
            position: '4',
            width: '250px',
        };
    }

    handleChangeFilter(e) {
        let filter = e.target.value;
        this.setState({
            filter,
        });
        this.renderFilteredImages(filter);
    }

    handleChangeSlider(e) {
        let position = e.target.value;
        this.setState({
            position,
        });
        this.changeImageSize(position);
    }

    changeImageSize(position) {
        let newWidthPhoto;
        switch(position) {
            case '1':
                newWidthPhoto = '1000px';
                break;
            case '2':
                newWidthPhoto = '500px';
                break;
            case '3':
                newWidthPhoto = '333px';
                break;
            case '4':
                newWidthPhoto = '250px';
                break;
            case '5':
                newWidthPhoto = '200px';
                break;
            default:
                newWidthPhoto = '250px';
        }
        this.setState({
            width: newWidthPhoto,
        });
    }

    renderFilteredImages(filter) {
        let filteredImages = images.filter(
            (image) => (
                image.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
        );
        this.setState({
            visibleImages: filteredImages,
        });
    }

    render() {
        return(
            <div>
                <Filter value={this.state.filter}
                        onChange={this.handleChangeFilter} />
                <Slider value={this.state.position}
                        onChange={this.handleChangeSlider} />
                <ImagesGrid images={this.state.visibleImages}
                            width={this.state.width} />
            </div>
        );
    }
}

export default App;
