import React, {PropTypes} from 'react';
require('./image-block.css');

const PhotoGrid = ({imageInfo}) => {
    return (
        <div className="list-container">
            <div className="grid-list">
                {imageInfo.map((image) => {
                    return (
                        //The Key here should be a id from our database
                        <li className="list-group-item" key={image.link}>
                            <img src={image.link} alt={image.name}/>
                        </li>
                    )
                })}
            </div>
        </div>
    );
}

PhotoGrid.propTypes = {
    imageInfo: React.PropTypes.array.isRequired
}



export default PhotoGrid