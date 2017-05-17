import React, { PropTypes } from 'react';

import '../styles/Image.less';

const Image = ({ src, width, name }) => (
  <div className="flex-item">
    <figure>
      <img src={src} style={{ width }} alt="oops..." />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
