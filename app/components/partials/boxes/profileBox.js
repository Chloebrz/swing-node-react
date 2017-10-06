// Dependencies
import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import PictureBox from "../boxes/pictureBox";
import styles from "../../../css/partials/profile.css";

const renderProfile = profile => {
    if (!profile) return;

    return (
        <div>
            <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-5">
                    <img
                        className="profile-picture"
                        src={require("../../../images/placeholders/profile.png")}
                    />
                </div>
                <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                    <h2>
                        {profile.name.firstname} {profile.name.lastname}
                    </h2>
                    <p>
                        {profile.email}{" "}
                        {profile.isVerified &&
                            <img
                                className="icon-sm"
                                src={require("../../../images/icons/checkmark.png")}
                            />}
                    </p>
                </div>
            </div>

            {profile.bio &&
                <div>
                    <h2>Bio :</h2>
                    <p>
                        {profile.bio}
                    </p>
                </div>}
        </div>
    );
};

const renderPictures = pictures => {
    if (!pictures || pictures.length < 1) return;

    return pictures.map(picture => {
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
};

const ProfileBox = props => {
    return (
        <div className={styles}>
            {renderProfile(props.profile)}
            <div className="row">
                {renderPictures(props.pictures)}
            </div>
        </div>
    );
};

ProfileBox.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    pictures: PropTypes.arrayOf(PropTypes.object)
};

export default ProfileBox;
