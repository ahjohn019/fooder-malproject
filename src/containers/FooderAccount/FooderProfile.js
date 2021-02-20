import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../FooderAccount/FooderAccount.module.css';
import AvatarProfile from '../../assets/images/avatar_profile.png';
import ButtonAddresses from '../../components/UI/Button/ButtonAddresses';

class FooderProfile extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className={classes.Fooder_SidebarBody}>
                    <div className={classes.Fooder_ProfileBar}>
                        <h3>My Account</h3>
                    </div>
                    <div className={classes.Fooder_AvatarProfile}>
                        <div>
                            <img className={classes.Fooder_AvatarImg} src={AvatarProfile} alt="Avatar_Profile"></img>
                        </div>
                        <div className={classes.Fooder_AccountBlock}>
                            <p>Full Name : ah dog</p>
                            <p>Email : yewwrui@hotmail.com</p>
                            <p>Street Address : 332, jalan E4, taman Melawwati, 53100, KL</p>
                            <p>State/Province: Kuala Lumpur</p>
                            <p>Phone Number: 0123771428</p>
                            <ButtonAddresses />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default FooderProfile;