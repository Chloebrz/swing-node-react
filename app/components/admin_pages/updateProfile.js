// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { updateProfile } from "../../actions";
import ProfileForm from "../admin_partials/profileForm";

class UpdateProfile extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.success.profile_success) this.props.history.push("/admin/profile");
    }

    handleSubmit(payload) {
        this.props.updateProfile({
            id: this.props.auth._id,
            name: {
                firstname: payload.firstname,
                lastname: payload.lastname
            },
            bio: payload.bio
        });
    }

    render() {
        return (
            <ProfileForm
                handleSubmit={this.handleSubmit.bind(this)}
                firstname={this.props.auth.name ? this.props.auth.name.firstname : ""}
                lastname={this.props.auth.name ? this.props.auth.name.lastname : ""}
                bio={this.props.auth.bio}
                email={this.props.auth.email}
            />
        );
    }
}

function mapStateToProps({ auth, success }) {
    return { auth, success };
}

export default connect(mapStateToProps, { updateProfile })(UpdateProfile);
