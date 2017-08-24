// Dependencies
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </BrowserRouter>,
    document.querySelector("#root")
);
