// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchProfile } from "../../actions/profiles";
import { fetchUserPictures } from "../../actions/pictures";
import ProfileBox from "../partials/profileBox";

class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfile({ id: this.props.match.params.id });
        this.props.fetchUserPictures({ id: this.props.match.params.id });
    }

    renderProfile() {
        switch (this.props.profile) {
            case null:
                return (
                    <img
                        className="icon icon-xl icon-loading"
                        src={require("../../images/icons/loading.gif")}
                    />
                );

            case false:
                return (
                    <div className="center">
                        <img src={require("../../images/placeholders/404.png")} />
                    </div>
                );

            default:
                return <ProfileBox profile={this.props.profile} pictures={this.props.pictures} />;
        }
    }

    render() {
        return (
            <div>
                {this.renderProfile()}
            </div>
        );
    }
}

Profile.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    pictures: PropTypes.arrayOf(PropTypes.object),
    fetchProfile: PropTypes.func,
    fetchUserPictures: PropTypes.func
};

function mapStateToProps({ profile, pictures }) {
    return { profile, pictures };
}

export default connect(mapStateToProps, { fetchProfile, fetchUserPictures })(Profile);
