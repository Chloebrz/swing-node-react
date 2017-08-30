// Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import AddPicture from "./addPicture";
import UpdatePicture from "./updatePicture";

class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
                <Route path="/admin/addpicture" component={AddPicture} />
                <Route path="/admin/updatepicture/:id" component={UpdatePicture} />
            </Switch>
        );
    }
}

export default Admin;
