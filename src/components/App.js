import React, { Component } from 'react';

import Filter from './Filter';
import PhotoGrid from './PhotosGrid';
import Slider from './Slider';
import photos from '../data/photos';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            visiblePhotos: photos,
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
        let filteredPhotos = photos.filter(
            (photo) => (
                photo.name.indexOf(filter.toLowerCase()) !== -1
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
                <Filter value={this.state.filter}
                        filterPhotos={this.handleFilter} />
                <PhotoGrid photos={this.state.visiblePhotos}
                           changedWidth={this.state.width} />
            </div>
        );
    }
}

export default App;
