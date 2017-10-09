// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import moment from "moment";
moment.locale("fr");

import { fetchVideos } from "../../actions/videos";
import VideoBox from "../../components/partials/boxes/adminVideoBox";

class Videos extends Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    renderVideos() {
        return this.props.videos.map(video => {
            return (
                <VideoBox
                    key={video._id}
                    name={video.name}
                    url={video.url}
                    type={video.mimetype}
                    legend={video.legend}
                    date={moment(video.createdAt).format("D MMMM YY")}
                />
            );
        });
    }

    render() {
        return (
            <div>
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
    videos: PropTypes.arrayOf(PropTypes.object),
    fetchVideos: PropTypes.func
};

function mapStateToProps({ videos }) {
    return { videos };
}

export default connect(mapStateToProps, { fetchVideos })(Videos);
