import Slider from "react-slick";
import React, {Component} from 'react';
import classes from '../../UI/CardSlider/CardSlider.module.css';
import styled from 'styled-components';
import NasiLemakImg from '../../../assets/images/nasi_lemak_sample.jpg';
import IconButton from '@material-ui/core/IconButton';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';
import {Link} from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';


function NoneNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
  }
  
function NonePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none"}}
        onClick={onClick}
      />
    );
}

class cardSlider extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodermaindish:[],
            fooderaddon:[],
            fooder_profile:[]
        };
    }

    componentDidMount(){
        axios.get('/api/fooder_maindish')
            .then(response => {
                this.setState({
                    foodermaindish:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });

        axios.get('/api/fooder_register/profile')
            .then(response => {
                this.setState({fooder_profile:response.data})
            }).catch(error =>{
                this.setState({error:true})
        });
        
    }

    render()
        {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: this.state.foodermaindish.length <= 4 ? this.state.foodermaindish.length : 4, 
                slidesToScroll: this.state.foodermaindish.length <= 4 ? this.state.foodermaindish.length : 4, 
                responsive: [
                {
                    breakpoint: 1375,
                    settings: {
                    slidesToShow: this.state.foodermaindish.length <= 3 ? this.state.foodermaindish.length : 3,
                    slidesToScroll: this.state.foodermaindish.length <= 3 ? this.state.foodermaindish.length : 3,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    nextArrow: <NoneNextArrow />,
                    prevArrow: <NonePrevArrow />
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    nextArrow: <NoneNextArrow />,
                    prevArrow: <NonePrevArrow />
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: <NoneNextArrow />,
                    prevArrow: <NonePrevArrow />
                    }
                }
                ]

            };

            //insert your CSS below
            const StyledSlider = styled(Slider)`
                    .slick-prev:before{
                        color:black;
                        font-size:50px;
                    },
                    .slick-next:before{
                        color:black;
                        font-size:50px;
                    },
                    .slick-track{
                        margin:auto;
                    }
                    
                `

        return(
            <div className={classes.cardBestSellerGrid}>
                <div>
                    <h2>Best Seller</h2>

                    <StyledSlider {...settings}>
                        {this.state.foodermaindish.map(f=>
                            <div key={f._id} className={classes.cardBestSellerItem}>  
                                <img src={NasiLemakImg} alt="NasiLemak" className={classes.cardBestSellerImage}/>
                                <h3>{f.maindish}</h3>
                                <p>{f.type}</p>
                                <p className={classes.cardBestSellerPriceTag}>RM {f.baseprice}</p>
                                {   
                                    this.state.fooder_profile["isAuth"] === true ?
                                    <Link to={{ pathname: "/foodlist/" + f._id }}>
                                        <IconButton color="primary" aria-label="redirectfoodurl" className={classes.RedirectFoodIcon}>
                                            <FaPlus />
                                        </IconButton>
                                    </Link> :   
                                    <Link to="/login">
                                        <IconButton aria-label="redirectfoodurl" className={classes.RedirectFoodIcon}>                                
                                            <LockIcon />           
                                        </IconButton>   
                                    </Link>            
                                }
                            </div>
                            
                        )}
                    </StyledSlider>

                    
                </div>
    
            </div>
        );
    }

}

export default cardSlider;