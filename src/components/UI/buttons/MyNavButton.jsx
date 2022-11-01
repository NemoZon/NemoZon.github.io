import React from 'react';
import classes from './MyNavButton.module.css';

const MyButton = ({children, state, ...props}) => {
    let classState = "";
    switch (state) {
        case 'active':
            classState = classes.nav__item_active
            break;
        case 'disabled':
            classState = classes.nav__item_disabled
            break;
        case 'menu':
            classState = classes.nav__item_menu
            break;
    
        default:
            break;
    }
    return (
        <button {...props} className={classes.nav__item + ` ${classState}`}>
            {children}
        </button>
    );
};

export default MyButton;