// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";

import RegisterLogin from "../partials/registerLogin";

class Signup extends Component {
    render() {
        return (
            <RegisterLogin
                title="S'inscrire"
                confirmPassword={true}
                actionLink="/auth/signup"
                question="Déjà inscrit ?"
                redirectLink="/login"
                redirectTitle="Se connecter"
            />
        );
    }
}

export default Signup;
