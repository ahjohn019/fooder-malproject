import React, {Component} from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import FooderMenu from './containers/FooderMenu/FooderMenu';
import FooderMaster from './containers/FooderMaster/FooderMaster';
import FooderCheckout from './containers/FooderCheckout/FooderCheckout';
import FooderType from './containers/FooderType/FooderType';
import FooderRegister from './containers/FooderAccount/FooderRegister';
import FooderLogin from './containers/FooderAccount/FooderLogin';

class App extends Component {

  render (){
    return (
        <Switch>
            <Route exact path="/" component={FooderMaster}/>
            <Route path="/foodertype/type" component={FooderType} />
            <Route path="/foodlist/:_refmaindish" component={FooderMenu} />
            <Route path="/checkout" component={FooderCheckout}/>
            <Route path="/register" component={FooderRegister} />
            <Route path="/login" component={FooderLogin} />
        </Switch>   
    );
  }; 
}

export default App;
