// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchVideo, updateVideo } from "../../actions/videos";
import VideoForm from "../../components/partials/forms/videoForm";

class UpdateVideo extends Component {
    componentWillMount() {
        this.props.fetchVideo({ id: this.props.match.params.id });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.update_video_success) this.props.history.push("/admin/videos");
    }

    submit(values) {
        this.props.updateVideo({
            id: this.props.match.params.id,
            name: values.name,
            legend: values.legend
        });
    }

    renderVideoForm() {
        switch (this.props.video) {
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
                return (
                    <VideoForm
                        video={this.props.video}
                        onSubmit={this.submit.bind(this)}
                        history={this.props.history}
                        update={true}
                    />
                );
        }
    }

    render() {
        return (
            <div>
                <h1>Modifier la vidéo</h1>
                <p>
                    Modifier la vidéo sélectionnée avec un titre (5 caractères minimum) et une
                    légende (10 caractères minimum).
                </p>
                <p>
                    Note : vous ne pouvez pas modifier le fichier vidéo. Si nécessaire, supprimer le
                    document entier et ajouter une nouvelle vidéo.
                </p>
                {this.renderVideoForm()}
            </div>
        );
    }
}

UpdateVideo.propTypes = {
    update_video_success: PropTypes.bool,
    video: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    fetchVideo: PropTypes.func,
    updateVideo: PropTypes.func
};

function mapStateToProps({ success, video }) {
    return { update_video_success: success.update_video_success, video };
}

export default connect(mapStateToProps, { fetchVideo, updateVideo })(UpdateVideo);
