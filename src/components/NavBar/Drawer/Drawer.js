import React, {useState} from 'react';
import { Drawer, Button, List, ListItem,ListItemText} from '@material-ui/core';
import classes from '../../NavBar/Drawer/Drawer.module.css';
import Logo from '../../Logo/Logo';


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
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export default DrawerIcon;