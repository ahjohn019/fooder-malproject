import Slider from "react-slick";
import React, {Component} from 'react';
import classes from '../../UI/CardSlider/CardSlider.module.css';
import styled from 'styled-components';

class cardSlider extends Component {
    
    render()
        {
            const settings = {
                dots: true,
                infinite: false,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 5,
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
                }`

        return(
            <div className={classes.cardBestSellerGrid}>
                <div >
                    <h2> Best Seller</h2>
                    <StyledSlider {...settings}>
                        <div className={classes.cardBestSellerItem}>                            
                            <h3>1</h3>   
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