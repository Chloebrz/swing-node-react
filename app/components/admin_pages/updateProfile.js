// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { updateProfile } from "../../actions/profiles";
import ProfileForm from "../admin_partials/profileForm";
import styles from "../../css/profile.css";

class UpdateProfile extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.update_profile_success) this.props.history.push("/admin/profile");
    }

    submit(values) {
        this.props.updateProfile({
            id: values.id,
            name: {
                firstname: values.firstname,
                lastname: values.lastname
            },
            bio: values.bio
        });
    }

    render() {
        return (
            <div className={styles}>
                <h1>Modifier mon profil</h1>
                <ProfileForm onSubmit={this.submit.bind(this)} history={this.props.history} />
            </div>
        );
    }
}

function mapStateToProps({ success }) {
    return { update_profile_success: success.update_profile_success };
}

export default connect(mapStateToProps, { updateProfile })(UpdateProfile);
