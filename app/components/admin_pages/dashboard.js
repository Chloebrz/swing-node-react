// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import { fetchPictures } from "../../actions";
import PictureBox from "../admin_partials/pictureBox";
import style from "../../css/dashboard.css";

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchPictures();
    }

    renderPictures() {
        if (!this.props.success.fetch_success)
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
                    creator={this.props.auth._id === picture.creatorId}
                />
            );
        });
    }

    render() {
        return (
            <div className={style}>
                <div className="center">
                    <Link to="/admin/addpicture">
                        <img
                            className="icon-md center"
                            src={require("../../images/icons/add.png")}
                        />
                    </Link>
                </div>

                {this.renderPictures()}
            </div>
        );
    }
}

Dashboard.propTypes = {
    fetchPictures: PropTypes.func,
    pictures: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps({ auth, pictures, success }) {
    return { auth, pictures, success };
}

export default connect(mapStateToProps, { fetchPictures })(Dashboard);
