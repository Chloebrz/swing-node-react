// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchProfile } from "../../actions/profiles";
import ProfileBox from "../partials/profileBox";

class Profile extends Component {
    componentWillMount() {
        this.props.fetchProfile({ id: this.props.match.params.id });
    }

    render() {
        return <ProfileBox profile={this.props.profile} />;
    }
}

Profile.propTypes = {
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

function mapStateToProps({ profile }) {
    return { profile };
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
