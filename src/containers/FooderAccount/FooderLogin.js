import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../../containers/FooderAccount/FooderAccount.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

class FooderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_checkout: []
        }
    }

    componentDidMount(){
        axios.get('/api/fooder_checkout')
            .then(response => {
                this.setState({
                    fooder_checkout:response.data
                })            
            }).catch(error=>{
                this.setState({error:true})
        });
    }

    render() {
        const _gettotalcheckoutdata = this.state.fooder_checkout.length; 
        return (
            <div>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>
                <div className={classes.FooderAccountContent}>
                    <h2>LOGIN</h2>
                    <div className={classes.FooderForm_Group}>
                            <div className={classes.FooderForm_Field}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        placeholder="Your Email"
                                        multiline
                                        variant="outlined"
                                        fullWidth
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div> 
                            <div className={classes.FooderForm_Group}>
                                <div className={classes.FooderForm_Field}>
                                    <TextField ref='password'
                                        label="Password"
                                        placeholder="Your Password"
                                        variant="outlined"
                                        type="password"
                                        fullWidth
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange} 
                                    />
                                </div>         
                            </div> 
                            <button type="submit">Submit</button>  
                </div>
            </div>
        );
    }
}

export default FooderLogin;