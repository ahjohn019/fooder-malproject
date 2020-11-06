//Control The Add On Food & Quantity
import React, { Component } from 'react';
import classes from './NasiController.module.css';
import axios from "axios";


class NasiController extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodermenu: []
        }
    }

    componentDidMount(){
        axios.get('/fooder_menu')
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
                    <img src="img/nasi_lemak_sample.jpg" alt="NasiLemak" className={classes.BlockImage}/>
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
                        <span><input id={fmenu.addon} type="checkbox" name="choice" value={fmenu.price_addon} onClick={this.props.changed} /></span>
                        <label>{fmenu.addon}</label>
                        <p>+ {fmenu.price_addon}</p>         
                    </div>)
                }
                </div>
            </div>
        );
    }
}

export default NasiController;


// componentDidMount(){
    //     axios.get('/api/foodmenu')
    //         .then(response => {
    //             this.setState({foodmenu:response.data});
    //         }).catch(error=> {
    //             this.setState({error:true})
    //         });
    // }