import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import NasiMenu from './containers/NasiMenu/NasiMenu';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render (){
    return (
        <Switch>
            <Route exact path="/" component={NasiMenu} />
            <Route path="/checkout" component={Checkout}/>
        </Switch>   
    );
  }; 
}

export default App;
