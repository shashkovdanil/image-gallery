import React, { PropTypes } from 'react';

import Image from './Image';

import '../styles/ImagesGrid.less';

const ImagesGrid = ({ images, width }) => (
  <div className="flex-container">
    {
      images.map(
        image =>
          <Image
            key={image.id}
            src={image.src}
            width={width}
            name={image.name}
          />,
      )
    }
  </div>
);

ImagesGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  width: PropTypes.string.isRequired,
};

export default ImagesGrid;
