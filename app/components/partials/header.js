// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as actions from "../../actions";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeToogle() {
        this.setState({
            isOpen: false
        });
    }

    renderLogout() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return;
            default:
                return (
                    <li className="nav-item">
                        <a className="nav-link active" href="/api/logout">
                            Logout
                        </a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to={this.props.auth ? "/admin" : "/"} className="navbar-brand">
                    <img id="logo" src={require("../../images/s-wing.png")} alt="SWING" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded={this.state.isOpen}
                    aria-label="Toggle navigation"
                    onClick={this.toggle}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div
                    className={`collapse navbar-collapse ${this.state.isOpen ? "show" : ""}`}
                    id="navbar-menu"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                            <Link className="nav-link" to="/">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                            <Link className="nav-link" to="/description">
                                Description
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                            <Link className="nav-link" to="/images">
                                Images
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                            <Link className="nav-link" to="/triul">
                                Triul
                            </Link>
                        </li>
                        <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                        {this.renderLogout()}
                    </ul>
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    fetchUser: PropTypes.func,
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, actions)(Header);
