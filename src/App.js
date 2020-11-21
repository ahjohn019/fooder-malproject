import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FooderMenu from './containers/FooderMenu/FooderMenu';
import FooderMaster from './containers/FooderMaster/FooderMaster';
import Checkout from './containers/Checkout/Checkout';
import Payment from './containers/Payment/Payment';

class App extends Component {
  render (){
    return (
        <Switch>
            <Route exact path="/" component={FooderMaster}/>
            <Route path="/foodmenu" component={FooderMenu} />
            <Route path="/checkout" component={Checkout}/>
            <Route path="/payment" component={Payment}/>
        </Switch>   
    );
  }; 
}

export default App;
