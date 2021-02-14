import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderMaster/FooderMaster.module.css';
import CardCategory from '../../components/UI/CardCategory/CardCategory';
import CardSlider from '../../components/UI/CardSlider/CardSlider';
import BannerMain from '../../components/UI/BannerMain/BannerMain';
import CardMainBenefit from '../../components/UI/CardMainBenefit/CardMainBenefit';


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
                    <CardMainBenefit />
                <Footer />
            </div>
        );
    }
}

export default FooderMaster;