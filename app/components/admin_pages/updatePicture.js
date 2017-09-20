// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { fetchPicture, updatePicture } from "../../actions/pictures";
import PictureForm from "../admin_partials/pictureForm";

class UpdatePicture extends Component {
    constructor() {
        super();

        this.state = {
            file: null,
            name: "",
            legend: "",
            res: "",
            loaded: false
        };
    }

    componentWillMount() {
        this.props.fetchPicture({ id: this.props.match.params.id });
    }

    componentWillReceiveProps(newProps) {
        if (newProps.update_picture_success) this.props.history.push("/admin");

        if (newProps.picture)
            this.state = {
                res: `data:${newProps.picture.img.contentType};base64,${newProps.picture.img.res}`,
                name: newProps.picture.name,
                legend: newProps.picture.legend,
                loaded: true
            };
    }

    handleSubmit(payload) {
        var picture = {
            id: this.props.match.params.id,
            name: payload.name,
            legend: payload.legend
        };

        if (payload.img) picture.img = payload.img;
        this.props.updatePicture(picture);
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
                        name={this.state.name}
                        legend={this.state.legend}
                        res={this.state.res}
                        handleSubmit={this.handleSubmit.bind(this)}
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
