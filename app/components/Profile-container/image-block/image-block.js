import React from 'react';
require('./Image-block.css');


const PhotoGrid = ({cardData}) => {
    return (
        <div className="list-container">
            <div className="grid-list">
                {cardData.map((data) => {
                    return (
                        //The Key here should be a id from our database
                        <div className="list-group-item" key={data.id}>
                            <div className="blog-image-container">
                                <img src={data.link} alt={data.name}/>
                            </div>
                            <div className="desc">
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
};



export default PhotoGrid

