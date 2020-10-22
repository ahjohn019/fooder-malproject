//Control The Add On Food & Quantity
import React from 'react';
import classes from './NasiController.module.css';

const controls = [
    {label: 'Peanut', type:'peanut'},
    {label: 'Fried Chicken', type: 'fried_chicken'},
    {label: 'Salty Egg', type: 'salty_egg'},
    {label: 'Rice', type: 'rice'},
];


const nasiController = (props) => {
    // const listLabel = controls.map((ctrl)=>
    //     <li>{ctrl.label}</li>
    // );

    return(
        <div>
            <h3>Add-On Sides</h3>
            {controls.map(ctrl =>
                <div className={classes.checkboxOne}>
                    <span><input type="checkbox" value={ctrl.type} onClick={e=> console.log(e.target.value)}/></span>
                    <label for="checkboxOneInput">{ctrl.label}</label>
                </div>
            )}
        </div>
    );
}

export default nasiController;