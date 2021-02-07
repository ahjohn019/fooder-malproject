import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../../containers/FooderAccount/FooderAccount.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';

class FooderLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_checkout: [],
            email:"",
            password:"",
            message_status:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) =>{
        const {email,password} = this.state;
        const food_login = ({
            email: email,
            password: password
        })

        // const sleep = (milliseconds) => {
        //     return new Promise(resolve => setTimeout(resolve, milliseconds))
        // }

        axios.post('api/fooder_register/login',
            food_login
            ,
            {withCredentials: true}
        )
        .then(response => {
            if(response.status === 200){
                this.setState({message_status:response.data})
                // if(response.data["isAuth"] === true){
                //     sleep(3000).then(() => this.props.history.push('/'))
                // }
            }
        })
        .catch(error => {
            this.setState({message_status:error.message})
            console.log('Login Error', error)
        });

        event.preventDefault();
    }

    render() {
        const messageBox = this.state.message_status["isAuth"] === true ? 
            <MuiAlert elevation={6} variant="filled" severity="success">Login Successfully</MuiAlert> :
            this.state.message_status["isAuth"] === false ?
            <MuiAlert elevation={6} variant="filled" severity="error">Login Failed</MuiAlert> :
            null;

        return (
            <div>
                <NavBar />
                <span className={classes.success_message}>Login suceessfully</span>
                <div className={classes.FooderAccountContent}>
                    <form onSubmit={this.handleSubmit}>
                        {messageBox}
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
                                </form>
                        </div>
                    {/* {this.state.message_status["isAuth"] === true ?
                    <p>I love kahmun boobies</p>:<p>Please login to see boobies</p>} */}
            </div>
        );
    }
}

export default FooderLogin;