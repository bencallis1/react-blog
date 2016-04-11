import React from 'react';
import {increment,decrement} from '../../../Redux/Actions/counter';

require('./Profile.css');


const Profile = ({user}) => {
    let style = user.textColor !== null ? {color: user.textColor} : "";
    return (
        <div className="profile-container">
            <div className="profile-image-container">
            <img src={user.image} alt={user.username}/>
            </div>
            <div className="profile-user-info">
                <h1 className="profile-user-name">{user.username}</h1>
                <p className="profile-user-intro">{user.intro}</p>
                <div className="like-count-container">
                  <div className="heart-icon"></div>
                    <h1 style={style}>{user.likeCount}</h1>
                </div>


            </div>
        </div>
    );
};


Profile.propTypes = {
    user: React.PropTypes.object.isRequired
};



export default Profile