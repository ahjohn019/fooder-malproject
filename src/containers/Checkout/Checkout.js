import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/Checkout/Checkout.module.css';
import axios from 'axios';


class Checkout extends Component {

    

    render() {
        return (
            <div className={classes.CheckoutSelector}>
                <NavBar />
                    <h2>Order List : </h2>
                <Footer />
            </div>
        );
    }
}

export default Checkout;