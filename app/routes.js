// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import Home from "./components/home";
import Description from "./components/description";
import Images from "./components/images";
import Triul from "./components/triul";
import Contact from "./components/contact";
import Admin from "./components/admin";

import mainStyle from "./css/main.css";
import headerStyle from "./css/header.css";

const routes = (
    <BrowserRouter>
        <div className={mainStyle}>
            <Header className={headerStyle} />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/description" component={Description} />
                    <Route path="/images" component={Images} />
                    <Route path="/triul" component={Triul} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={Admin} />
                </Switch>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

module.exports = routes;
