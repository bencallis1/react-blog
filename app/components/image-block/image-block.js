// make a image gid component that will take a img src and a link
// use .map over an array of image objects

import React, {PropTypes} from 'react';
import styles from './image-block.css';

class PhotoGrid extends React.Component {
    static propTypes = {
        photos : PropTypes.array /* { src, id, bigSrc}*/,
        columns : PropTypes.number,
        InformationElement : React.PropTypes.func
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
                {this.getFullScreenImage(this.state.fullScreenImage)}
            </div>
        );
    }

    getGridElements() {
        const {photos}  = this.props;
        const classNames = this.isShowInfo() ? [styles.imageGridItem, styles.column1] : [styles.imageGridItem];
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
        const classNames = this.isShowInfo() ? [styles.imageWrapper, styles.column1Image] : [styles.imageWrapper];
        const style = {backgroundImage : `url(${photo.src})`};

        return (
            <div >
                <div className={classNames.join(' ')}
                     onClick={this.image_clickHandler(photo).bind(this)}
                     style={style}>
                </div>
                {this.isShowInfo() ? <InformationElement photo={photo}/> : null }

            </div>
        );
    };

    getFullScreenImage = (src) => {
        const classNames = src ? [styles.lightbox] : [styles.hide,styles.lightbox ];
        return (
            <a href="#_" className={classNames.join(' ')} onClick={this.fullScreenImage_clickHandler.bind(this)}>
                <img src={src} />
            </a>);
    };


    image_clickHandler(photo) {
        return function () {
            this.setState({
                fullScreenImage : photo.bigSrc
            })
        }
    }

    fullScreenImage_clickHandler() {
        this.setState({
            fullScreenImage : null
        })
    }

    isShowInfo = () => this.props.columns == 1;
    getPercentWidth = () => 100 / this.props.columns - 1;
}


export default PhotoGrid