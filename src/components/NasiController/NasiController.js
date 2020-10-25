//Control The Add On Food & Quantity
import { ChangeHistoryRounded } from '@material-ui/icons';
import React from 'react';
import classes from './NasiController.module.css';

const controls = [
    {label: 'Peanut', type:'peanut', price:1},
    {label: 'Fried Chicken', type: 'fried_chicken', price:2},
    {label: 'Salty Egg', type: 'salty_egg', price:1.5},
    {label: 'Rice', type: 'rice', price:1},
];

const nasiController = (props) => {
    return(
        <div>
            <h3 className={classes.addontitle}>Add-On Sides</h3>
            {controls.map(ctrl =>
                <div className={classes.checkboxOne}>
                    <span><input type="checkbox" name="choice" value={ctrl.price} onChange={props.changed} /></span>
                    <label>{ctrl.label}</label>         
                </div>
            )}
        </div>
    );
}

export default nasiController;