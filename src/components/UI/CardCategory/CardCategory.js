import React from 'react';
import classes from '../../UI/CardCategory/CardCategory.module.css';
import CardSlider from '../../UI/CardSlider/CardSlider';

const cardCategory = (props) =>{
    
    return (
        <div>
            <div className={classes.cardCategoryGrid}>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>MALAY FOOD</p>
                </div>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>CHINESE FOOD</p>
                </div>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>BURGERS</p>
                </div>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>DESSERT</p>
                </div>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>THAI FOOD</p>
                </div>
                <div className={classes.cardCategoryList}>
                    <p style={{textAlign:"center",position:"relative",top:"45%"}}>MAMAK FOOD</p>
                </div>
            </div>
            <CardSlider />
        </div>
    );
} 
export default cardCategory