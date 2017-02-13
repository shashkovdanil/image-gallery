import React, { PropTypes } from 'react';

import Image from './Image';

const ImagesGrid = (props) => (
    <div className="flex-container">
        {
            props.images.map(
                (image) =>
                    <Image key={image.id}
                           src={image.src}
                           width={props.imageWidth}
                           name={image.name} />
            )
        }
    </div>
);

ImagesGrid.propTypes = {
    images: PropTypes.array.isRequired,
    imageWidth: PropTypes.string.isRequired,
};

export default ImagesGrid;
