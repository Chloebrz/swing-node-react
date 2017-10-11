// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { postVideo } from "../../actions/videos";
import VideoForm from "../../components/partials/forms/videoForm";

class AddVideo extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.post_video_success) this.props.history.push("/admin/videos");
    }

    submit(values) {
        return this.props.postVideo({
            name: values.name,
            legend: values.legend,
            file: values.file
        });
    }

    render() {
        return (
            <div>
                <h1>Nouvelle vidéo</h1>
                <p>
                    Ajouter une nouvelle vidéo avec un titre (5 caractères minimum) et une légende
                    (15 caractères minimum).
                </p>
                <VideoForm onSubmit={this.submit.bind(this)} history={this.props.history} />
            </div>
        );
    }
}

AddVideo.propTypes = {
    post_video_success: PropTypes.bool,
    postVideo: PropTypes.func
};

function mapStateToProps({ success }) {
    return { post_video_success: success.post_video_success };
}

export default connect(mapStateToProps, { postVideo })(AddVideo);
