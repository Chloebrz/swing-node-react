// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { sendVerifyToken } from "../../actions/profiles";
import { SEND_TOKEN_RESET } from "../../constants/profiles_types";
import * as s from "../../constants/state";
import ProfileBox from "../../components/partials/boxes/adminProfileBox";

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
    send_token: PropTypes.oneOf([s.RESET, s.LOADING, s.SUCCESS, s.ERROR]),
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
