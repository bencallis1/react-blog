import React, {PropTypes} from 'react';
require('./image-block.css');

const PhotoGrid = ({cardData}) => {
    return (
        <div className="list-container">
            <div className="grid-list">
                {cardData.map((data) => {
                    return (
                        //The Key here should be a id from our database
                        <div className="list-group-item" key={data.id}>
                            <img src={data.link} alt={data.name}/>
                            <div class="desc">
                                <p>{data.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

PhotoGrid.propTypes = {
    cardData: React.PropTypes.array.isRequired
}



export default PhotoGrid