// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateProfile } from "../../actions/profiles";
import ProfileForm from "../../components/partials/forms/profileForm";

class UpdateProfile extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.update_profile_success) this.props.history.push("/admin/profile");
    }

    submit(values) {
        return this.props.updateProfile({
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
            <div>
                <h1>Modifier mon profil</h1>
                <ProfileForm onSubmit={this.submit.bind(this)} history={this.props.history} />
            </div>
        );
    }
}

UpdateProfile.propTypes = {
    update_profile_success: PropTypes.bool,
    updateProfile: PropTypes.func
};

function mapStateToProps({ success }) {
    return { update_profile_success: success.update_profile_success };
}

export default connect(mapStateToProps, { updateProfile })(UpdateProfile);
