// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./components/home";
import Description from "./components/description";
import Images from "./components/images";
import Triul from "./components/triul";
import Contact from "./components/contact";

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/description" component={Description} />
                <Route path="/images" component={Images} />
                <Route path="/triul" component={Triul} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    </BrowserRouter>
);

module.exports = routes;
