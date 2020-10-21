import React from 'react';
import classes from './ButtonConfirmation.module.css';

const ButtonConfirmation = (props) => (
        <button className={classes.ButtonConfirmation}>
            {props.children}
        </button>
);

export default ButtonConfirmation;