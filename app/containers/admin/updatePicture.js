// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchPicture, updatePicture } from "../../actions/pictures";
import PictureForm from "../../components/partials/forms/pictureForm";

class UpdatePicture extends Component {
    componentWillMount() {
        this.props.fetchPicture({ id: this.props.match.params.id });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.update_picture_success) this.props.history.push("/admin");
    }

    submit(values) {
        var picture = {
            id: this.props.match.params.id,
            name: values.name,
            legend: values.legend
        };

        if (values.image.filename) picture.img = values.image;
        return this.props.updatePicture(picture);
    }

    renderPictureForm() {
        switch (this.props.picture) {
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
                    <PictureForm
                        picture={this.props.picture}
                        onSubmit={this.submit.bind(this)}
                        history={this.props.history}
                    />
                );
        }
    }

    render() {
        return (
            <div>
                <h1>Modifier l'image</h1>
                <p>
                    Modifier l'image sélectionnée avec un titre (5 caractères minimum) et une
                    légende (10 caractères minimum).
                </p>
                {this.renderPictureForm()}
            </div>
        );
    }
}

UpdatePicture.propTypes = {
    update_picture_success: PropTypes.bool,
    picture: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    fetchPicture: PropTypes.func,
    updatePicture: PropTypes.func
};

function mapStateToProps({ success, picture }) {
    return { update_picture_success: success.update_picture_success, picture };
}

export default connect(mapStateToProps, { fetchPicture, updatePicture })(UpdatePicture);
