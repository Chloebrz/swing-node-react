// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchProfile } from "../../actions/profiles";
import { fetchUserPictures } from "../../actions/pictures";
import ProfileBox from "../../components/partials/boxes/profileBox";

class Profile extends Component {
    constructor() {
        super();
        this.state = { n: 0 };
    }

    componentWillMount() {
        this.props.fetchProfile({ id: this.props.match.params.id });
        this.props.fetchUserPictures({ n: this.state.n, id: this.props.match.params.id });
    }

    renderLoadMore() {
        if (this.props.pictures.length === 0 || this.props.fetch_pictures_done) return;

        return (
            <div className="center">
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        const n = ++this.state.n;
                        this.setState({ n });
                        this.props.fetchUserPictures({
                            n: this.state.n,
                            id: this.props.match.params.id
                        });
                    }}
                >
                    Plus
                </button>
            </div>
        );
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
                {this.renderLoadMore()}
            </div>
        );
    }
}

Profile.propTypes = {
    fetch_pictures_done: PropTypes.bool,
    profile: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    pictures: PropTypes.arrayOf(PropTypes.object),
    fetchProfile: PropTypes.func,
    fetchUserPictures: PropTypes.func
};

function mapStateToProps({ profile, pictures, success }) {
    return { profile, pictures, fetch_pictures_done: success.fetch_pictures_done };
}

export default connect(mapStateToProps, { fetchProfile, fetchUserPictures })(Profile);
