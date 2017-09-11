// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterLogin from "../partials/registerLogin";
import { fetchErrors } from "../../actions";

class Login extends Component {
    componentDidMount() {
        this.props.fetchErrors();
    }

    render() {
        return (
            <RegisterLogin
                title="Se connecter"
                actionLink="/auth/login"
                question="Pas encore inscrit ?"
                redirectLink="/signup"
                redirectTitle="S'inscrire"
                error={this.props.errors.login_error}
            />
        );
    }
}

function mapStateToProps({ errors }) {
    return { errors };
}

export default connect(mapStateToProps, { fetchErrors })(Login);
