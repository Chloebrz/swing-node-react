// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import VideoBox from "../admin_partials/videoBox";
import styles from "../../css/pages/dashboard.css";

class Videos extends Component {
    renderVideos() {
        return this.props.videos.map(video => {
            return (
                <VideoBox
                    key={video._id}
                    title={video.title}
                    url={video.url}
                    legend={video.legend}
                    date={moment(video.createdAt).format("D MMMM YY")}
                />
            );
        });
    }

    render() {
        return (
            <div className={styles}>
                <div className="center">
                    <Link to="/admin/add_video">
                        <img
                            className="icon-md center"
                            src={require("../../images/icons/add.png")}
                        />
                    </Link>
                </div>

                {this.renderVideos()}
            </div>
        );
    }
}

Videos.propTypes = {
    videos: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps)(Videos);
