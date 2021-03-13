import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderOrder/FooderOrder.module.css';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Payment from '../Payment/Payment';
import axios from "axios";
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state={
            fooder_order:[],
            fooderorder_addon: [],
            fooder_profile:[],
            fooder_profileAddr: [],
            fooder_delete:""
        }    
        this.paymentSuccess = this.paymentSuccess.bind(this);
    }

    componentDidMount(){
        axios.get('/api/fooder_order')
            .then(response => {
                this.setState({
                    fooder_order:response.data
                })
            }).catch(error=>{
                this.setState({error:true})
        });
        axios.get('/api/fooder_register/profile')
            .then(response=>{
                this.setState({fooder_profile: response.data, fooder_profileAddr: response.data.address})
            }).catch(error=>{
                this.setState({error:true})
            });
    }

    paymentSuccess(event) {
        const token = this.state.fooder_profile.token;
        const orderList = this.state.fooder_order;
        const fooder_profileid = this.state.fooder_profile.id;
        const orderSubtotal = event.currentTarget.value;

        //add payment order to db after user select order
        if(token)
        {
            for(var i in orderList){
                const fooder_orderid = this.state.fooder_order[i]["_refprofile"].toString()
                if(fooder_orderid === fooder_profileid){
                    axios.put(`/api/fooder_order/${this.state.fooder_order[i]._id}`,{
                        order_title:this.state.fooder_order[i].order_title,
                        order_type:this.state.fooder_order[i].order_type,
                        order_addon:this.state.fooder_order[i].order_addon,
                        order_qty:this.state.fooder_order[i].order_qty,
                        order_price:this.state.fooder_order[i].order_price,
                        order_baseprice:this.state.fooder_order[i].order_baseprice,
                        order_subtotal:orderSubtotal,
                        order_remarks:this.state.fooder_order[i].order_remarks,
                        order_status:"Success"
                    }).then(()=>console.log('Payment Updated'))
                    .catch(err => console.log('Error: ' + err))
                }
            }
            alert("Payment Success")
        } else {
            console.log("Not authorized to update other order.")
        }
    }

    deleteCheckoutHandler = (event) => {
        event.preventDefault();
        let _checkoutDeleteButtonId = event.currentTarget.value

        // localstorage foodcheckout(test)
        let foodcheckout = JSON.parse(localStorage.getItem('foodCheckoutList'));
        const deleteCheckout = foodcheckout.filter(fdelete => fdelete._id !== _checkoutDeleteButtonId);
        localStorage.setItem('foodCheckoutList', JSON.stringify(deleteCheckout));
        this.setState({fooder_delete: deleteCheckout})

        //delete data from db
        // axios.delete(`/api/fooder_order/${_checkoutDeleteButtonId}`)
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     });
        // const deleteCheckout = foodcheckout.filter(fdelete => fdelete._id !== _checkoutDeleteButtonId);
        //this.setState({fooder_order: deleteCheckout})
    }

    render() {
        let token = this.state.fooder_profile.token
        let fooder_profileid = this.state.fooder_profile.id
        let _gettotalprice;
        
        // localstorage foodcheckout(test)
        let _localtotalprice;
        let foodcheckout = JSON.parse(localStorage.getItem('foodCheckoutList'));

        if(token){
            //localstorage pricetest
            _localtotalprice = foodcheckout ? foodcheckout.map(forder => fooder_profileid === forder._refprofile ? forder.order_price : null).reduce((sum,index)=>sum+index,0) : 0;
            //db get total pricetest
            _gettotalprice = this.state.fooder_order.map(forder => fooder_profileid === forder._refprofile[0] ? forder.order_price : null).reduce((sum,index)=>sum+index,0);
        } else {
            _gettotalprice = 0
        } 


        return (
            <div>
                <NavBar />  
                <div className={classes.CheckoutBody}>
                    <div className={classes.CheckoutBlockSelector}>    
                        <h2>Your Order</h2>
                        {
                            foodcheckout === null || foodcheckout.length <= 0 ?
                               <p className={classes.CheckoutNoOrder}><ErrorOutlineIcon />You Have No Place Order</p> : 
                            foodcheckout.map((forder) =>
                                <div key={forder._id} style={this.state.fooder_profile.token ? this.state.fooder_profile.id === forder._refprofile ? 
                                                        {display:"block"} : {display:"none"} : {display:"none"}}>
                                    <h3 className={classes.CheckoutTitle}>x{forder.order_qty}</h3>
                                    <h3 className={classes.CheckoutTitle}>{forder.order_title}</h3>
                                    <p className={classes.CheckoutPrice}>RM {forder.order_price}</p>
                                    <p>{forder.order_type} - RM {forder.order_baseprice}</p>
                                    <p>Remarks: {forder.order_remarks}</p>
                                    <div style={{marginLeft:"50px"}} key={forder._id}>
                                        {
                                            forder.order_addon.map((fadd) => 
                                                <div key={fadd} className={classes.checkoutEditColumn}>
                                                    <span value={fadd} className={classes.checkoutaddOn}>
                                                        {fadd}                                     
                                                    </span>
                                                </div>)
                                        }        
                                    </div>
                                    {/* Delete The Data */}
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className={classes.CheckoutDeleteButton}
                                        startIcon={<DeleteIcon />}
                                        type="submit"
                                        onClick={this.deleteCheckoutHandler}
                                        value={forder._id}
                                    >
                                        Delete
                                    </Button>
                                    <hr />                               
                                </div>
                        )}
                        <br />
                        {
                            foodcheckout === null || foodcheckout.length <= 0 ? null : 
                                <div>
                                    <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                                    <span className={classes.CheckoutPrice} > RM {_localtotalprice}</span>
                                </div>
                        }
                    </div>  
                    <Payment 
                        paymentAuth = {this.state.fooder_profile["isAuth"] }
                        profileId = {this.state.fooder_profile["id"]}
                        fullname = {this.state.fooder_profile["name"]}
                        email = {this.state.fooder_profile["email"]}
                        dob = {this.state.fooder_profile["dob"]}
                        address = {this.state.fooder_profileAddr}
                        state = {this.state.fooder_profile["state"]}
                        country = {this.state.fooder_profile["country"]}
                        phonenumber = {this.state.fooder_profile["phonenumber"]}
                        orderSubtotal = {_gettotalprice}
                        paymentSuccess = {this.paymentSuccess}
                    />     
                <Footer />
                </div>
            </div>
        );
    }
}

export default Checkout;

// {
//     this.state.display_edit && this.state.display_edit_id === forder._id ? 
//     forder.addon.map(fadd => 
//         <div className={classes.checkoutEditColumn}>
//             <button value={fadd} onClick={this.deleteCheckoutAddOnHandler}><FaTimes size={20}/></button>
//             <span key={fadd} className={classes.checkoutaddOn} >{fadd}</span>
//         </div>): 
//     forder.addon.map(fadd => <span key={fadd} className={classes.checkoutaddOn}>{fadd}</span>)
// }

//get addon checkout list (1st)
// let getIdaddon = event.currentTarget.id
// let getValueaddon = event.currentTarget.value
// const arraysplit = getIdaddon.split(",")
// const fooderaddon = [...this.state.fooderorder_addon, arraysplit]
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