// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { sendVerifyToken } from "../../actions/profiles";
import ProfileBox from "../admin_partials/profileBox";

class MyProfile extends Component {
    render() {
        return (
            <ProfileBox
                profile={this.props.auth}
                sendVerifyToken={this.props.sendVerifyToken}
                token_sent={this.props.send_token_success}
            />
        );
    }
}

MyProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    send_token_success: PropTypes.bool,
    sendVerifyToken: PropTypes.func
};

function mapStateToProps({ auth, success }) {
    return { auth, send_token_success: success.send_token_success };
}

export default connect(mapStateToProps, { sendVerifyToken })(MyProfile);
