// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import { fetchPictures } from "../../actions/pictures";
import PictureBox from "../../components/partials/boxes/adminPictureBox";

class Dashboard extends Component {
    constructor() {
        super();
        this.state = { n: 0 };
    }

    componentDidMount() {
        this.props.fetchPictures({ n: this.state.n });
    }

    renderLoadMore() {
        if (this.props.pictures.length === 0 || this.props.fetch_pictures_done) return;

        return (
            <div className="center">
                <hr className="divider" />
                <button
                    className="btn btn-secondary"
                    onClick={() => {
                        const n = ++this.state.n;
                        this.setState({ n });
                        this.props.fetchPictures({ n: this.state.n });
                    }}
                >
                    Plus
                </button>
            </div>
        );
    }

    renderPictures() {
        if (!this.props.fetch_pictures_success)
            return (
                <img
                    className="icon-xl icon-loading"
                    src={require("../../images/icons/loading.gif")}
                />
            );

        if (this.props.pictures.length === 0) return <div>Pas d'images</div>;

        return this.props.pictures.map(picture => {
            return (
                <PictureBox
                    key={picture._id}
                    id={picture._id}
                    name={picture.name}
                    type={picture.img.contentType}
                    res={picture.img.res}
                    legend={picture.legend}
                    date={moment(picture.createdAt).format("D MMMM YY")}
                    creatorId={picture.creatorId}
                    creator={
                        picture.user_doc &&
                        `${picture.user_doc[0].name.firstname} ${picture.user_doc[0].name.lastname}`
                    }
                    isCreator={this.props.auth._id === picture.creatorId}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <div className="center">
                    <Link to="/admin/add_picture">
                        <img
                            className="icon-md center"
                            src={require("../../images/icons/add.png")}
                        />
                    </Link>
                </div>

                {this.renderPictures()}
                {this.renderLoadMore()}
            </div>
        );
    }
}

Dashboard.propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    fetch_pictures_success: PropTypes.bool,
    fetch_pictures_done: PropTypes.bool,
    pictures: PropTypes.arrayOf(PropTypes.object),
    fetchPictures: PropTypes.func
};

function mapStateToProps({ auth, pictures, success }) {
    return {
        auth,
        pictures,
        fetch_pictures_success: success.fetch_pictures_success,
        fetch_pictures_done: success.fetch_pictures_done
    };
}

export default connect(mapStateToProps, { fetchPictures })(Dashboard);
