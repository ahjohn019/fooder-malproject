import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/Checkout/Checkout.module.css';
import { BsListTask } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

class Checkout extends Component {
    render() {
        return (
            <div className={classes.CheckoutContent}>
                <NavBar/>    
                    <h2>Order Summary</h2>
                    <div className={classes.CheckoutBlockSelector}>
                        <h3 className={classes.CheckoutTitle}>x3</h3>
                        <h3 className={classes.CheckoutTitle}>NasiLemak</h3>
                        <h3 className={classes.CheckoutPrice}>RM 8</h3>
                        <p>Local Food - RM 4</p>
                        <li>Peanut +1</li>
                        <li>Fried Chicken +2 </li>
                        <p>Remarks : Tak Mau Sayur La</p>
                        <button type="submit" className={classes.CheckoutEditButton}><BsListTask size={32}/></button>
                        <button type="submit" className={classes.CheckoutDeleteButton}><FaTimes size={32}/></button>
                        <hr />
                        <h3 className={classes.CheckoutTitle}>x3</h3>
                        <h3 className={classes.CheckoutTitle}>NasiLemak</h3>
                        <h3 className={classes.CheckoutPrice}>RM 8</h3>
                        <p>Local Food - RM 4</p>
                        <li>Peanut +1</li>
                        <li>Fried Chicken +2 </li>
                        <p>Remarks : Tak Mau Sayur La</p>
                        <button type="submit" className={classes.CheckoutEditButton}><BsListTask size={32}/></button>
                        <button type="submit" className={classes.CheckoutDeleteButton}><FaTimes size={32}/></button>
                        
                        <hr />
                        <h3 className={classes.CheckoutTitle}>Incl.Tax : </h3>
                        <h3 className={classes.CheckoutPrice}>RM 1</h3>
                        <br />
                        <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                        <h3 className={classes.CheckoutPrice}>RM 17</h3>
                    </div>


                <Footer />
            </div>
        );
    }
}

export default Checkout;