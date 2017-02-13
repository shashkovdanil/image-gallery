import React, { PropTypes } from 'react';

const Image = (props) => (
     <div className="flex-item">
         <figure style={{ height: props.width }}>
             <img src={props.src} style={{ width: props.width, backgroundSize: 'cover', height: 'inherit' }} />
             <figcaption>{props.name}</figcaption>
         </figure>
     </div>
);

Image.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Image;
