import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import FooderBanner from '../../assets/images/foodermasterbanner.png';
import axios from "axios";

class FooderMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodercheckout:[]
        };
    }

    componentDidMount(){
        axios.get('/api/fooder_checkout')
            .then(response => {
                this.setState({
                    foodercheckout:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });
    }

    render() {
        //count the length of checkout data
        const _gettotalcheckoutdata = this.state.foodercheckout.length;

        return (
            <div>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>
                    
                    <img src={FooderBanner} alt="FooderBanner"></img>
                    
                <Footer />
            </div>
        );
    }
}

export default FooderMaster;