import React, { Component } from 'react';
import classes from './FooderMenu.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/UI/Button/ButtonCheckout';
import Footer from '../../components/Footer/Footer';
import { FaMinus, FaPlus } from "react-icons/fa";
import axios from "axios";
import {TextField} from '@material-ui/core';
import {Checkbox, FormControlLabel} from '@material-ui/core';
import NasiLemakImg from '../../assets/images/nasi_lemak_sample.jpg';

class NasiBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showQuantity: true,
            checkoutLabel: [],
            checkoutPrice : [],
            specialInstruction : "",
            charLeft: 50,
            maxChar: 50,
            fooder_menu:[],
            fooder_maindish:[],
            fooder_baseprice:"",
            message_status:""
        };
    }

    componentDidMount(){
        const fooder_id = this.props.match.params._refmaindish

        axios.get(`/api/fooder_addon/${fooder_id}`)
            .then(response => {
                this.setState({fooder_menu:response.data});
            }).catch(error=> {
                this.setState({error:true})
        })

        axios.get(`/api/fooder_maindish/${fooder_id}`)
            .then(response => {
                this.setState({fooder_maindish:response.data,fooder_baseprice:response.data["baseprice"]});
            }).catch(error=> {
                this.setState({error:true})
        })

    }

    //get base price + addon price(by users)
    //if tick => add into base price else remove addon prices
    checkboxIncrement = (event) => {
        const pricelabel = event.target.id;
        const pricevalue = event.target.value;
        const isChecked = event.target.checked;
        let checkoutLabel = [...this.state.checkoutLabel, pricelabel];
        let checkoutPrice = [...this.state.checkoutPrice, pricevalue];
        let {fooder_baseprice} = this.state; 

        if(isChecked){
            fooder_baseprice += parseFloat(pricevalue) ; 
        } else {
            fooder_baseprice -= parseFloat(pricevalue) ;  
            checkoutLabel = checkoutLabel.filter(checklist => checklist !== pricelabel);  
        } 

        this.setState({fooder_baseprice, pricelabel: pricelabel, checkoutLabel: checkoutLabel, checkoutPrice: checkoutPrice});
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
        let basePrice = this.state.fooder_baseprice;
        let quantity = this.state.quantity;
        let specialInstruction = this.state.specialInstruction;
        const maxChar = this.state.maxChar;
        
        //total price of ingredients
        totalPrice = basePrice * quantity;

        //dict list of checkout items
        var listCheckoutDict = checkoutLabel.map(function(key,index){
            return {label:key, price:checkoutPrice[index]}
        });

        return (
            <div className={classes.BlockContent}>
                <NavBar />  
                <div className={classes.BlockImagePosition}>
                    <img src={NasiLemakImg} alt="NasiLemak" className={classes.BlockImage}/>
                </div>

                <div className={classes.BlockSelector}>
                    <h3>{this.state.fooder_maindish["maindish"]}</h3>
                    <p>{this.state.fooder_maindish["description"]}</p>
                </div>     

                <div className={classes.BlockSelector}>
                    <h3 className={classes.addontitle}>Add-On Sides</h3>
                    
                    {
                        this.state.fooder_menu.map(fmenu =>
                            <div key={fmenu.addon} className={classes.checkboxOne}>
                                <span>
                                    <FormControlLabel
                                    control=
                                    {
                                        <Checkbox
                                        id={fmenu.addon}
                                        name="choice"
                                        value={fmenu.price_addon}
                                        onChange={this.checkboxIncrement} 
                                        label={fmenu.addon}
                                        />
                                    }
                                    />
                                </span>
                                <label>{fmenu.addon} <p>+ {fmenu.price_addon}</p> </label>            
                            </div>
                        )
                    }
                </div>

                {/* Reusable Component */}
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
                
                <Footer>
                    <Button 
                        fooderMaindish={this.state.fooder_maindish["maindish"]}
                        fooderType={this.state.fooder_maindish["type"]}
                        fooderbasePrice={this.state.fooder_maindish["baseprice"]}
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