import React from 'react';
import classes from './MyStar.module.css';

const MyStar = (props) => {
    return (
        <div {...props} class='circle-container'>
            <div class='circle'></div>
        </div>
    );
}

export default MyStar;