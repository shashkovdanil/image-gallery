import React, { PropTypes } from 'react';

import Image from './Image';

import css from '../styles/ImagesGrid.less';

const ImagesGrid = (props) => (
    <div className="flex-container">
        {
            props.images.map(
                (image) =>
                    <Image key={image.id}
                           src={image.src}
                           width={props.width}
                           name={image.name} />
            )
        }
    </div>
);

ImagesGrid.propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.string.isRequired,
};

export default ImagesGrid;
