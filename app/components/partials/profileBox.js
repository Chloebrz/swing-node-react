// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "../../css/profile.css";

class ProfileBox extends Component {
    renderBio() {
        if (!this.props.profile.bio && !this.props.admin) return;

        if (this.props.admin && !this.props.bio)
            return (
                <p>
                    <Link to="/admin/update_profile">Ajouter une bio</Link>
                </p>
            );

        if (this.props.admin && this.props.bio)
            return (
                <div>
                    <h2>Bio :</h2>
                    <p>
                        {this.props.auth.bio}
                    </p>
                </div>
            );

        return;
        <div>
            <h2>Bio :</h2>
            <p>
                {this.props.profile.bio}
            </p>
        </div>;
    }

    renderUpdateLink() {
        if (this.props.admin)
            return (
                <Link to="/admin/update_profile" className="btn btn-info">
                    Modifier
                </Link>
            );
    }

    renderProfile() {
        if (!this.props.profile) return;

        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <img src={require("../../images/placeholders/profile.png")} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                        <h2>
                            {this.props.profile.name.firstname} {this.props.profile.name.lastname}
                        </h2>
                        <p>
                            {this.props.profile.email}
                        </p>
                    </div>
                </div>

                <br />
                <br />

                {this.props.profile.bio &&
                    <div>
                        <h2>Bio :</h2>
                        <p>
                            {this.props.profile.bio}
                        </p>
                    </div>}

                {this.renderUpdateLink()}
            </div>
        );
    }

    render() {
        return (
            <div className={styles}>
                {this.renderProfile()}
            </div>
        );
    }
}

ProfileBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    admin: PropTypes.bool
};

export default ProfileBox;
