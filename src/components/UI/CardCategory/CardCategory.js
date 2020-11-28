import React from 'react';
import classes from '../../UI/CardCategory/CardCategory.module.css';
import CardSlider from '../../UI/CardSlider/CardSlider';
import MalaysiaFood from '../../../assets/images/malaysiafoodimg.jpg';
import ChineseFood from '../../../assets/images/chinesefoodimg.png';
import BurgerFood from '../../../assets/images/burgerimg.jpg';
import Dessert from '../../../assets/images/dessertimg.jpg';
import ThaiFood from '../../../assets/images/thaifoodimg.jpg';
import MamakFood from '../../../assets/images/mamakimg.jpg';

const cardCategory = (props) =>{
    
    return (
        <div>
            <div className={classes.cardCategoryGrid}>
                <div className={classes.cardCategoryList}>
                    <img src={MalaysiaFood} alt="MalaysiaFood" className={classes.categoriesImg}></img>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={ChineseFood} alt="ChineseFood" className={classes.categoriesImg}></img>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={BurgerFood} alt="BurgerFood" className={classes.categoriesImg}></img>
                    {/* <p style={{textAlign:"center",position:"relative",top:"45%"}}>BURGERS</p> */}
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={Dessert} alt="Dessert" className={classes.categoriesImg}></img>
                    {/* <p style={{textAlign:"center",position:"relative",top:"45%"}}>DESSERT</p> */}
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={ThaiFood} alt="ThaiFood" className={classes.categoriesImg}></img>
                    {/* <p style={{textAlign:"center",position:"relative",top:"45%"}}>THAI FOOD</p> */}
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={MamakFood} alt="MamakFood" className={classes.categoriesImg}></img>
                    {/* <p style={{textAlign:"center",position:"relative",top:"45%"}}>MAMAK FOOD</p> */}
                </div>
            </div>
            <CardSlider />
        </div>
    );
} 
export default cardCategory