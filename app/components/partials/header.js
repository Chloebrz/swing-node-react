// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as actions from "../../actions";
import PublicHeader from "./publicHeader";
import PrivateHeader from "./privateHeader";

class Header extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <PublicHeader />;
            default:
                return <PrivateHeader />;
        }
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <Link to={this.props.auth ? "/admin" : "/"} className="navbar-brand">
                    <img id="logo" src={require("../../images/s-wing.png")} />
                </Link>
                {this.renderContent()}
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
