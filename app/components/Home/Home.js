import React from 'react';
import PhotoGrid from '../image-block/image-block';
import Profile from '../Profile/Profile';

require('./Home.css');

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            images: [],
            user: {},
            intro: ''
        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        this.setState({
            images:[
                {link: "http://i.imgur.com/qnrZywz.png"},
                {link: "http://i.imgur.com/n6L7NHH.png"},
                {link: "http://i.imgur.com/MLC2rKT.png"},
                {link: "http://i.imgur.com/11Llp8Q.png"},
                {link: "http://i.imgur.com/QT0BNBP.png"},
                {link: "http://i.imgur.com/YN0TWva.png"},
                {link: "http://i.imgur.com/Yfi5mUk.png"},
                {link: "http://i.imgur.com/lgwnPrn.png"},
                {link: "http://i.imgur.com/tblnRoN.png"},
                {link: "http://i.imgur.com/24XSc6v.png"},
                {link: "http://i.imgur.com/QWXjj9r.png"},
                {link: "http://i.imgur.com/gqZ7D0N.png"}

            ],

            intro: 'Hi, I am Carly and I Blog About Life',
            user: {userImage:"http://i.imgur.com/L5ZmyEk.png"}


    })
    }

    render(props){
        return (
            <div className="main-home-container">
                <PhotoGrid imageInfo={this.state.images} />
                <Profile user={this.state.user} intro={this.state.intro} links={this.state.links}/>
            </div>
        )
    }

}


export default Home