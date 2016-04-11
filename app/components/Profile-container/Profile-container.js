/**
 * Created by Ben on 4/7/16.
 */
import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
require('./Profile-container.css');


class  ProfileContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cardData: [],
            userInfo: {},

        }
    }


    render(){
        return (
            <div className="main-profile-container">
                <Profile user={this.state.userInfo} />
                <PhotoGrid cardData={this.state.cardData} />
            </div>
        )
    }

}


export default ProfileContainer

