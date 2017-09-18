// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signupUser, fetchUser } from "../../actions/profiles";
import RegisterLogin from "../partials/registerLogin";

class Signup extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.signup_login_success) {
            this.props.fetchUser();
            this.props.history.push("/admin");
        }
    }

    handleSubmit(payload) {
        this.props.signupUser({
            email: payload.email,
            password: payload.password
        });
    }

    render() {
        return (
            <RegisterLogin
                title="S'inscrire"
                confirmPassword={true}
                question="Déjà inscrit ?"
                redirectLink="/login"
                redirectTitle="Se connecter"
                handleSubmit={this.handleSubmit.bind(this)}
                errors={this.props.errors}
            />
        );
    }
}

Signup.propTypes = {
    signup_login_success: PropTypes.bool,
    errors: PropTypes.object,
    signupUser: PropTypes.func,
    fetchUser: PropTypes.func
};

function mapStateToProps({ success, errors }) {
    return { signup_login_success: success.signup_login_success, errors };
}

export default connect(mapStateToProps, { signupUser, fetchUser })(Signup);
