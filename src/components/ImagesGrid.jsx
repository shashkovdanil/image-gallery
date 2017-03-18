import React, { PropTypes } from 'react';

import Image from './Image';

import css from '../styles/ImagesGrid.less';

const ImagesGrid = ({ store }) => (
  <div className="flex-container">
    {store.filterReducer.map(
        image => <Image
          key={image.id}
          src={image.src}
          name={image.name}
          width={store.sizeReducer}
        />,
      )}
  </div>
);

export default ImagesGrid;
