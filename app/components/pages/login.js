// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser, fetchUser } from "../../actions/profiles";
import RegisterLogin from "../partials/registerLogin";

class Login extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.signup_login_success) {
            this.props.fetchUser();
            this.props.history.push("/admin");
        }
    }

    handleSubmit(payload) {
        this.props.loginUser({
            email: payload.email,
            password: payload.password
        });
    }

    render() {
        return (
            <RegisterLogin
                title="Se connecter"
                question="Pas encore inscrit ?"
                redirectLink="/signup"
                redirectTitle="S'inscrire"
                handleSubmit={this.handleSubmit.bind(this)}
                errors={this.props.errors}
            />
        );
    }
}

Login.propTypes = {
    signup_login_success: PropTypes.bool,
    errors: PropTypes.object,
    fetchUser: PropTypes.func,
    loginUser: PropTypes.func
};

function mapStateToProps({ success, errors }) {
    return { signup_login_success: success.signup_login_success, errors };
}

export default connect(mapStateToProps, { loginUser, fetchUser })(Login);
