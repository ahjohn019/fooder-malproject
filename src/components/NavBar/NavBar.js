import React from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchBar from './SearchBar/SearchBar';
import Logo from '../Logo/Logo';
import DrawerIcon from '../NavBar/Drawer/Drawer';

const navBar = (props) => (
    <div className={classes.NavBar}>
        <Logo />
        <DrawerIcon />
        <NavItem><NotificationsIcon style={{ fontSize: 30 }}/></NavItem>
        <NavItem><HelpIcon style={{ fontSize: 30 }}/></NavItem>         
        <NavItem><ShoppingCartIcon style={{ fontSize: 30 }}/></NavItem> 
        <SearchBar />
    </div>
);

export default navBar;