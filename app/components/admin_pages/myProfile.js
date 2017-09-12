// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfileBox from "../partials/profileBox";

class MyProfile extends Component {
    render() {
        return <ProfileBox profile={this.props.auth} admin={true} />;
    }
}

MyProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(MyProfile);
