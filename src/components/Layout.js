import React from "react";
import "../styles/common.less";
import {Switch, Route} from 'react-router-dom'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import Login from './Login';
import User from './User';
import Album from './Album';
import Photo from './Photo';

const Layout = () => (
    <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/user/:id' component={User}/>
        <Route path='/album/:id' component={Album}/>
        <Route path='/photo/:id' component={Photo}/>
    </Switch>
);

export default withRouter(connect()(Layout));