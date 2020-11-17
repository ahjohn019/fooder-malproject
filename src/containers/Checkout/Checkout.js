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
            foodercheckout_addon:[],
            display_edit:false
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

    //delete id->addon array ?
    editCheckoutHandler = (event) => {
        //get addon checkout list
        alert("deleted")
    }



    deleteCheckoutHandler = (event) => {
        event.preventDefault();
        let _checkoutDeleteButtonId = event.currentTarget.value

        axios.delete(`/fooder_checkout/${_checkoutDeleteButtonId}`)
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
                    {}
                    {/* <CheckoutEdit checkoutHandler={this.editCheckoutHandler}/> */}
                    {/* <CheckoutEdit key={fcheckout._id} checkoutQty={fcheckout.quantity} checkoutLabel={fcheckout.addon} /> */}
                    <h2>Order Summary</h2>
                    <div className={classes.CheckoutBlockSelector}>
                        
                        {this.state.foodercheckout.map((fcheckout) =>
                            <div key={fcheckout._id}>
                                <h3 className={classes.CheckoutTitle}>x{fcheckout.quantity}</h3>
                                <h3 className={classes.CheckoutTitle}>{fcheckout.maindish}</h3>
                                <p className={classes.CheckoutPrice}>RM {fcheckout.totalprice}</p>
                                <p>{fcheckout.type} - RM {fcheckout.baseprice}</p>

                                <div style={{marginLeft:"15px"}} key={fcheckout._id}>
                                    {
                                        fcheckout.addon.map((fadd) => 
                                            <div key={fadd} className={classes.checkoutEditColumn}>
                                                <span value={fadd} className={classes.checkoutaddOn}>
                                                    <button id={fcheckout.addon} value={fadd} onClick={this.editCheckoutHandler}><FaTimes size={20}/></button>
                                                        {fadd}                                   
                                                </span>
                                            </div>)
                                    }
                                </div>
                              

                                


                                <p>Remarks: {fcheckout.remarks}</p>
                                {/* Update The Data */}
                                <button value={fcheckout._id} type="submit" className={classes.CheckoutEditButton} >
                                    <BsListTask size={32}/>
                                </button>
                                <button value={fcheckout._id} type="submit" className={classes.CheckoutDeleteButton} onClick={this.deleteCheckoutHandler}>
                                    <FaTimes size={32}/>
                                </button>
                                <hr />
                                
                            </div>
                        )}
                        <br />
                        <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                        <h3 className={classes.CheckoutPrice}>RM {_gettotalprice}</h3>
                    </div>     

                <Footer>
                   <button className={classes.CheckoutPlaceOrderButton}>
                       <p>Place Order</p>
                    </button>
                </Footer> 
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

//get addon checkout list
// let getIdaddon = event.currentTarget.id
// let getValueaddon = event.currentTarget.value
// const arraysplit = getIdaddon.split(",")
// const fooderaddon = [...this.state.foodercheckout_addon, arraysplit]
// let getaddon = fooderaddon[0]
// console.log(getaddon)
// //splice the value after click button
// getaddon = getaddon.filter(add=>add !==  getValueaddon)
// console.log(getaddon)