// Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./dashboard";
import AddPicture from "./addPicture";
import UpdatePicture from "./updatePicture";
import MyProfile from "./myProfile";
import UpdateProfile from "./updateProfile";

class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
                <Route path="/admin/add_picture" component={AddPicture} />
                <Route path="/admin/update_picture/:id" component={UpdatePicture} />
                <Route path="/admin/profile" component={MyProfile} />
                <Route path="/admin/update_profile" component={UpdateProfile} />
            </Switch>
        );
    }
}

export default Admin;
