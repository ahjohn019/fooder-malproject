import React,{ Component} from 'react';
import classes from '../../UI/CardCategory/CardCategory.module.css';
// import MalaysiaFood from '../../../assets/images/malaysiafoodimg.jpg';
// import ChineseFood from '../../../assets/images/chinesefoodimg.png';
// import BurgerFood from '../../../assets/images/burgerimg.jpg';
// import Dessert from '../../../assets/images/dessertimg.jpg';
// import ThaiFood from '../../../assets/images/thaifoodimg.jpg';
// import MamakFood from '../../../assets/images/mamakimg.jpg';
import axios from "axios";
import {Link} from "react-router-dom";

class cardCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_type:[],
            fooder_maindish:[]
        };
    }

    componentDidMount() {
        axios.get('/api/fooder_type')
            .then(response => {
                this.setState({fooder_type:response.data})
            }).catch(error => {
                this.setState({error:true})
            });
    }

    render() {

        return (
            <div>
                <div className={classes.cardCategoryGrid}>  

                    {this.state.fooder_type.map(ftype=>
                        <div key={ftype._id} className={classes.cardCategoryList}>
                            <img src={process.env.PUBLIC_URL + `/img/${ftype.foodimgname}`} alt="MalaysiaFood" className={classes.categoriesImg}></img>

                            <div className={classes.FoodCategory}>
                                <Link to={{ pathname: "/foodertype/type",
                                            search:"?type=" + ftype.foodalias }}>
                                    <p>{ftype.foodtype}</p>
                                </Link>
                            </div>
                        </div>
                    )}
                    {/* {
                        imagestest.map(img=><img src={img} alt={img} className={classes.categoriesImg}/>)
                        } */}
                    
                    {/* <div className={classes.cardCategoryList}>
                        <img src={MalaysiaFood} alt="MalaysiaFood" className={classes.categoriesImg}></img>
                        <div className={classes.FoodCategory}>
                            <p>LOCAL</p>
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
                    </div> */}
                </div>
        </div>
    );
    }
}

export default cardCategory
