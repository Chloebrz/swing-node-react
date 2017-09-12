// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateProfile } from "../../actions/profiles";
import ProfileForm from "../admin_partials/profileForm";
import styles from "../../css/profile.css";

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

    renderProfileForm() {
        if (!this.props.auth) return;

        return (
            <ProfileForm
                handleSubmit={this.handleSubmit.bind(this)}
                firstname={this.props.auth.name.firstname}
                lastname={this.props.auth.name.lastname}
                bio={this.props.auth.bio}
                history={this.props.history}
            />
        );
    }

    render() {
        return (
            <div className={styles}>
                <h1>Modifier mon profil</h1>
                {this.renderProfileForm()}
            </div>
        );
    }
}

UpdateProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    success: PropTypes.object,
    updateProfile: PropTypes.func
};

function mapStateToProps({ auth, success }) {
    return { auth, success };
}

export default connect(mapStateToProps, { updateProfile })(UpdateProfile);
