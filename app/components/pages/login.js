// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loginUser, fetchUser } from "../../actions/profiles";
import LoginForm from "../partials/loginForm";

class Login extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.signup_login_success) {
            this.props.fetchUser();
            this.props.history.push("/admin");
        }
    }

    submit(values) {
        this.props.loginUser({
            email: values.email,
            password: values.password
        });
    }

    render() {
        return <LoginForm onSubmit={this.submit.bind(this)} err={this.props.error} />;
    }
}

Login.propTypes = {
    signup_login_success: PropTypes.bool,
    fetchUser: PropTypes.func,
    loginUser: PropTypes.func
};

function mapStateToProps({ success, errors }) {
    return { signup_login_success: success.signup_login_success, error: errors.error_login };
}

export default connect(mapStateToProps, { loginUser, fetchUser })(Login);
