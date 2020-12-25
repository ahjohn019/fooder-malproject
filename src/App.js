import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FooderMenu from './containers/FooderMenu/FooderMenu';
import FooderMaster from './containers/FooderMaster/FooderMaster';
import FooderCheckout from './containers/FooderCheckout/FooderCheckout';
import Payment from './containers/Payment/Payment';
import FooderType from './containers/FooderType/FooderType';

class App extends Component {

  render (){
    return (
        <Switch>
            <Route exact path="/" component={FooderMaster}/>
            {/* <Route path="/foodlist" component={FooderMenu} /> */}
            <Route path="/foodertype/type" component={FooderType} />
            <Route path="/foodlist/:_refmaindish" component={FooderMenu} />
            <Route path="/checkout" component={FooderCheckout}/>
            <Route path="/payment" component={Payment}/>
        </Switch>   
    );
  }; 
}

export default App;
