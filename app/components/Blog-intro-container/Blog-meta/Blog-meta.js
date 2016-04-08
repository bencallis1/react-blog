/**
 * Created by Ben on 4/7/16.
 */

import React from 'react';
require('./Blog-meta.css');



const BlogMeta = ({metaInfo}) => {
    let textColor = metaInfo.textColor;
    let style = textColor !== null ? {color: textColor} : "";
    return (


        <div className="blog-meta-container">
            <div className="blog-meta-inner-container">
            <h2 className="meta-title">{metaInfo.username}</h2>
            <p className="blog-meta-text">{metaInfo.intro}</p>
            <h2 className="blog-meta-like" style={style} >{metaInfo.likeCount} Likes</h2>
            </div>
        </div>
    );
};

BlogMeta.propTypes = {
    metaInfo: React.PropTypes.object.isRequired
};



export default BlogMeta