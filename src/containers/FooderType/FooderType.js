import React, { Component } from 'react';
import classes from '../../containers/FooderType/FooderType.module.css';
import NavBar from '../../components/NavBar/NavBar';
import BannerMain from '../../components/UI/BannerMain/BannerMain';
import axios from 'axios';
import queryString from 'query-string';

class FooderType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_type:[]
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
    }   
    
    render() {
        return (
            <div>
                <NavBar />
                <BannerMain />
                {/* Grid */}
                {/* Sort By */}
                {/* Pagination */}
                {/* SearchBar */}
                
                {this.state.fooder_type.map(fcategory => 
                    <div className={classes.TypeSelector}>
                        {fcategory.maindish}
                    </div>)}
                
            </div>
        );
    }
}

export default FooderType;