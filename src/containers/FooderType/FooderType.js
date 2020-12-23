import React, { Component } from 'react';
import classes from '../../containers/FooderType/FooderType.module.css';
import NavBar from '../../components/NavBar/NavBar';
import BannerMain from '../../components/UI/BannerMain/BannerMain';
import axios from 'axios';

class FooderType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_type:[]
        };
    }

    componentDidMount(){
        const fooder_type = this.props.match.params.type
        axios.get(`/api/fooder_maindish/${fooder_type}`)
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
                
                <p>{this.state.fooder_type.map(fcategory => fcategory.maindish)}</p>
                
            </div>
        );
    }
}

export default FooderType;