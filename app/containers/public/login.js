// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser, fetchUser } from "../../actions/profiles";
import LoginSignupForm from "../../components/partials/forms/loginSignupForm";

class Login extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.signup_login_success) {
            this.props.fetchUser();
            this.props.history.push("/admin");
        }
    }

    submit(values) {
        return this.props.loginUser({
            email: values.email,
            password: values.password
        });
    }

    render() {
        return (
            <LoginSignupForm
                onSubmit={this.submit.bind(this)}
                title="Se connecter"
                signup={false}
                redirectQuestion="Pas encore inscrit ?"
                redirectLink="/signup"
                redirectTitle="S'inscrire"
                err={this.props.error}
            />
        );
    }
}

Login.propTypes = {
    signup_login_success: PropTypes.bool,
    fetchUser: PropTypes.func,
    loginUser: PropTypes.func
};

function mapStateToProps({ success, errors }) {
    return { signup_login_success: success.signup_login_success, error: errors.login_error };
}

export default connect(mapStateToProps, { loginUser, fetchUser })(Login);
