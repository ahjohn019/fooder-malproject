import React, { Component } from 'react';
import classes from '../../containers/FooderType/FooderType.module.css';
import NavBar from '../../components/NavBar/NavBar';
import BannerMain from '../../components/UI/BannerMain/BannerMain';
import axios from 'axios';
import queryString from 'query-string';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import {FaPlus} from "react-icons/fa";
import NasiLemakImg from '../../assets/images/nasi_lemak_sample.jpg';
import FormControl from  '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

class FooderType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_type:[],
            fooder_checkout:[]
        };
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search)
        axios.get(`/api/fooder_maindish/type?type=` + values.type)
            .then(response => {
                console.log(response.data)
                this.setState({
                    fooder_type:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });
        axios.get('/api/fooder_checkout')
            .then(response => {
                this.setState({
                    fooder_checkout:response.data
                })    
            }).catch(error =>{
                    this.setState({error:true})
        });
    }   
    
    render() {
        //count the length of checkout data
        const _gettotalcheckoutdata = this.state.fooder_checkout.length;


        return (
            <div>
                <NavBar countCheckoutItem={_gettotalcheckoutdata}/>  
                <BannerMain />
                {/* Grid */}
                {/* Sort By */}
                {/* Pagination */}
                {/* SearchBar */}
                <h1 style={{textAlign: 'center',marginTop:"20px"}}>TYPE</h1>
                <FormControl className={classes.sortGridType}>
                    <InputLabel htmlFor="sort-type">Sort</InputLabel>
                    <NativeSelect>
                        <option aria-label="None" value="" />
                        <option>Name (A-Z)</option>
                        <option>Name (Z-A)</option>
                        <option>Price (Low To High)</option>
                        <option>Price (High To Low)</option>
                        <option>Newest To Oldest</option>
                        <option>Oldest To Newest</option>
                    </NativeSelect>
                </FormControl>
                
                <div className={classes.cardTypeGrid}>
                    
                    {this.state.fooder_type.map(ftype => 
                        <div key={ftype.maindish} className={classes.cardTypeItem}>
                            <img src={NasiLemakImg} alt="NasiLemak" className={classes.cardTypeImage}/>
                            <h3>{ftype.maindish}</h3>
                            <p>{ftype.type}</p>
                            <p className={classes.cardTypePriceTag}>RM {ftype.baseprice}</p>
                            <Link to={{ pathname: "/foodlist/" + ftype._id }}>
                                <IconButton color="primary" aria-label="redirectfoodurl" className={classes.RedirectFoodIcon}>
                                    <FaPlus />
                                </IconButton>
                            </Link>
                        </div>)}
                </div>
                
            </div>
        );
    }
}

export default FooderType;