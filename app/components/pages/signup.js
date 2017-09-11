// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import RegisterLogin from "../partials/registerLogin";
import { fetchErrors } from "../../actions";

class Signup extends Component {
    componentDidMount() {
        this.props.fetchErrors();
    }

    render() {
        return (
            <RegisterLogin
                title="S'inscrire"
                confirmPassword={true}
                actionLink="/auth/signup"
                question="Déjà inscrit ?"
                redirectLink="/login"
                redirectTitle="Se connecter"
                error={this.props.errors.login_error}
            />
        );
    }
}

function mapStateToProps({ errors }) {
    return { errors };
}

export default connect(mapStateToProps, { fetchErrors })(Signup);
