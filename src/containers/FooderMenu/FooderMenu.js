import React, { Component } from 'react';
import classes from './FooderMenu.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/UI/Button/ButtonCheckout';
import FoodController from '../../components/FoodController/FoodController';
import Footer from '../../components/Footer/Footer';
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import {TextField} from '@material-ui/core';


class NasiBuilder extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showQuantity: true,
            basePrice:4,
            checkoutLabel: [],
            checkoutPrice : [],
            specialInstruction : "",
            charLeft: 50,
            maxChar: 50,
            foodercheckout:[]
        };
    }

    componentDidMount(){
        axios.get('/fooder_checkout')
            .then(response => {
                this.setState({
                    foodercheckout:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });
    }
   

    //get base price + addon price(by users)
    //if tick => add into base price else remove addon prices
    checkboxIncrement = (event) => {
        const pricelabel = event.target.id;
        const pricevalue = event.target.value;
        const isChecked = event.target.checked;
        let checkoutLabel = [...this.state.checkoutLabel, pricelabel];
        let checkoutPrice = [...this.state.checkoutPrice, pricevalue];
        let {basePrice} = this.state; 
        console.log(pricevalue)

        if(isChecked){
            basePrice += parseFloat(pricevalue) ; 
        } else {
            basePrice -= parseFloat(pricevalue) ;   
            checkoutLabel = checkoutLabel.filter(checklist => checklist !== pricelabel);  
        } 

        this.setState({basePrice, pricelabel: pricelabel, checkoutLabel: checkoutLabel, checkoutPrice: checkoutPrice});
    }


    handlequantityIncrement = () => {
        // add quantity value on food checkbox
        this.setState({quantity: this.state.quantity + 1});
    }

    handlequantityDecrement = () => {
        if(this.state.quantity > 1){
            this.setState({quantity: this.state.quantity - 1});
        }
    }

    textareaValueEvent = (event) => {
        let specialInstruction = event.target.value;
        let charCount = specialInstruction.length;
        let maxChar = this.state.maxChar;
        let charLeft = maxChar - charCount;

        this.setState({specialInstruction: specialInstruction, charLeft: charLeft});
    }


    render() {
        //quantity of food base on normal price
        var totalPrice;
        let checkoutLabel = this.state.checkoutLabel;
        let checkoutPrice = this.state.checkoutPrice;
        let basePrice = this.state.basePrice;
        let quantity = this.state.quantity;
        let specialInstruction = this.state.specialInstruction;
        const maxChar = this.state.maxChar;
        
        //total price of ingredients
        totalPrice = basePrice * quantity;

        //dict list of checkout items
        var listCheckoutDict = checkoutLabel.map(function(key,index){
            return {label:key, price:checkoutPrice[index]}
        });

        //count the length of checkout data
        const _gettotalcheckoutdata = this.state.foodercheckout.length;

        return (
            <div className={classes.BlockContent}>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>  

                <FoodController changed={this.checkboxIncrement} value={this.state.isChecked} quantity={quantity}/>      

                {/* Reusable Component */}
                <div className={classes.BlockSelector}>
                    <h3>Remarks</h3>
                    <br />
                        <TextField
                            required
                            id="outlined-multiline-static"
                            label="Special Instructions"
                            multiline
                            rows={4}
                            placeholder="Exp: No Vegetables..."
                            variant="outlined"
                            className={classes.SpecialInstructions}
                            value={specialInstruction} 
                            onChange={this.textareaValueEvent}
                            inputProps={{ maxLength: maxChar }}
                            
                        />
                    <br/>
                    <p className={classes.CharLeft}> {this.state.charLeft} words remaining</p>
                </div>
                
                <div className={classes.BlockSelector}>
                    <h3>Quantity</h3>
                    <div className={classes.BlockAdjustSelector}>
                        <div className={classes.ButtonQuantityLeft}>
                            <button onClick={this.handlequantityDecrement} className={classes.ButtonLeft}>
                                <FaMinus size={24}/>
                            </button>
                        </div>
                        <div className={classes.ButtonQuantityText}>
                            {this.state.showQuantity ? <h2>{this.state.quantity}</h2> : ""}
                        </div>
                        <div className={classes.ButtonQuantityRight}>
                            <button onClick={this.handlequantityIncrement}><FaPlus size={24}/></button>
                        </div>
                    </div>
                </div>
            
                <Footer>
                    <Button 
                        totalPrice={totalPrice} 
                        quantity={quantity}  
                        listCheckoutDict={listCheckoutDict}
                        specialInstruction={specialInstruction}
                    >
                        RM {totalPrice} 
                    </Button>
                </Footer>
            </div>
        );
    }
}

export default NasiBuilder