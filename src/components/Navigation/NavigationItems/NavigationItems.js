import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burder builder</NavigationItem>
            <NavigationItem link="/">Checkout</NavigationItem>

        </ul>
    );
};

export default navigationItems;
