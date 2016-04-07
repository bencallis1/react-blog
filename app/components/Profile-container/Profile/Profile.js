import React from 'react';
import Profile from '../'
import {getUserInfo,getPosts} from '../../utils/helpers'
require('./Profile.css');

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
            userInfo: {},
            intro: ''
        }
    }

    render(){
        return (
            <div className="main-home-container">
               <Profile user={this.state.userInfo} />
                <PhotoGrid cardData={this.state.cardData} />
            </div>
        )
    }

}


export default Profile