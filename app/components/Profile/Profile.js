import React, {PropTypes} from 'react';
require('./Profile.css');

const Profile = ({user,intro}) => {
    return (
        <div className="profile-container">
            <img className="profile-image" src={user.userImage} alt=""/>
            <h3 className="profile-intro">{intro}</h3>
        </div>
    );
};

export default Profile