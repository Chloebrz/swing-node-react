// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { postPicture } from "../../actions";
import PictureForm from "../admin_partials/pictureForm";

class AddPicture extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.success.post_success) this.props.history.push("/admin");
    }

    handleSubmit(payload) {
        this.props.postPicture({
            name: payload.name,
            img: payload.img,
            legend: payload.legend
        });
    }

    render() {
        return (
            <div>
                <h1>Nouvelle image</h1>
                <p>
                    Ajouter une nouvelle image avec un titre (5 caractères minimum) et une légende
                    (10 caractères minimum).
                </p>

                <PictureForm
                    handleSubmit={this.handleSubmit.bind(this)}
                    history={this.props.history}
                />
            </div>
        );
    }
}

AddPicture.propTypes = {
    success: PropTypes.object
};

function mapStateToProps({ success }) {
    return { success };
}

export default connect(mapStateToProps, { postPicture })(AddPicture);
