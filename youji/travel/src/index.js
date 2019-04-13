import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch,Route} from 'react-router-dom'
import Login from './component/login/Login'
import Regsiter from  './component/regsiter/Regsiter'
import QueryPwd from './component/queryPwd/QueryPwd'
import Target from './component/target/target'
import Airport from './component/airport/Airport'
import Strategy from './component/strategy/Strategy'
// import strategydetail from './component/strategydetail/Stategydetail'
import {Provider} from 'react-redux'
import store from './store/createStore'
import Stategydetail from './component/strategydetail/Stategydetail'
import Scencedetail from './component/scencedetail/scencedetail'
import Gongluexiang from './component/gongluexiang/gongluexiang'
import Center from './component/center/center'
ReactDOM.render(
<Provider store = {store}>
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/regsiter" component={Regsiter}></Route>
        <Route path="/password" component={QueryPwd}></Route>
        <Route path="/target" component={Target}></Route>
        <Route path="/airport" component={Airport}></Route>
        <Route path= "/strategy" component = {Strategy}></Route>
        <Route path="/strategydetail" component={Stategydetail}></Route>
        <Route path="/scencedetail" component={Scencedetail}></Route>
        <Route path="/gongluexiang" component={Gongluexiang}></Route>
        <Route path="/center" component={Center}></Route>
    </Switch>
  </BrowserRouter>
  </Provider>
, document.getElementById('root'));

  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
