import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderMaster/FooderMaster.module.css';
import axios from "axios";
import DisplayHealthy from '../../assets/images/healthy_diet.png';
import CardCategory from '../../components/UI/CardCategory/CardCategory';

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
            <div className={classes.FoodMasterBody}>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>    
                    <div className={classes.FooderBanner}>
                        <div className={classes.FooderBannerText}>
                            <h2 style={{fontSize:"72px",fontWeight:"bold"}}>FOODER MALAYSIA</h2>
                            <p>EAT MORE PAY LESS</p>
                        </div>
                    </div>
                     <h2>CATEGORIES</h2>   
                    <CardCategory />         
                     <div className={classes.FoodMasterBlockSelectorTwo}>
                        <div className={classes.FoodMasterBlockPosition}>
                            <img src={DisplayHealthy} alt="DisplayHealthy" className={classes.FoodMasterDisplayImage}/>
                        </div>
                        <h2>Why Choose Our Food ?</h2>
                        <div className={classes.FoodMasterDisplayContent}>
                            <li>No MSG</li>
                            <li>100% No Preservatives</li>
                            <li>Home Cooking</li>
                            <li>It's Cheaper Than You Think</li>
                            <li>Weekly Promotion</li>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default FooderMaster;