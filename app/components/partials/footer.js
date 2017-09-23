// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../css/partials/footer.css";

class Footer extends Component {
    renderLogin() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <Link className="btn-login" to="/login">
                        Se connecter
                    </Link>
                );
            default:
                return;
        }
    }

    render() {
        return (
            <footer className={styles}>
                <p>
                    &copy; Chloé Brouzes 2017 {this.renderLogin()}
                </p>
            </footer>
        );
    }
}

Footer.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Footer);
