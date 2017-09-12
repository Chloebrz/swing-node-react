// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class MyProfile extends Component {
    renderProfile() {
        if (!this.props.auth) return;

        return (
            <div>
                <p>
                    {this.props.auth.name ? this.props.auth.name.firstname : "undefined"}{" "}
                    {this.props.auth.name ? this.props.auth.name.lastname : "undefined"}
                </p>
                <p>
                    Bio : {this.props.auth.bio || "undefined"}
                </p>
                <p>
                    Adresse mail : {this.props.auth.email}
                </p>
                <Link to="/admin/update_profile">modifier</Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.renderProfile()}
            </div>
        );
    }
}

MyProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(MyProfile);
