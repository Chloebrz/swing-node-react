// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "../../css/signup-login.css";

class RegisterLogin extends Component {
    render() {
        return (
            <div className={style} className="signup-login-box">
                <div className="center">
                    <h3>
                        {this.props.title} avec
                    </h3>
                    <a href="/auth/google">
                        <img
                            className="icon icon-clickable"
                            src={require("../../images/icons/google.png")}
                        />
                    </a>
                </div>

                <p className="divider">ou</p>

                <form action="/auth/login" method="post">
                    <input type="text" name="email" placeholder="* Adresse mail" />
                    <input type="password" name="password" placeholder="* Mot de passe" />
                    {this.props.confirmPassword &&
                        <input
                            type="password"
                            name="password-conf"
                            placeholder="* Confirmation mot de passe"
                        />}
                    <input type="submit" className="btn btn-success" value="Log In" />
                </form>

                <div className="hint">
                    <p>
                        {this.props.question}{" "}
                        <Link to={this.props.redirectLink}>{this.props.redirectTitle}</Link>
                    </p>
                </div>
            </div>
        );
    }
}

RegisterLogin.propTypes = {
    title: PropTypes.string,
    confirmPassword: PropTypes.bool,
    question: PropTypes.string,
    redirectLink: PropTypes.string,
    redirectTitle: PropTypes.string
};

export default RegisterLogin;
