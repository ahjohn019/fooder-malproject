import Slider from "react-slick";
import React, {Component} from 'react';
import classes from '../../UI/CardSlider/CardSlider.module.css';
import styled from 'styled-components';
import NasiLemakImg from '../../../assets/images/nasi_lemak_sample.jpg';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class cardSlider extends Component {
    
    render()
        {
            const settings = {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 4,
                slidesToScroll: 4,
                responsive: [
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
                    breakpoint: 600,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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

                }
                    .slick-track{
                        margin:auto;
                    }
                
                `

        return(
            <div className={classes.cardBestSellerGrid}>
                <div >
                    <h2> Best Seller</h2>
                    <StyledSlider {...settings}>
                        <div className={classes.cardBestSellerItem}>                            
                            <img src={NasiLemakImg} alt="NasiLemak" className={classes.cardBestSellerImage}/>
                            <h3>Nasi Lemak</h3>
                            <p>Local Food</p>
                            
                            <IconButton color="primary" aria-label="add to shopping cart" className={classes.AddShoppingCartIcon}>
                                <AddShoppingCartIcon fontSize="large"/>
                            </IconButton>
                            <p className={classes.cardBestSellerPriceTag}>RM 4</p>

                        </div>
                        <div className={classes.cardBestSellerItem}>
                            <h3>2</h3>
                        </div>
                        <div className={classes.cardBestSellerItem}>
                            <h3>3</h3>
                        </div>
                        <div className={classes.cardBestSellerItem}>
                            <h3>4</h3>
                        </div>
                        <div className={classes.cardBestSellerItem}>
                            <h3>5</h3>
                        </div>
                        <div className={classes.cardBestSellerItem}>
                            <h3>6</h3>
                        </div>
                    </StyledSlider>
                    
                </div>
    
            </div>
        );
    }

}

export default cardSlider;