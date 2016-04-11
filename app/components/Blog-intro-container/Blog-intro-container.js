import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';
require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            usersBlogData: []

        }
    }

    componentDidMount(){
        this.init()
    }

    init(){

        usersBlogData().then(function(data){
            this.setState({
                usersBlogData: data.data
            })
        }.bind(this));
    }

    render(){
        return (
            <div className="Blog-intro-main-container">
                {this.state.usersBlogData.map((data,index) => {
                    const style = index % 2 !== 0 ? {direction: "rtl", textAlign: "end"} : {};
                    return (
                        <div className="Blog-intro" key={data.id} style={style}>
                            <BlogMeta metaInfo={data} />
                            <BlogImage blogInfo={data} />
                        </div>
                    )
                })}

            </div>
        )
    }
}


export default BlogIntroContainer