//Control The Add On Food & Quantity
import React from 'react';


const controls = [
    {label: 'peanut', type:'peanut'},
    {label: 'fried_chicken', type: 'fried_chicken'},
    {label: 'salty_egg', type: 'salty_egg'},
    {label: 'add_rice', type: 'add_rice'},
];

const nasiController = (props) => {
    console.log(controls);
    const listLabel = controls.map((ctrl)=>
        <li>{ctrl.label}</li>
    );
    return(
        <div>
            <h3>Add-On Sides</h3>
            <p><input name="peanut" type="checkbox" />Peanut +2.00</p>  
            <p><input name="fried_chicken" type="checkbox" />Fried Chicken +5.50</p>
            <p><input name="salty_egg" type="checkbox" />Fried Egg +1.50</p>              
            <p><input name="add_rice" type="checkbox" />Rice +2.00</p>
        </div>
    );
}

export default nasiController;