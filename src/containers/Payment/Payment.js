import React, { Component } from 'react';
import classes from '../../containers/Payment/Payment.module.css';
import {TextField, FormControl, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {FaDollarSign}  from "react-icons/fa";
import Button from '@material-ui/core/Button';

class Payment extends Component {

    render() {
        return (
            <div className={classes.PaymentContent}>
                    <form>
                        <div className={classes.CustomerDetailsBlockSelector}>
                            <h2>Billing Details</h2>
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
                                rows={2}
                                placeholder="Street Address"
                                variant="outlined"
                                className={classes.formDetails} 
                                fullWidth
                                />
                            <TextField 
                                required id="cities" 
                                label="City" 
                                className={classes.formDetails} 
                            />
                            <TextField 
                                required id="states" 
                                label="State/Province" 
                                className={classes.formDetails} 
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

                            <FormControl component="fieldset" style={{marginTop:"5%"}}>
                                <RadioGroup aria-label="gender" name="gender1" >
                                    <FormControlLabel value="cashindelivery" control={<Radio />} label="Cash-In-Delivery" />
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Credit Card" />
                                </RadioGroup>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    startIcon={<FaDollarSign />}
                                >
                                    ORDER
                                </Button>
                            </FormControl>
                        </div>  
                    </form>
            </div>      
        );
    }
}

export default Payment;