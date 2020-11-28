//Control The Add On Food & Quantity
import React, { Component } from 'react';
import classes from './FoodController.module.css';
import axios from "axios";
import {Checkbox, FormControlLabel} from '@material-ui/core';
import NasiLemakImg from '../../assets/images/nasi_lemak_sample.jpg';

class FoodController extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodermenu: []
        }
    }

    componentDidMount(){
        axios.get('/api/fooder_menu')
            .then(response => {
                this.setState({foodermenu:response.data});
            }).catch(error=> {
                this.setState({error:true})
            });
    }

    render() {
        return (
            <div>
                <div>
                    <img src={NasiLemakImg} alt="NasiLemak" className={classes.BlockImage}/>
                </div>
                <div className={classes.BlockSelector}>
                    <h3>Nasi Lemak</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non cursus libero. 
                        Sed eleifend, lacus in aliquet facilisis, mi felis lobortis massa, ac varius augue enim ac nibh. 
                        Aliquam tincidunt imperdiet erat, in consequat orci tempor in. 
                    </p>
                </div>
                <div className={classes.BlockSelector}>
                <h3 className={classes.addontitle}>Add-On Sides</h3>
                {
                    this.state.foodermenu.map(fmenu =>
                    <div key={fmenu.addon} className={classes.checkboxOne}>
                        <span>
                            <FormControlLabel
                            control=
                            {
                                <Checkbox
                                id={fmenu.addon}
                                name="choice"
                                value={fmenu.price_addon}
                                onChange={this.props.changed} 
                                label={fmenu.addon}
                                />
                            }
                             />
                        </span>
                        <label>{fmenu.addon} <p>+ {fmenu.price_addon}</p> </label>
                              
                    </div>)
                }
                </div>
            </div>
        );
    }
}

export default FoodController;
