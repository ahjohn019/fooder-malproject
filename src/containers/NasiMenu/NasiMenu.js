import React, { Component } from 'react';
import classes from './NasiMenu.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/UI/Button/ButtonConfirmation';
import NasiController from '../../components/NasiController/NasiController';

class NasiBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                peanut:1,
                fried_chicken:2,
                salty_egg:1.5,
                rice:2
            },
            baseprice: 4,
            quantity: 0,
            showquantity: true
        }
    }

    handlequantityIncrement = () => {
        this.setState({quantity: this.state.quantity + 1});
    }

    handlequantityDecrement = () => {
        if(this.state.quantity > 0){
            this.setState({quantity: this.state.quantity - 1});
        }
    }

    render() {
        //1. Navigation Bar [DONE]
        //2. Addon Bar [DONE]
        //3. Footer Bar

        // const test = Object.keys(this.state.ingredients)
        //             .map(key => {
        //                 return this.state.ingredients[key]
        //             });
       
        return (
            <div>
                <NavBar/>  
                <div>
                    <img src="img/nasi_lemak_sample.jpg" alt="NasiLemak" className={classes.BlockImage}/>
                </div>
                <div className={classes.BlockSelector}>
                    <h3>Nasi Lemak</h3>
                    <p>Base Price : RM {this.state.baseprice}</p>
                    
                </div>
                <div className={classes.BlockSelector}>
                    <NasiController ingredients={this.state.ingredients} />
                </div>

                <div className={classes.BlockSelector}>
                    <h3>Special Instructions</h3>
                    <input className={classes.SpecialInstructions} type="text" placeholder="Exp: No Vegetables..." ></input>
                </div>
                
                <div className={classes.BlockSelector}>
                    <h3>Quantity</h3>
                    <div className={classes.ButtonQuantityLeft}>
                        <button onClick={this.handlequantityDecrement}>Less</button>
                    </div>
                    <div className={classes.ButtonQuantity}>
                    {this.state.showquantity ? <h2>{this.state.quantity}</h2> : ""}
                    </div>
                    <div className={classes.ButtonQuantity}>
                        <button onClick={this.handlequantityIncrement}>More</button>
                    </div>
                </div>

                
                <Button>Submit</Button>
            </div>
        );
    }
}

export default NasiBuilder