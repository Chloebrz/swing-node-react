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

    render() {
        return <ProfileBox profile={this.props.profile} pictures={this.props.pictures} />;
    }
}

Profile.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

function mapStateToProps({ profile, pictures }) {
    return { profile, pictures };
}

export default connect(mapStateToProps, { fetchProfile, fetchUserPictures })(Profile);
