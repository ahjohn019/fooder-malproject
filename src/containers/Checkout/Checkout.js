import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/Checkout/Checkout.module.css';
import { BsListTask } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import axios from "axios";

class Checkout extends Component {

    constructor(props){
        super(props);
        this.state={
            foodercheckout:[],
            fooderaddon:[]
        }    
    }

    componentDidMount(){
        axios.get('/fooder_checkout')
            .then(response => {
                this.setState({
                    foodercheckout:response.data
                })
                
            }).catch(error=>{
                this.setState({error:true})
        });
    }

    deleteCheckoutHandler = (event) => {
        event.preventDefault();
        let _checkoutDeleteButtonId = event.currentTarget.id

        axios.delete(`/fooder_checkout/${_checkoutDeleteButtonId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        const deleteCheckout = this.state.foodercheckout.filter(fcheckout => fcheckout._id !== _checkoutDeleteButtonId);
        this.setState({foodercheckout: deleteCheckout})
    }

    
    render() {
        const _gettotalprice = this.state.foodercheckout.map(fcheckout => fcheckout.totalprice).reduce((sum,index)=>sum+index,0);

        return (
            <div className={classes.CheckoutContent}>
                <NavBar/>    
                    <h2>Order Summary</h2>
                    <div className={classes.CheckoutBlockSelector}>
                        {this.state.foodercheckout.map((fcheckout) =>
                            <div key={fcheckout._id}>
                                <h3 className={classes.CheckoutTitle}>x{fcheckout.quantity}</h3>
                                <h3 className={classes.CheckoutTitle}>{fcheckout.maindish}</h3>
                                <p className={classes.CheckoutPrice}>RM {fcheckout.totalprice}</p>
                                <p>{fcheckout.type} - RM {fcheckout.baseprice}</p>
                                {fcheckout.addon.map(fadd => <li key={fadd}>{fadd}</li>)}
                                <p>Remarks: {fcheckout.remarks}</p>
                                <button type="submit" className={classes.CheckoutEditButton} ><BsListTask size={32}/></button>
                                <button id={fcheckout._id} type="submit" className={classes.CheckoutDeleteButton} onClick={this.deleteCheckoutHandler}><FaTimes size={32}/></button>
                                <hr />
                            </div>
                        )}
                        <br />
                        <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                        <h3 className={classes.CheckoutPrice}>RM {_gettotalprice}</h3>
                    </div>

                <Footer />
            </div>
        );
    }
}

export default Checkout;