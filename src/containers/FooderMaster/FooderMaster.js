import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderMaster/FooderMaster.module.css';
import CardCategory from '../../components/UI/CardCategory/CardCategory';
import CardSlider from '../../components/UI/CardSlider/CardSlider';
import BannerMain from '../../components/UI/BannerMain/BannerMain';
import CookingIcon from '../../assets/images/cooking_master.png';
import SmileIcon from '../../assets/images/smile_master.png';
import PromotionIcon from '../../assets/images/promotion_master.png';

class FooderMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodercheckout:[],
            fooderid:[],
            foodernavbar:""
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
                        <h2>Why Choose Our Food ?</h2>
                        <div className={classes.FoodMasterDisplayContent}>
                            <div className={classes.FoodFeaturesDesc}>
                                <img src={CookingIcon} alt="CookingIcon" className={classes.FoodMasterDisplayImage}/>
                                <p>100% Homemade Cooking</p>
                            </div>
                            <div className={classes.FoodFeaturesDesc}>
                                <img src={SmileIcon} alt="SmileIcon" className={classes.FoodMasterDisplayImage}/>
                                <p>Recommended By Our Customer</p>
                            </div>
                            <div className={classes.FoodFeaturesDesc}>
                                <img src={PromotionIcon} alt="PromotionIcon"  className={classes.FoodMasterDisplayImage}/>
                                <p>Weekly Promotion</p>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default FooderMaster;