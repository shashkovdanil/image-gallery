import React, { Component } from 'react';

import Filter from './Filter';
import ImagesGrid from './ImagesGrid';
import Slider from './Slider';

import images from '../data/images';

import '../styles/App.less';

class App extends Component {
  constructor() {
    super();
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
    const filter = e.target.value;
    this.setState({
      filter,
    });
    this.renderFilteredImages(filter);
  }

  handleChangeSlider(e) {
    const position = e.target.value;
    this.setState({
      position,
    });
    this.changeImageSize(position);
  }

  changeImageSize(position) {
    let width;
    switch (position) {
      case '1':
        width = '1000px';
        break;
      case '2':
        width = '500px';
        break;
      case '3':
        width = '333px';
        break;
      case '4':
        width = '250px';
        break;
      case '5':
        width = '200px';
        break;
      default:
        width = '250px';
    }
    this.setState({
      width,
    });
  }

  renderFilteredImages(filter) {
    const filteredImages = images.filter(
      image => (
          image.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
      ),
    );
    this.setState({
      visibleImages: filteredImages,
    });
  }

  render() {
    const { filter, position, visibleImages, width } = this.state;
    return (
      <div>
        <Filter
          value={filter}
          onChange={this.handleChangeFilter}
        />
        <Slider
          value={position}
          onChange={this.handleChangeSlider}
        />
        <ImagesGrid
          images={visibleImages}
          width={width}
        />
      </div>
    );
  }
}

export default App;
