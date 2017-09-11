// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "../../css/signup-login.css";

class RegisterLogin extends Component {
    constructor(props) {
        super();

        this.state = { error: props.error || false };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.error) this.setState({ error: newProps.error });
    }

    onDismissError() {
        this.setState({ error: false });
    }

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

                <form action={this.props.actionLink} method="post">
                    <input
                        type="text"
                        name="email"
                        placeholder="* Adresse mail"
                        onChange={this.onDismissError.bind(this)}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="* Mot de passe"
                        onChange={this.onDismissError.bind(this)}
                    />

                    {this.props.confirmPassword &&
                        <input
                            type="password"
                            name="password-conf"
                            placeholder="* Confirmation mot de passe"
                            onChange={this.onDismissError.bind(this)}
                        />}

                    {this.state.error &&
                        <div className="alert alert-danger">
                            <strong>Erreur</strong> - {this.state.error}
                        </div>}

                    <input type="submit" className="btn btn-success" value={this.props.title} />
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
    actionLink: PropTypes.string,
    question: PropTypes.string,
    redirectLink: PropTypes.string,
    redirectTitle: PropTypes.string,
    error: PropTypes.string
};

export default RegisterLogin;
