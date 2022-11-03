import React from 'react';
import MyStar from './UI/stars/MyStar';

const StarsList = (props) => {
    const nbr = 100;
    function stars(nbr) {
        let s = []
        for (let index = 0; index < nbr; index++) {
            s.push(<MyStar></MyStar>)
        }
        return s;
    }
    return ( 
        stars(nbr)
    );
}

export default StarsList;