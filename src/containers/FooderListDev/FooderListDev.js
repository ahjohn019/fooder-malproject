import React, { Component } from 'react';
import axios from 'axios';



class Testfoodid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fooder_addonlist:[]
        }
      }

    componentDidMount() {
        const id = this.props.match.params._refmaindish
        axios.get(`/api/fooder_addon/${id}`)
            .then(response => {
                this.setState({
                    fooder_addonlist:response.data
                })

            }).catch(error=>{
                this.setState({error:true})
        });
    }


    render() {
        const getfoodermaindish = this.state.fooder_addonlist.map(food=>food._refmaindish.map(ref=>ref.maindish))
        const getfooderdescription = this.state.fooder_addonlist.map(food=>food._refmaindish.map(ref=>ref.description))
        const getfooderbaseprice = this.state.fooder_addonlist.map(food=>food._refmaindish.map(ref=>ref.baseprice))
        let uniqueFooderMaindish = Object.values(getfoodermaindish.reduce((index,value)=>{
            index[value.id] = value
            return index
        },{})) 
        let uniqueFooderDesc = Object.values(getfooderdescription.reduce((index,value)=>{
            index[value.id] = value
            return index
        },{}))
        let uniqueFooderBaseprice = Object.values(getfooderbaseprice.reduce((index,value)=>{
            index[value.id] = value
            return index
        },{}))  


        return (
            <div>
                <li>{uniqueFooderMaindish}</li>
                <li>{uniqueFooderDesc}</li>
                <li>{uniqueFooderBaseprice}</li>
                {this.state.fooder_addonlist.map(f=><li>{f.addon}</li>)}
                {this.state.fooder_addonlist.map(f=><li>{f.price_addon}</li>)}
            </div>
        );
    }
}

export default Testfoodid;