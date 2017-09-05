// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

import RegisterLogin from "../partials/registerLogin";

class Login extends Component {
    render() {
        return (
            <RegisterLogin
                title="Se connecter"
                actionLink="/auth/login"
                question="Pas encore inscrit ?"
                redirectLink="/signup"
                redirectTitle="S'inscrire"
            />
        );
    }
}

export default Login;
