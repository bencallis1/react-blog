// make a image gid component that will take a img src and a link
// use .map over an array of image objects

import React, {PropTypes} from 'react';
require('./image-block.css');

const PhotoGrid = ({imageInfo}) => {
    return (
        <div>
            <h3> Here are the images</h3>
            <ul className="grid-list">
                {imageInfo.map((image, index) => {
                    return (
                        <li className="list-group-item" key={image.name}>
                            <img src={image.url} alt={image.name}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

PhotoGrid.propTypes = {
    imageInfo: React.PropTypes.array.isRequired
}



export default PhotoGrid