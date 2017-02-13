import React, { Component } from 'react';

import Filter from './Filter';
import ImagesGrid from './ImagesGrid';
import Slider from './Slider';

import images from '../data/images';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            visiblePhotos: images,
            filter: '',
            position: '4',
            width: '250px',
        };
    }

    handleFilter(e) {
        this.setState({
            filter: e.target.value,
        });
        this.renderFilteredPhotos(e.target.value);
    }

    handleChange(e) {
        this.setState({
            position: e.target.value,
        });
        this.changePhotoSize(e.target.value);
    }

    changePhotoSize(width) {
        let newWidthPhoto;
        switch(width) {
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

    renderFilteredPhotos(filter) {
        let filteredPhotos = images.filter(
            (image) => (
                image.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            )
        );
        this.setState({
            visiblePhotos: filteredPhotos,
        });
    }

    render() {
        return(
            <div>
                <Slider value={this.state.position}
                        changeQtyPhotosInRow={this.handleChange} />
                <Filter queryFilter={this.state.filter}
                        filterImages={this.handleFilter} />
                <ImagesGrid images={this.state.visiblePhotos}
                            imageWidth={this.state.width} />
            </div>
        );
    }
}

export default App;
