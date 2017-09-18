// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ProfileBox extends Component {
    renderVerifyEmail() {
        if (this.props.profile.isVerified)
            return <img className="icon-sm" src={require("../../images/icons/checkmark.png")} />;

        return (
            <button
                className="btn btn-link"
                onClick={() => {
                    this.props.sendVerifyToken();
                }}
            >
                Vérifier mon adresse
            </button>
        );
    }

    renderBio() {
        if (!this.props.profile.bio)
            return (
                <p>
                    <Link className="btn btn-link" to="/admin/update_profile">
                        Ajouter une bio
                    </Link>
                </p>
            );

        return (
            <div>
                <h2>Bio :</h2>
                <p>
                    {this.props.profile.bio}
                </p>
            </div>
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
                            {this.props.profile.email} {this.renderVerifyEmail()}
                        </p>
                        {this.props.token_sent &&
                            <div className="alert alert-success" role="alert">
                                <strong>Envoyé !</strong> Un lien de vérification a été envoyé à{" "}
                                {this.props.profile.email}
                            </div>}
                    </div>
                </div>

                <br />
                <br />

                {this.renderBio()}

                <Link to="/admin/update_profile" className="btn btn-info">
                    Modifier
                </Link>
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

ProfileBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    sendVerifyToken: PropTypes.func,
    token_sent: PropTypes.bool
};

export default ProfileBox;
