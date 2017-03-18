import React from 'react';

import css from '../styles/Image.less';

const Image = ({ src, width, name }) => (
  <div className="flex-item">
    <figure>
      <img src={src} style={{ width }} />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

export default Image;
