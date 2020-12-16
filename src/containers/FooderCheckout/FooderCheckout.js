import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderCheckout/FooderCheckout.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Payment from '../Payment/Payment';
import axios from "axios";

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state={
            foodercheckout:[],
            foodercheckout_addon: [],
            display_edit:false
        }    
    }

    componentDidMount(){
        axios.get('/api/fooder_checkout')
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
        let _checkoutDeleteButtonId = event.currentTarget.value

        axios.delete(`/api/fooder_checkout/${_checkoutDeleteButtonId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        const deleteCheckout = this.state.foodercheckout.filter(fdelete => fdelete._id !== _checkoutDeleteButtonId);

        this.setState({foodercheckout: deleteCheckout})
    }

    render() {
        const _gettotalprice = this.state.foodercheckout.map(fcheckout => fcheckout.totalprice).reduce((sum,index)=>sum+index,0);
        const _gettotalcheckoutdata = this.state.foodercheckout.length; 
        return (
            <div className={classes.CheckoutContent}>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>  
                    <div className={classes.CheckoutBlockSelector}>    
                        <h2>Your Order</h2>
                        <hr />
                        {this.state.foodercheckout.map((fcheckout) =>
                            <div key={fcheckout._id}>
                                <h3 className={classes.CheckoutTitle}>x{fcheckout.quantity}</h3>
                                <h3 className={classes.CheckoutTitle}>{fcheckout.maindish}</h3>
                                <p className={classes.CheckoutPrice}>RM {fcheckout.totalprice}</p>
                                <p>{fcheckout.type} - RM {fcheckout.baseprice}</p>

                                <div style={{marginLeft:"50px"}} key={fcheckout._id}>
                                    {
                                        fcheckout.addon.map((fadd) => 
                                            <div key={fadd} className={classes.checkoutEditColumn}>
                                                <span value={fadd} className={classes.checkoutaddOn}>
                                                    {fadd}                                     
                                                </span>
                                            </div>)
                                    }        
                                </div>
                                    
                                <p>Remarks: {fcheckout.remarks}</p>
                                {/* Delete The Data */}
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.CheckoutDeleteButton}
                                    startIcon={<DeleteIcon />}
                                    type="submit"
                                    onClick={this.deleteCheckoutHandler}
                                    value={fcheckout._id}
                                >
                                    Delete
                                </Button>
                                
                                <hr />
                                
                            </div>
                        )}
                        <br />
                        <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                        <h3 className={classes.CheckoutPrice}>RM {_gettotalprice}</h3>
                    </div>  
                    <Payment />     
                <Footer />
               
            </div>
        );
    }
}

export default Checkout;

// {
//     this.state.display_edit && this.state.display_edit_id === fcheckout._id ? 
//     fcheckout.addon.map(fadd => 
//         <div className={classes.checkoutEditColumn}>
//             <button value={fadd} onClick={this.deleteCheckoutAddOnHandler}><FaTimes size={20}/></button>
//             <span key={fadd} className={classes.checkoutaddOn} >{fadd}</span>
//         </div>): 
//     fcheckout.addon.map(fadd => <span key={fadd} className={classes.checkoutaddOn}>{fadd}</span>)
// }

//get addon checkout list (1st)
// let getIdaddon = event.currentTarget.id
// let getValueaddon = event.currentTarget.value
// const arraysplit = getIdaddon.split(",")
// const fooderaddon = [...this.state.foodercheckout_addon, arraysplit]
// let getaddon = fooderaddon[0]
// console.log(getaddon)
// //splice the value after click button
// getaddon = getaddon.filter(add=>add !==  getValueaddon)
// console.log(getaddon)

//1. get addon checkout list (2nd)
// const getaddonlist = event.currentTarget.id
// const getaddonvalue = event.currentTarget.value
// const firstresult = getaddonlist.split(",")
// let filteraddon = firstresult.filter(res=>res !== getaddonvalue)
// console.log(filteraddon)