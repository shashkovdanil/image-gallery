import React, { PropTypes } from 'react';

const Photo = (props) => (
     <div className="flex-item">
         <figure>
             <img src={props.src} style={{ width: props.width }} />
             <figcaption>{props.name}</figcaption>
         </figure>
     </div>
);

Photo.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default Photo;
