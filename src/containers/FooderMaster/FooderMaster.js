import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderMaster/FooderMaster.module.css';
import DisplayHealthy from '../../assets/images/healthy_diet.png';
import CardCategory from '../../components/UI/CardCategory/CardCategory';
import CardSlider from '../../components/UI/CardSlider/CardSlider';
import BannerMain from '../../components/UI/BannerMain/BannerMain';

class FooderMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodercheckout:[],
            fooderid:[]
        };
    }

    render() {
        return (
            <div className={classes.FoodMasterBody}>
                <NavBar />
                    <BannerMain />
                    <h2 className={classes.categorytext}>CATEGORIES</h2>  
                    <CardCategory />    
                    <CardSlider />     
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