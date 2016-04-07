/**
 * Created by Ben on 4/7/16.
 */
/**
 * Created by Ben on 4/7/16.
 */

import React from 'react';
require('./Blog-link.css');



const BlogLink = ({link}) => {
    let userProfileLink = 'prfolie/' + link.id;
    return (
        <div className="blog-link-container">
            <a className="blog-a-tag" href={userProfileLink}> view profile</a>
        </div>
    );
};

BlogLink.propTypes = {
    link: React.PropTypes.object.isRequired
};



export default BlogLink