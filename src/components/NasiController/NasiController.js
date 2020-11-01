//Control The Add On Food & Quantity
import React from 'react';
import classes from './NasiController.module.css';

const controls = [
    {label: 'Peanut', type:'peanut', price:1},
    {label: 'Fried Chicken', type: 'fried_chicken', price:2},
    {label: 'Salty Egg', type: 'salty_egg', price:3},
    {label: 'Rice', type: 'rice', price:4},
];

const nasiController = (props) => {
    return(
        <div>
            <h3 className={classes.addontitle}>Add-On Sides</h3>
            {controls.map(ctrl =>
                <div key={ctrl.label} className={classes.checkboxOne}>
                    <span><input id={ctrl.label} type="checkbox" name="choice" value={ctrl.price} onClick={props.changed} /></span>
                    <label>{ctrl.label}</label>
                    <p>+ {ctrl.price}</p>         
                </div>
            )}
        </div>
    );
}

export default nasiController;