import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/Payment/Payment.module.css';
import {TextField} from '@material-ui/core';

class Payment extends Component {



    render() {
        
        return (
            <div className={classes.PaymentContent}>
                <NavBar />
                    <form>
                        <div className={classes.CustomerDetailsBlockSelector}>
                            <h2>Delivery Address</h2>
                            <hr />
                            <TextField 
                                required id="full-name" 
                                label="Full Name" 
                                className={classes.formDetails} 
                                fullWidth
                            />
                            <TextField
                                required
                                id="outlined-multiline-static"
                                label="Street Address"
                                multiline
                                rows={4}
                                placeholder="Street Address"
                                variant="outlined"
                                className={classes.formDetails} 
                                fullWidth
                                />
                            <TextField 
                                required id="cities" 
                                label="City" 
                                className={classes.formDetails} 
                                fullWidth
                            />
                            <TextField 
                                required id="states" 
                                label="State/Province" 
                                className={classes.formDetails} 
                                fullWidth
                            />
                            <TextField 
                                required id="postcode" 
                                label="Postcode" 
                                className={classes.formDetails} 
                                fullWidth
                            />
                            <TextField 
                                required id="phonenumber" 
                                label="Phone Number" 
                                className={classes.formDetails} 
                                fullWidth
                            />
                        </div>
                    </form>



                <Footer />
            </div>
            
        );
    }
}

export default Payment;