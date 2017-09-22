// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { signupUser, fetchUser } from "../../actions/profiles";
import RegisterForm from "../partials/registerForm";

class Signup extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.signup_login_success) {
            this.props.fetchUser();
            this.props.history.push("/admin");
        }
    }

    submit(values) {
        this.props.signupUser({
            email: values.email,
            password: values.password
        });
    }

    render() {
        return <RegisterForm onSubmit={this.submit.bind(this)} err={this.props.error} />;
    }
}

Signup.propTypes = {
    signup_login_success: PropTypes.bool,
    fetchUser: PropTypes.func,
    signupUser: PropTypes.func
};

function mapStateToProps({ success, errors }) {
    return { signup_login_success: success.signup_login_success, error: errors.error_signup };
}

export default connect(mapStateToProps, { signupUser, fetchUser })(Signup);
