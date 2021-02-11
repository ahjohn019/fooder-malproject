import React, { Component } from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import HelpIcon from '@material-ui/icons/Help';
import Logo from '../Logo/Logo';
import DrawerIcon from './Drawer/Drawer';
import {Link} from "react-router-dom";
import axios from "axios";


class navBar extends Component {

    constructor(props) {
        super(props);
        this.state ={
            fooder_checkout: [],
            fooder_profile:[]
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

        axios.get('/api/fooder_register/profile')
            .then(response =>{
                this.setState({
                    fooder_profile:response.data
                })
            }).catch(error=>{
                this.setState({error:true})
            });

    }

    handleLogout = () => {
        axios.get('/api/fooder_register/logout')
            .then(response => {
                console.log(response.data)
                localStorage.clear();
                window.location.href = '/';
            })
            .catch(error=>{this.setState({error:true})});
    }

    render(){
        const _gettotalcheckoutdata = this.state.fooder_checkout.length; 


        return(
            <div className={classes.NavBar}>
                <NavItem>
                    <div className={classes.dropdown}>
                        <span><PersonIcon style={{fontSize:30}}></PersonIcon></span>
                        <div className={classes.dropdown_content}>
                            { 
                                this.state.fooder_profile['isAuth'] === true ?
                                    <div>
                                        <p>{this.state.fooder_profile['name']}</p>                                        
                                        <p onClick={this.handleLogout}>Logout</p>                                                                                   
                                    </div>
                                :
                                    <Link to="/login"> 
                                        <p>Login</p>
                                    </Link>
                            }
                            <Link to="/register">
                                <p>Register</p>
                            </Link>
                        </div>
                    </div>
                </NavItem>
                <Link to="/checkout">       
                    <NavItem>
                        <ShoppingCartIcon style={{ fontSize: 30 }}/>
                        <span className={classes.NotificationIcons} value={_gettotalcheckoutdata}>{_gettotalcheckoutdata}</span>
                    </NavItem>
                </Link>
                <Link to="/">
                    <Logo />
                </Link>
                <DrawerIcon />
                
            </div>
        );
    }
}


export default navBar;