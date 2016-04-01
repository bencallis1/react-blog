// make a image gid component that will take a img src and a link
// use .map over an array of image objects

import React, {PropTypes} from 'react';
require('./image-block.css');

const PhotoGrid = ({imageInfo}) => {
    return (
        <div>
            <ul className="grid-list">
                {imageInfo.map((image, index) => {
                    return (
                        <li className="list-group-item" >
                            <img src={image.link} alt={image.name}/>
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