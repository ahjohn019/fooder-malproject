import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../FooderAccount/FooderAccount.module.css';
import AvatarProfile from '../../assets/images/avatar_profile.png';
import ButtonAddresses from '../../components/UI/Button/ButtonAddresses';
import axios from "axios";

class FooderProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_profile:[],
            fooder_profileaddr:[]
        }
    }
    
    componentDidMount() {
        axios.get('/api/fooder_register/profile')
            .then(response => {
                this.setState({fooder_profile:response.data, fooder_profileaddr:response.data.address})
            
            }).catch(error=>{
                this.setState({error:true})
        });
    }

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
                            <p>Full Name : {this.state.fooder_profile["name"]}</p>
                            <p>Email : {this.state.fooder_profile["email"]}</p>
                            <p>Street Address : </p>
                            {this.state.fooder_profileaddr.map(faddr=><p key={faddr}> - {faddr}</p>)}
                            <p>State/Province: {this.state.fooder_profile["state"]}</p>
                            <p>Phone Number: {this.state.fooder_profile["phonenumber"]}</p>
                            <ButtonAddresses />
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default FooderProfile;