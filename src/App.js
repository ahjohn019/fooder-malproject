import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FooderMenu from './containers/FooderMenu/FooderMenu';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render (){
    return (
        <Switch>
            <Route exact path="/" component={FooderMenu} />
            <Route path="/checkout" component={Checkout}/>
        </Switch>   
    );
  }; 
}

export default App;
