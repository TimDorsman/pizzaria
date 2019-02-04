import React, { Component } from 'react';
import {  Route, Switch } from "react-router-dom";
import Home from '../../Home';
import About from '../../About';
import Pizzas from '../../Pizzas';
import Help from '../../Help';
import NoPage from '../../Nopage';

export default class RouteURL extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/pizzas" component={Pizzas} />
                <Route path="/help" component={Help} />
                <Route path="*" component={NoPage} />
            </Switch>
        )
    }
}