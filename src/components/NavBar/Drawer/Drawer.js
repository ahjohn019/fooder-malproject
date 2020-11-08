import React, {useState} from 'react';
import { Drawer, List, ListItem,ListItemText,IconButton} from '@material-ui/core';
import classes from '../../NavBar/Drawer/Drawer.module.css';
import Logo from '../../Logo/Logo';
import { Menu } from "@material-ui/icons";

const DrawerIcon = (props) => {
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }
    
    const list = (anchor) => (
        <div className={classes.DrawerStylesFull} onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)} >
            <Logo />
            <List className={classes.DrawerStylesList}>
                {['Cart', 'Help', 'Contact Us'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
        </div>
    );

    return(
        <React.Fragment key="left">
            <IconButton
                edge="start"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
            >
                <Menu style={{ color: `white`, fontSize:65 }} />
            </IconButton>
            
            <Drawer anchor="left" open={state.left} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </React.Fragment>    
        
    );
};

export default DrawerIcon;