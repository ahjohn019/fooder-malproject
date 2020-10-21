import React, { Component } from 'react';
import classes from './NasiMenu.module.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/UI/Button/ButtonConfirmation';
import NasiController from '../../components/NasiController/NasiController';

class NasiBuilder extends Component {

    render() {
        //1. Navigation Bar [DONE]
        //2. Addon Bar [DONE]
        //3. Footer Bar
        return (
            <div>
                <NavBar/>
                <div>
                    <img src="img/nasi_lemak_sample.jpg" alt="NasiLemak" className={classes.BlockImage}/>
                </div>
                <div className={classes.BlockSelector}>
                    <h3>Nasi Lemak</h3>
                    <p>Base Price</p>
                    <p>RM 4.00</p>
                </div>
                <div className={classes.BlockSelector}>
                    <NasiController />
                </div>
                
                <Button>Submit</Button>
            </div>
        );
    }
}

export default NasiBuilder