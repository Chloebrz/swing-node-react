// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/partials/header";
import Footer from "./components/partials/footer";

import Home from "./containers/public/home";
import Description from "./containers/public/description";
import Images from "./containers/public/images";
import Triul from "./containers/public/triul";
import Contact from "./containers/public/contact";
import Login from "./containers/public/login";
import Signup from "./containers/public/signup";
import Profile from "./containers/public/profile";
import NoMatch from "./containers/public/noMatch";

import Admin from "./admin_routes";

import mainStyle from "./css/main.css";

const routes = (
    <BrowserRouter>
        <div className={mainStyle}>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/description" component={Description} />
                    <Route path="/images" component={Images} />
                    <Route path="/triul" component={Triul} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/admin" component={Admin} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/profile/:id" component={Profile} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

module.exports = routes;
