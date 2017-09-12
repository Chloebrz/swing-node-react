// Dependencies
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/partials/header";
import Footer from "./components/partials/footer";
import Home from "./components/pages/home";
import Description from "./components/pages/description";
import Images from "./components/pages/images";
import Triul from "./components/pages/triul";
import Contact from "./components/pages/contact";
import Admin from "./components/admin_pages/admin";
import Login from "./components/pages/login";
import Signup from "./components/pages/signup";
import NoMatch from "./components/pages/noMatch";

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
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route component={NoMatch} />
                </Switch>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

module.exports = routes;
