import React from 'react';
import PhotoGrid from '../image-block/image-block';
import getImageInfo from '../../utils/helpers';


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
        this.setState({
            images:[
                {link: "http://i.imgur.com/qnrZywz.png"},
                {link: "http://i.imgur.com/n6L7NHH.png"},
                {link: "http://i.imgur.com/MLC2rKT.png"},
                {link: "http://i.imgur.com/QWXjj9r.png"},
                {link: "http://i.imgur.com/gqZ7D0N.png"},
                {link: "http://i.imgur.com/11Llp8Q.png"},
                {link: "http://i.imgur.com/QT0BNBP.png"},
                {link: "http://i.imgur.com/YN0TWva.png"},
                {link: "http://i.imgur.com/Yfi5mUk.png"},
                {link: "http://i.imgur.com/lgwnPrn.png"},
                {link: "http://i.imgur.com/tblnRoN.png"},
                {link: "http://i.imgur.com/24XSc6v.png"},


            ]
    })


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