//Control The Add On Food & Quantity
import React, { Component } from 'react';
import classes from './NasiController.module.css';
import axios from "axios";


class NasiController extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodmenu: []
        }
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/api/foodmenu')
            .then(response => {
                this.setState({foodmenu:response.data});
            }).catch(error=> {
                this.setState({error:true})
            });
    }


    render() {
        return (
            <div>
                <h3 className={classes.addontitle}>Add-On Sides</h3>
                {
                    this.state.foodmenu.map(fmenu =>
                    <div key={fmenu.label} className={classes.checkboxOne}>
                        <span><input id={fmenu.label} type="checkbox" name="choice" value={fmenu.price} onClick={this.props.changed} /></span>
                        <label>{fmenu.label}</label>
                        <p>+ {fmenu.price}</p>         
                    </div>
                )}
            </div>
        );
    }
}

export default NasiController;