/**
 * Created by Ben on 4/7/16.
 */

import React from 'react';
require('./Blog-link.css');


const BlogLink = ({blogInfo}) => {
    let userProfileLink = 'prfolie/' + blogInfo.id;
    return (
        <div className="blog-link-container">
            <a className="blog-a-tag" href={userProfileLink}> view profile</a>
        </div>
    );
};

BlogLink.propTypes = {
    blogInfo: React.PropTypes.object.isRequired
};



export default BlogLink