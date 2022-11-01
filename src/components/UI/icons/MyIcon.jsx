import React from 'react';
import classes from './MyIcon.module.css';

const MyIcon = ({href, src, alt}) => {
    return (
        <a href={href} className={classes.icons__item} target="_blank">
            <object type="image/svg+xml" data={src} name={alt}>
                Your browser does not support SVG
            </object>
        </a>
    );
};

export default MyIcon;