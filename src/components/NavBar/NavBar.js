import React, { Component } from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Logo from '../Logo/Logo';
import DrawerIcon from './Drawer/Drawer';
import {Link} from "react-router-dom";
import axios from "axios";


class navBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            fooder_checkout: []
        }
    }

    componentDidMount() {
        axios.get('/api/fooder_checkout')
            .then(response => {
                this.setState({
                    fooder_checkout:response.data
                })            
            }).catch(error=>{
                this.setState({error:true})
        });
    }

    render(){
        const _gettotalcheckoutdata = this.state.fooder_checkout.length; 
        return(
            <div className={classes.NavBar}>
                <Link to="/">
                    <Logo />
                </Link>
                <DrawerIcon />
                <Link to="/foodmenu">
                    <NavItem><NotificationsIcon style={{ fontSize: 30 }}/></NavItem>
                </Link>
                <NavItem><HelpIcon style={{ fontSize: 30 }}/></NavItem>  
                <Link to="/checkout">       
                    <NavItem>
                        <ShoppingCartIcon style={{ fontSize: 30 }}/>
                        <span className={classes.NotificationIcons} value={_gettotalcheckoutdata}>{_gettotalcheckoutdata}</span>
                    </NavItem>
                </Link>
            </div>
        );
    }
}


export default navBar;