import React from 'react';
import classes from '../../UI/CardCategory/CardCategory.module.css';
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
                    <div className={classes.FoodCategory}>
                        <p >LOCAL</p>
                    </div>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={ChineseFood} alt="ChineseFood" className={classes.categoriesImg}></img>
                    <div className={classes.FoodCategory}>
                        <p>CHINESE</p>
                    </div>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={BurgerFood} alt="BurgerFood" className={classes.categoriesImg}></img>
                        <div className={classes.FoodCategory}>
                            <p>BURGER</p>
                        </div>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={Dessert} alt="Dessert" className={classes.categoriesImg}></img>
                        <div className={classes.FoodCategory}>
                            <p>DESSERT</p>
                        </div>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={ThaiFood} alt="ThaiFood" className={classes.categoriesImg}></img>
                    <div className={classes.FoodCategory}>
                        <p>THAI</p>
                    </div>
                </div>
                <div className={classes.cardCategoryList}>
                    <img src={MamakFood} alt="MamakFood" className={classes.categoriesImg}></img>
                    <div className={classes.FoodCategory}>
                        <p>MAMAK</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 
export default cardCategory