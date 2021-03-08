import React, { Component } from 'react';
import classes from '../../containers/Payment/Payment.module.css';
import {TextField, FormControl, Radio, RadioGroup, FormControlLabel} from '@material-ui/core';
import {FaDollarSign}  from "react-icons/fa";
import Button from '@material-ui/core/Button';

class Payment extends Component {
    render() {
        return (
            <div className={classes.CustomerDetailsBlockSelector }>
                    <form>
                        <div className={classes.CustomerDetailsBlockSelector}>
                            <h2>Billing Details</h2>
                            {this.props.paymentAuth === true ? 
                                <div>
                                    <p>Your Name : {this.props.fullname}</p> 
                                    <p>Your Email : {this.props.email}</p>
                                    <p>Your Date Of Birth : {this.props.dob}</p>
                                    <p>Your Address : </p>
                                    {this.props.address.map(faddr=><p key={faddr}> - {faddr}</p>)}
                                    <p>Your State: {this.props.state}</p>
                                    <p>Your Country: {this.props.country} </p>
                                    <p>Your Phone Number: {this.props.phonenumber}</p>
                                </div> :
                                <div>
                                    <TextField 
                                        required id="full-name" 
                                        label="Full Name" 
                                        className={classes.formDetails} 
                                        
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
                                        
                                    />
                                    <div className={classes.FooderForm_HalfField}>
                                        <TextField 
                                            required id="cities" 
                                            label="City" 
                                            className={classes.formDetails} 
                                        />
                                    </div>
                                    <div className={classes.FooderForm_HalfField}>
                                        <TextField 
                                            required id="states" 
                                            label="State/Province" 
                                            className={classes.formDetails} 
                                        />
                                    </div>
                                    <TextField 
                                        required id="postcode" 
                                        label="Postcode" 
                                        className={classes.formDetails} 
                                        
                                    />
                                    <TextField 
                                        required id="phonenumber" 
                                        label="Phone Number" 
                                        className={classes.formDetails} 
                                        
                                    />
                                </div>
                            }
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
                                    onClick={this.props.paymentSuccess}
                                    value={this.props.orderSubtotal}
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