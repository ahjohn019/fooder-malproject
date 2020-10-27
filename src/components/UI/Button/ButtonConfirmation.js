import React from 'react';
import classes from './ButtonConfirmation.module.css';

const ButtonConfirmation = (props) => (
        <button className={classes.ButtonConfirmation} type="submit" value="Submit">
            <p>{props.children}</p>
        </button>
);

export default ButtonConfirmation;