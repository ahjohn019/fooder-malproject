import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import classes from '../../containers/FooderMaster/FooderMaster.module.css';
import axios from "axios";
import DisplayHealthy from '../../assets/images/healthy_diet.png';
import {Accordion,AccordionSummary,AccordionDetails} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class FooderMaster extends Component {
    constructor(props){
        super(props);
        this.state = {
            foodercheckout:[]
        };
    }

    componentDidMount(){
        axios.get('/api/fooder_checkout')
            .then(response => {
                this.setState({
                    foodercheckout:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });
    }

    render() {
        //count the length of checkout data
        const _gettotalcheckoutdata = this.state.foodercheckout.length;


        return (
            <div>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>    
                    <div className={classes.FooderBanner}>
                        <div className={classes.FooderBannerText}>
                            <h2 style={{fontSize:"72px",fontWeight:"bold"}}>FOODER MALAYSIA</h2>
                            <p>EAT MORE PAY LESS</p>
                        </div>
                    </div>
                    <h2>OUR RECOMMENDATION</h2>
                    <div className={classes.FoodMasterBlockSelector}>    
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                        <div className={classes.FoodMasterRecommendation}>
                            <p style={{textAlign:"center",position:"relative",top:"45%"}}>SAMPLE FOOD</p>
                        </div>
                    </div>
                    <div className={classes.FoodMasterBlockSelectorTwo}>
                        <div className={classes.FoodMasterBlockPosition}>
                            <img src={DisplayHealthy} alt="DisplayHealthy" className={classes.FoodMasterDisplayImage}/>
                        </div>
                        <h3>Why Choose Our Food ?</h3>
                        <div className={classes.FoodMasterDisplayContent}>
                            <li>No MSG</li>
                            <li>100% No Preservatives</li>
                            <li>Home Cooking</li>
                            <li>It's Cheaper Than You Think</li>
                            <li>Weekly Promotion</li>
                        </div>
                    </div>
                    <div className={classes.FoodMasterFaq}>
                        <h2>Frequently Asked Questions</h2>
                        <br />
                        <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                                  <p>Lorem ipsum dolor sit amet</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                                  <p>Lorem ipsum dolor sit amet</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.</p>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header">
                                  <p>Lorem ipsum dolor sit amet</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.</p>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default FooderMaster;