// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPicture, updatePicture } from "../../actions";
import PictureForm from "./pictureForm";

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
        if (newProps.success.update_success) this.props.history.push("/admin");

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
        if (!this.state.loaded) return <div />;

        return (
            <PictureForm
                name={this.state.name}
                legend={this.state.legend}
                res={this.state.res}
                handleSubmit={this.handleSubmit.bind(this)}
            />
        );
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

function mapStateToProps({ success, pictures }) {
    return { success, picture: pictures[0] };
}

export default connect(mapStateToProps, { fetchPicture, updatePicture })(UpdatePicture);
