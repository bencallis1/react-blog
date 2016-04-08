/**
 * Created by Ben on 4/7/16.
 */
import React from 'react';
import Profile from './Profile/Profile';
import PhotoGrid from './Image-block/Image-block';
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
    componentDidMount(){
        getUserInfo(this.props.params.userid).then(function(data){
           console.log(data)
            //this.setState({
            //    usersBlogData: data.data
            //})
        }.bind(this));

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