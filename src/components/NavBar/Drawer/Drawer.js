import React, {useState} from 'react';
import { Drawer, List, ListItem,ListItemText,IconButton} from '@material-ui/core';
import classes from '../../NavBar/Drawer/Drawer.module.css';
import Logo from '../../Logo/Logo';
import { Menu } from "@material-ui/icons";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

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

    const [open, setOpen] = React.useState(true);

    const handleList = () => {
        setOpen(!open);
    };
    
    const list = (anchor) => (
        <div className={classes.DrawerStylesFull}>
            <Logo />
            <List className={classes.DrawerStylesList} onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                {['Cart', 'Help', 'Contact Us'].map((text, index) => (
                <ListItem button key={text}>
                    <ListItemText primary={text} />
                </ListItem>
                ))}
            </List>
            <ListItem button onClick={handleList}>
                    <ListItemText primary="Category" />
                    {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={!open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItem button >
                    <ListItemText primary="Local" className={classes.DrawerCategoryList}/>
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Chinese" className={classes.DrawerCategoryList}/>
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Burger" className={classes.DrawerCategoryList}/>
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Dessert" className={classes.DrawerCategoryList}/>
                </ListItem>
                <ListItem button >
                    <ListItemText primary= "Thai" className={classes.DrawerCategoryList}/>
                </ListItem>
                <ListItem button >
                    <ListItemText primary="Mamak" className={classes.DrawerCategoryList}/>
                </ListItem>
                </List>
            </Collapse>

        </div>
    );

    return(
        <React.Fragment key="left">
            <div className={classes.DrawerIconStyle}>
                <IconButton
                    edge="start"
                    aria-label="menu"
                    onClick={toggleDrawer("left", true)}
                >
                    <Menu style={{fontSize:65}} />
                </IconButton>
            </div>
            
            <Drawer anchor="left" open={state.left} onClose={toggleDrawer("left", false)}>
                {list("left")}
            </Drawer>
        </React.Fragment>    
        
    );
};

export default DrawerIcon;