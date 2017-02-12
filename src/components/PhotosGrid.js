import React, { PropTypes } from 'react';

import Photo from './Photo';

const PhotosGrid = (props) => (
    <div className="flex-container">
        {
            props.photos.map(
                (photo) => <Photo
                                key={photo.id}
                                src={photo.src}
                                width={props.changedWidth}
                                name={photo.name} />
            )
        }
    </div>
);

export default PhotosGrid;
