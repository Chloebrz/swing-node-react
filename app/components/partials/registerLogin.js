// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import style from "../../css/signup-login.css";

class RegisterLogin extends Component {
    constructor() {
        super();

        this.state = {
            user: { email: "", password: "", confirmPassword: "" },
            errors: { email: false, password: false, confirmPassword: false }
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.errors) this.setState({ errors: newProps.errors });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState(
            {
                errors: {
                    password:
                        this.state.user.password.trim().length < 5 ? "5 caractères minimum" : false,
                    confirmPassword:
                        this.props.confirmPassword &&
                        this.state.user.password !== this.state.user.confirmPassword
                            ? "Mots de passe non identiques"
                            : false
                }
            },
            function() {
                if (
                    this.state.errors.email ||
                    this.state.errors.password ||
                    this.state.errors.confirmPassword
                )
                    return;

                this.props.handleSubmit({
                    email: this.state.user.email.toLowerCase(),
                    password: this.state.user.password
                });
            }
        );
    }

    handleChange(e, field) {
        e.preventDefault();

        let user = this.state.user;
        user[field] = e.target.value;

        let errors = this.state.errors;
        errors[field] = false;

        this.setState({ user, errors });
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

                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="input">
                        <input
                            type="text"
                            name="email"
                            placeholder="* Adresse mail"
                            value={this.state.user.email}
                            onChange={e => this.handleChange(e, "email")}
                        />
                        {this.state.errors.email &&
                            <div className="error">
                                {this.state.errors.email}
                            </div>}
                    </div>

                    <div className="input">
                        <input
                            type="password"
                            placeholder="* Mot de passe"
                            value={this.state.user.password}
                            onChange={e => this.handleChange(e, "password")}
                        />
                        {this.state.errors.password &&
                            <div className="error">
                                {this.state.errors.password}
                            </div>}
                    </div>

                    <div className="input">
                        {this.props.confirmPassword &&
                            <input
                                type="password"
                                placeholder="* Confirmation mot de passe"
                                value={this.state.user.confirmPassword}
                                onChange={e => this.handleChange(e, "confirmPassword")}
                            />}
                        {this.state.errors.confirmPassword &&
                            <div className="error">
                                {this.state.errors.confirmPassword}
                            </div>}
                    </div>

                    <div className="input">
                        <input type="submit" className="btn btn-success" value={this.props.title} />
                    </div>
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
    redirectTitle: PropTypes.string,
    handleSubmit: PropTypes.func
};

export default RegisterLogin;
