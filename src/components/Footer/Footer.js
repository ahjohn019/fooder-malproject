import React from 'react';
import classes from './Footer.module.css';


const Footer = (props) => (
    <div className={classes.Footer}>
        {props.children}
    </div>
);

export default Footer;