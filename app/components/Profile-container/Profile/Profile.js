import React from 'react';
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
            <div className="">
                Hello
            </div>
        )
    }

}


export default Profile