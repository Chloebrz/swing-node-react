// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "../../css/profile.css";

class MyProfile extends Component {
    renderProfile() {
        if (!this.props.auth) return;

        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-5">
                        <img src={require("../../images/icons/profile_placeholder.png")} />
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-7 margin-center">
                        <h2>
                            {this.props.auth.name.firstname} {this.props.auth.name.lastname}
                        </h2>
                        <p>
                            {this.props.auth.email}
                        </p>
                    </div>
                </div>

                <br />
                <br />

                {this.props.auth.bio
                    ? <div>
                          <h2>Bio :</h2>
                          <p>
                              {this.props.auth.bio}
                          </p>
                      </div>
                    : <p>
                          <Link to="/admin/update_profile">Ajouter une bio</Link>
                      </p>}

                <Link to="/admin/update_profile" className="btn btn-info">
                    Modifier
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div className={styles}>
                {this.renderProfile()}
            </div>
        );
    }
}

MyProfile.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool])
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(MyProfile);
