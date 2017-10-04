// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { fetchUser } from "../../actions/profiles";
import styles from "../../css/partials/header.css";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isMenuOpen: false,
            isDropdownOpen: false
        };
    }

    componentDidMount() {
        this.props.fetchUser();
    }

    toggle() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    toggleDropdown() {
        this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
    }

    closeToogle() {
        this.setState({
            isMenuOpen: false,
            isDropdownOpen: false
        });
    }

    renderPublicContent() {
        return (
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
            </ul>
        );
    }

    renderPrivateContent() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                    <Link className="nav-link" to="/admin">
                        Images
                    </Link>
                </li>
                <li className="nav-item" onClick={this.closeToogle.bind(this)}>
                    <Link className="nav-link" to="/admin/videos">
                        Videos
                    </Link>
                </li>
                <li className={`nav-item dropdown ${this.state.isDropdownOpen ? "show" : ""}`}>
                    <a
                        className="nav-link dropdown-toggle"
                        onClick={this.toggleDropdown.bind(this)}
                    >
                        Website
                    </a>
                    <div className={`dropdown-menu ${this.state.isDropdownOpen ? "show" : ""}`}>
                        <Link
                            className="dropdown-item"
                            to="/"
                            onClick={this.closeToogle.bind(this)}
                        >
                            Accueil
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="/description"
                            onClick={this.closeToogle.bind(this)}
                        >
                            Description
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="/images"
                            onClick={this.closeToogle.bind(this)}
                        >
                            Images
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="/triul"
                            onClick={this.closeToogle.bind(this)}
                        >
                            Triul
                        </Link>
                        <Link
                            className="dropdown-item"
                            to="/contact"
                            onClick={this.closeToogle.bind(this)}
                        >
                            Contact
                        </Link>
                    </div>
                </li>
                <li className="nav-item" key="profile">
                    <a className="nav-link" href="/admin/profile">
                        Mon profil
                    </a>
                </li>
                <li className="nav-item" key="logout">
                    <a className="nav-link active" href="/api/auth/logout">
                        Logout
                    </a>
                </li>
            </ul>
        );
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return this.renderPublicContent();
            case false:
                return this.renderPublicContent();
            default:
                return this.renderPrivateContent();
        }
    }

    render() {
        return (
            <nav className={styles} className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">
                    <img id="logo" src={require("../../images/s-wing.png")} alt="SWING" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={this.toggle}>
                    <span className="navbar-toggler-icon" />
                </button>

                <div className={`collapse navbar-collapse ${this.state.isMenuOpen ? "show" : ""}`}>
                    {this.renderContent()}
                </div>
            </nav>
        );
    }
}

Header.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
    fetchUser: PropTypes.func
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps, { fetchUser })(Header);
