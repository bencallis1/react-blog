import React from 'react';
import {usersBlogData} from '../../utils/helpers'
import BlogImage from './Blog-image/Blog-image';
import BlogMeta from './Blog-meta/Blog-meta';
require('./Blog-intro-container.css');

class BlogIntroContainer extends React.Component {
    constructor(props){
        super(props);

        // We need to first set up our default state. This is usually done with empty data that will be populated
        // later. The state will be passed down to all the children components. You can think of
        // Container components as smart components that are responsible for getting the state and then passing the state down
        // to the children components. We will then access the state being passed to our children component via props. The children of a
        // component are able to inherit the state via props

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