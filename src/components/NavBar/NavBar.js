import React from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavItem/NavItem';
import ShoppingCartIcon  from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchBar from './SearchBar/SearchBar';
import Logo from '../Logo/Logo';

const navBar = (props) => (
    <header className={classes.NavBar}>
        <Logo />
        <SearchBar />
        <NavItem><ShoppingCartIcon /></NavItem> 
        <NavItem><HelpIcon /></NavItem>
        <NavItem><NotificationsIcon /></NavItem>
    </header>
);

export default navBar;