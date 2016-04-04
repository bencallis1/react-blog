import React from 'react';
import PhotoGrid from '../image-block/image-block';
import Profile from '../Profile/Profile';
import {getUserInfo,getPosts} from '../../utils/helpers'
require('./Home.css');

class Home extends React.Component {
    constructor(props){
        super(props);
        // We need to first set up our default state. This is usually done with empty data that will be populated
        // later. The state will be passed down to all the children components. You can think of
        // Container components as smart components that are responsible for getting the state and then passing the state down
        // to the children components. We will then access the state being passed to our children component via props. The children of a
        // component are able to inherit the state via props

        this.state = {
            cardData: [],
            userInfo: {},
            intro: ''
        }
    }

    componentDidMount(){
        this.init()
    }

    init(){
        getPosts().then(function(data){
            this.setState({
                cardData: data.data
            })
            }.bind(this));
        getUserInfo().then(function(data){
            console.log(data.data)
            this.setState({
                userInfo: data.data
            })
        }.bind(this));

    }

    render(){
        return (
            <div className="main-home-container">
                <Profile user={this.state.userInfo}  />
                <PhotoGrid cardData={this.state.cardData} />

            </div>
        )
    }

}


export default Home