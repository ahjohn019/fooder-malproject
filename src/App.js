import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FooderMenu from './containers/FooderMenu/FooderMenu';
import FooderMaster from './containers/FooderMaster/FooderMaster';
import Checkout from './containers/Checkout/Checkout';
import Payment from './containers/Payment/Payment';
import FooderListDev from './containers/FooderListDev/FooderListDev';


class App extends Component {

  render (){
    return (
        <Switch>
            <Route exact path="/" component={FooderMaster}/>
            {/* <Route path="/foodlist" component={FooderMenu} /> */}
            <Route path="/foodlist/:_refmaindish" component={FooderMenu} />
            <Route path="/checkout" component={Checkout}/>
            <Route path="/payment" component={Payment}/>
            <Route path="/fooderlistdev/:_refmaindish" component={FooderListDev} />
        </Switch>   
    );
  }; 
}

export default App;
