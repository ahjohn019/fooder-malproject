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
            showQuantity: true,
            purchasable:true,
            basePrice:4,
            modalshow: false,
            checkoutLabel: [],
            checkoutPrice : []
        };
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

        if(isChecked){
            basePrice += parseFloat(pricevalue) ; 
        } else {
            basePrice -= parseFloat(pricevalue) ;   
            checkoutLabel = checkoutLabel.filter(checklist => checklist !== pricelabel);    
            checkoutPrice = checkoutPrice.filter(checkprice => checkprice !== pricevalue);
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

    render() {
        //quantity of food base on normal price
        var totalPrice;
        let checkoutLabel = this.state.checkoutLabel;
        let checkoutPrice = this.state.checkoutPrice;
        let basePrice = this.state.basePrice;
        let quantity = this.state.quantity;

        //total price of ingredients
        totalPrice = basePrice * quantity;

        //list of checkout label multiply quantity
        const listCheckoutPrice = checkoutPrice.map((chkprice) => 
            <p>{chkprice * quantity}</p>
        );
    
        console.log(listCheckoutPrice);

        //list of checkout items
        const listCheckoutLabel = checkoutLabel.map((chklabel) =>
            <div>
                <span key={chklabel}>{chklabel}</span>
            </div>
        );
        
        return (
            <div className={classes.BlockContent}>
                <NavBar/>  
                <div>
                    <img src="img/nasi_lemak_sample.jpg" alt="NasiLemak" className={classes.BlockImage}/>
                </div>
                <div className={classes.BlockSelector}>
                    <h3>Nasi Lemak</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non cursus libero. 
                        Sed eleifend, lacus in aliquet facilisis, mi felis lobortis massa, ac varius augue enim ac nibh. 
                        Aliquam tincidunt imperdiet erat, in consequat orci tempor in. Nullam ut elementum nibh. 
                        Morbi risus magna, interdum nec sem congue, mollis tempus nunc. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Vestibulum in vehicula massa. Maecenas non risus ac ex ultrices volutpat.
                    </p>
                </div>
                
                <div className={classes.BlockSelector}>
                    <NasiController changed={this.checkboxIncrement} value={this.state.isChecked} quantity={quantity}/>
                </div>
                {listCheckoutPrice}
                <div className={classes.BlockSelector}>
                    <h3>Special Instructions</h3>
                    <textarea className={classes.SpecialInstructions} type="text" placeholder="Exp: No Vegetables..." ></textarea>
                </div>
                
                <div className={classes.BlockSelector}>
                    <h3>Quantity</h3>
                    <div className={classes.ButtonQuantityLeft}>
                        <button onClick={this.handlequantityDecrement} className={classes.ButtonLeft}>
                            Less
                        </button>
                    </div>
                    <div className={classes.ButtonQuantity}>
                    {this.state.showQuantity ? <h2>{this.state.quantity}</h2> : ""}
                    </div>
                    <div className={classes.ButtonQuantity}>
                        <button onClick={this.handlequantityIncrement}>More</button>
                    </div>
                </div>
            
                <Footer>
                    <Button 
                    totalPrice={totalPrice} 
                    quantity={quantity}  
                    listCheckoutLabel={listCheckoutLabel}
                    >
                        Your Item - RM {totalPrice} 
                    </Button>
                </Footer>
            </div>
        );
    }
}

export default NasiBuilder