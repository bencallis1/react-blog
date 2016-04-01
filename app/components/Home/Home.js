import React from 'react';
import PhotoGrid from '../image-block/image-block';
import getImageInfo from '../../utils/helpers';
import feedData from '../../data/data.json';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: []

        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        getImageInfo()
            .then(function(data){
                console.log('this is the data' + data);
                this.setState({
                    images: data.items
                })
            }.bind(this))

    }

    render(){
        return (
            <h2 className="text-center">

                <PhotoGrid imageInfo={this.state.images} />
            </h2>
        )
    }

}


export default Home