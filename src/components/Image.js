import React, { PropTypes } from 'react';

import css from '../styles/Image.less';

const Image = (props) => (
     <div className="flex-item">
         <figure>
             <img src={props.src} style={{ width: props.width }} />
             <figcaption>{props.name}</figcaption>
         </figure>
     </div>
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Image;
