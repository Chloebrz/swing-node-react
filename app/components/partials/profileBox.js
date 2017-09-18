// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import PictureBox from "../partials/pictureBox";

class ProfileBox extends Component {
    renderVerifyEmail() {
        if (this.props.profile.isVerified)
            return <img className="icon-sm" src={require("../../images/icons/checkmark.png")} />;
    }

    renderBio() {
        if (!this.props.profile.bio) return;

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
                            {this.props.profile.email}{" "}
                            {this.props.profile.isVerified &&
                                <img
                                    className="icon-sm"
                                    src={require("../../images/icons/checkmark.png")}
                                />}
                        </p>
                    </div>
                </div>

                <br />
                <br />

                {this.renderBio()}
            </div>
        );
    }

    renderPictures() {
        if (!this.props.pictures || this.props.pictures.length < 1) return;

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
        return (
            <div>
                {this.renderProfile()}
                <div className="row">
                    {this.renderPictures()}
                </div>
            </div>
        );
    }
}

ProfileBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    pictures: PropTypes.arrayOf(PropTypes.object)
};

export default ProfileBox;
