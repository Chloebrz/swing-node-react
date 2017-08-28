// Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./admin/dashboard";
import AddPicture from "./admin/addPicture";

class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
                <Route path="/admin/addpicture" component={AddPicture} />
            </Switch>
        );
    }
}

export default Admin;
