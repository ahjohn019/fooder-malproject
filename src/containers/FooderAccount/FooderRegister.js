import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import classes from '../../containers/FooderAccount/FooderAccount.module.css';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import MuiAlert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Footer from '../../components/Footer/Footer';

class FooderRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_checkout:[],
            message_status:"",
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            password_confirmation:""};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    }   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        const {first_name, last_name, email,password,password_confirmation} = this.state;
        const food_register = ({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            password_confirmation: password_confirmation
        })

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }
        

        axios.post('/api/fooder_register/add',
            food_register
        ,
            {withCredentials: true}
        )
        .then(response => {
            if(response.status === 200) {
                this.setState({message_status:response.data})
                if(response.data["success"] === true){
                    sleep(1500).then(() => this.props.history.push('/login'))
                }
            }
        })
        .catch(error => {console.log('Registration Error', error)});
        event.preventDefault();
    }


    render() {
        const _gettotalcheckoutdata = this.state.fooder_checkout.length; 
        const messageBox = this.state.message_status["success"] === true ?
            <MuiAlert elevation={6} variant="filled" severity="success">Registration Successfully</MuiAlert> :
            this.state.message_status["success"] === false ?
            <MuiAlert elevation={6} variant="filled" severity="error">Registration Failure</MuiAlert> :
            null;   

        return (
            <div>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>
                <div className={classes.FooderAccountContent}>
                    {messageBox}
                    <h2>REGISTER</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div className={classes.FooderForm_Group}>
                                <div className={classes.FooderForm_HalfField}>
                                    <TextField
                                        id="first_name"
                                        label="First Name"
                                        placeholder="Your Name"
                                        multiline
                                        variant="outlined"
                                        style={{width:'240px'}}
                                        name="first_name"
                                        value={this.state.first_name}
                                        onChange={this.handleChange}
                                        />
                                </div>
                                <div className={classes.FooderForm_HalfField}>
                                    <TextField
                                        id="last_name"
                                        label="Last Name"
                                        placeholder="Your Name"
                                        multiline
                                        variant="outlined"
                                        style={{width:'240px'}}
                                        name="last_name"
                                        value={this.state.last_name}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
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
                            <div className={classes.FooderForm_Group}>
                                <div className={classes.FooderForm_Field}>
                                <TextField ref='password_confirmation'
                                    label="Password Confirmation"
                                    placeholder="Your Password Confirmation"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    name="password_confirmation"
                                    value={this.state.password_confirmation}
                                    onChange={this.handleChange}  
                                />
                                 </div>        
                            </div>      

                            <div className={classes.FooderAccountLogin}>
                                <Button variant="contained" color="primary" type="submit">Submit</Button>  
                            </div>    
                            
                        </form>
                    </div>
                    <Footer />
                </div>
            
        );
    }
}

export default FooderRegister;