import React, {PropTypes} from 'react';
require('./Profile.css');

const Profile = ({user}) => {
    return (
        <div className="profile-container">
            <h3 className="profile-intro">{user.intro}</h3>
            <img className="profile-image" src={user.image} alt=""/>
        </div>
    );
};

export default Profile