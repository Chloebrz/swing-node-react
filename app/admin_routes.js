// Dependencies
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./containers/admin/dashboard";
import AddPicture from "./containers/admin/addPicture";
import UpdatePicture from "./containers/admin/updatePicture";
import Videos from "./containers/admin/videos";
import AddVideo from "./containers/admin/addVideo";
import UpdateVideo from "./containers/admin/updateVideo";
import MyProfile from "./containers/admin/myProfile";
import UpdateProfile from "./containers/admin/updateProfile";

class Admin extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/admin" component={Dashboard} />
                <Route path="/admin/add_picture" component={AddPicture} />
                <Route path="/admin/update_picture/:id" component={UpdatePicture} />
                <Route path="/admin/videos" component={Videos} />
                <Route path="/admin/add_video" component={AddVideo} />
                <Route path="/admin/update_video/:id" component={UpdateVideo} />
                <Route path="/admin/profile" component={MyProfile} />
                <Route path="/admin/update_profile" component={UpdateProfile} />
            </Switch>
        );
    }
}

export default Admin;
