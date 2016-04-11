import React from 'react';
import BlogIntro from '../Blog-intro-container/Blog-intro-container';
import {getUserInfo,getPosts} from '../../utils/helpers'
require('./Home.css');

class Home extends React.Component {
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
                <BlogIntro />
            </div>
        )
    }

}


export default Home