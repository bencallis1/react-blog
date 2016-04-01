// make a image gid component that will take a img src and a link
// use .map over an array of image objects

import React, {PropTypes} from 'react';
require('./image-block.css');

class PhotoGrid extends React.Component {
    static propTypes = {
        photos : PropTypes.array,
        columns : PropTypes.number
    };

    constructor() {
        super();
        this.state = {
            fullScreenImage : null
        }
    }

    render() {
        return (
            <div >
                {this.getGridElements()}
            </div>
        );
    }

    getGridElements() {
        const {photos}  = this.props;
        const className = "imageGridItem";
        const style = this.isShowInfo() ? {} : {width : this.getPercentWidth() + '%'};

        return photos.map(photo => (
            <div className={classNames.join(' ')}
                 style={style}
                 key={photo.id}>
                {this.getImageElement(photo)}
            </div>

        ));
    }

    getImageElement = (photo) => {
        const {InformationElement} = this.props;
        const style = {backgroundImage : `url(${photo.src})`};

        return (
            <div >
                <div className={classNames.join(' ')}
                     style={style}>
                </div>
                {this.isShowInfo() ? <InformationElement photo={photo}/> : null }

            </div>
        );
    };

}

// Add image event handler for the click

export default PhotoGrid