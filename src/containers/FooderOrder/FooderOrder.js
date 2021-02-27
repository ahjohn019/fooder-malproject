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
            fooder_profileOrder:"",
            display_edit:false
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

    paymentSuccess() {
        const token = this.state.fooder_profile.token
        const orderlist = this.state.fooder_order
        const fooder_profileid = this.state.fooder_profile.id

        if(token)
        {
            for(var i in orderlist){
                const fooder_orderid = this.state.fooder_order[i]["_refprofile"].toString()
                if(fooder_orderid === fooder_profileid){
                    // const _gettotalprice = this.state.fooder_order.map(forder => forder.order_price).reduce((sum,index)=>sum+index,0);
                    axios.put(`/api/fooder_order/${this.state.fooder_order[i]._id}`,{
                        order_title:this.state.fooder_order[i].order_title,
                        order_type:this.state.fooder_order[i].order_type,
                        order_addon:this.state.fooder_order[i].order_addon,
                        order_qty:this.state.fooder_order[i].order_qty,
                        order_price:this.state.fooder_order[i].order_price,
                        order_baseprice:this.state.fooder_order[i].order_baseprice,
                        order_subtotal:"",
                        order_remarks:this.state.fooder_order[i].order_remarks,
                        order_status:"Pending"
                    }).then(()=>console.log('Payment Updated'))
                    .catch(err => console.log('Error: ' + err))
                }
            }
        } else {
            console.log("Not authorized to update other order.")
        }
    }

    deleteCheckoutHandler = (event) => {
        event.preventDefault();
        let _checkoutDeleteButtonId = event.currentTarget.value

        axios.delete(`/api/fooder_order/${_checkoutDeleteButtonId}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        const deleteCheckout = this.state.fooder_order.filter(fdelete => fdelete._id !== _checkoutDeleteButtonId);

        this.setState({fooder_order: deleteCheckout})
    }

    render() {
        const _gettotalprice = this.state.fooder_order.map(forder => forder.order_price).reduce((sum,index)=>sum+index,0);
        console.log("FooderProfileID",this.state.fooder_profile.id)
        console.log("FooderOrder",this.state.fooder_order.map(forder=>forder._refprofile[0]))
        return (
            <div>
                <NavBar />  
                <div className={classes.CheckoutBody}>
                    <div className={classes.CheckoutBlockSelector}>    
                        <h2>Your Order</h2>
                        {
                            this.state.fooder_order.length <= 0 ?
                               <p className={classes.CheckoutNoOrder}><ErrorOutlineIcon />You Have No Place Order</p> : 
                            this.state.fooder_order.map((forder) =>
                                <div key={forder._id} style={this.state.fooder_profile.token ? this.state.fooder_profile.id === forder._refprofile[0] ? 
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
                            this.state.fooder_order.length <= 0 ? null : 
                                <div>
                                    <h3 className={classes.CheckoutTitle}>Subtotal : </h3>
                                    <h3 className={classes.CheckoutPrice} value={_gettotalprice} >RM {_gettotalprice}</h3>
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