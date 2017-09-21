// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { sendVerifyToken } from "../../actions/profiles";
import { SEND_TOKEN_RESET } from "../../actions/types";
import * as c from "../../actions/const";
import ProfileBox from "../admin_partials/profileBox";

class MyProfile extends Component {
    componentWillUnmount() {
        this.props.dispatch({ type: SEND_TOKEN_RESET });
    }

    render() {
        return (
            <ProfileBox
                profile={this.props.auth}
                sendVerifyToken={this.props.sendVerifyToken}
                token_sent={this.props.send_token}
            />
        );
    }
}

MyProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    send_token: PropTypes.oneOf([c.RESET, c.LOADING, c.SUCCESS, c.ERROR]),
    sendVerifyToken: PropTypes.func
};

function mapStateToProps({ auth, success }) {
    return { auth, send_token: success.send_token };
}

function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({ sendVerifyToken }, dispatch);
    return { dispatch, sendVerifyToken: actions.sendVerifyToken };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
