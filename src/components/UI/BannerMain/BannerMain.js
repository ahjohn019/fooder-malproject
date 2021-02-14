
import React from 'react';
import classes from '../BannerMain/BannerMain.module.css';

const BannerMain = (props) => {
    return(
        <div className={classes.FooderBanner}>
            <div className={classes.FooderBannerText}>
                <h2>FOODER MALAYSIA</h2>
                <p>EAT MORE PAY LESS</p>
            </div>
        </div>
    );
}

export default BannerMain;