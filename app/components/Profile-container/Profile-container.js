/**
 * Created by Ben on 4/7/16.
 */
import React from 'react';
import Profile from './Profile/Profile';
import ImageBlock from 'Image-block/Image-block';
import {getUserInfo,getPosts} from '../../utils/helpers'
require('./Profile-container.css');

class  ProfileContainer extends React.Component {
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


export default ProfileContainer