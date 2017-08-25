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

import style from "./css/main.css";

const routes = (
    <BrowserRouter>
        <div className={style}>
            <Header />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/description" component={Description} />
                    <Route path="/images" component={Images} />
                    <Route path="/triul" component={Triul} />
                    <Route path="/contact" component={Contact} />
                </Switch>
                <Footer />
            </div>
        </div>
    </BrowserRouter>
);

module.exports = routes;
