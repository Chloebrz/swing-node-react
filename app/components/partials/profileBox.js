// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";
moment.locale("fr");

import styles from "../../css/profile.css";
import PictureBox from "../partials/pictureBox";

class ProfileBox extends Component {
    renderBio() {
        if (!this.props.profile.bio && !this.props.admin) return;

        if (!this.props.profile.bio && this.props.admin)
            return (
                <p>
                    <Link to="/admin/update_profile">Ajouter une bio</Link>
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

                {this.renderBio()}
                {this.renderUpdateLink()}
            </div>
        );
    }

    renderPictures() {
        if (this.props.pictures.length < 1) return;

        return this.props.pictures.map(picture => {
            return (
                <PictureBox
                    key={picture._id}
                    name={picture.name}
                    type={picture.img.contentType}
                    res={picture.img.res}
                    legend={picture.legend}
                    date={moment(picture.createdAt).format("D MMMM YY")}
                />
            );
        });
    }

    render() {
        console.log(this.props.pictures);
        return (
            <div className={styles}>
                {this.renderProfile()}

                {this.renderPictures()}
            </div>
        );
    }
}

ProfileBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    admin: PropTypes.bool,
    pictures: PropTypes.arrayOf(PropTypes.object)
};

export default ProfileBox;
