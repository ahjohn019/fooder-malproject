import React, { Component } from 'react';
import classes from './NasiMenu.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/UI/Button/ButtonConfirmation';
import NasiController from '../../components/NasiController/NasiController';
import Footer from '../../components/Footer/Footer';

class NasiBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            showquantity: true,
            purchasable:true,
            baseprice:4
        };
    }
    //get base price + addon price(by users)
    //if tick => add into base price else remove addon prices
    checkboxIncrement = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
        let {baseprice} = this.state; 
        if(isChecked){
            baseprice += parseFloat(value) ;     
        } else {
            baseprice -= parseFloat(value) ;     
        } 
        this.setState({baseprice});
    }


    handlequantityIncrement = () => {
        //1. pass value(checkboxincrement)
        //2. add quantity value on food checkbox
        this.setState({quantity: this.state.quantity + 1});
    }

    handlequantityDecrement = () => {
        if(this.state.quantity > 1){
            this.setState({quantity: this.state.quantity - 1});
        }
    }

    render() {
        var totalPrice;
        if(this.handlequantityDecrement){
            let basePrice = this.state.baseprice;
            let quantity = this.state.quantity;
            totalPrice = basePrice * quantity;
        }
       
        return (
            <div className={classes.BlockContent}>
                <NavBar/>  
                <div>
                    <img src="img/nasi_lemak_sample.jpg" alt="NasiLemak" className={classes.BlockImage}/>
                </div>
                <div className={classes.BlockSelector}>
                    <h3>Nasi Lemak</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non cursus libero. Sed eleifend, lacus in aliquet facilisis, mi felis lobortis massa, ac varius augue enim ac nibh. Aliquam tincidunt imperdiet erat, in consequat orci tempor in. Nullam ut elementum nibh. Morbi risus magna, interdum nec sem congue, mollis tempus nunc. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum in vehicula massa. Maecenas non risus ac ex ultrices volutpat.</p>
                </div>

                <div className={classes.BlockSelector}>
                    <NasiController ingredients_price={this.state.ingredients_price} changed={this.checkboxIncrement} value={this.state.isChecked} />
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
                
                <Footer><Button>Add To Basket - RM{totalPrice}</Button></Footer>
            </div>
        );
    }
}

export default NasiBuilder