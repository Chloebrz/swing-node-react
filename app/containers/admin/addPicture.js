// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { postPicture } from "../../actions/pictures";
import PictureForm from "../../components/partials/forms/pictureForm";

class AddPicture extends Component {
    componentWillReceiveProps(newProps) {
        if (newProps.post_picture_success) this.props.history.push("/admin");
    }

    submit(values) {
        this.props.postPicture({
            name: values.name,
            img: values.image,
            legend: values.legend
        });
    }

    render() {
        return (
            <div>
                <h1>Nouvelle image</h1>
                <p>
                    Ajouter une nouvelle image avec un titre (5 caractères minimum) et une légende
                    (15 caractères minimum).
                </p>
                <PictureForm onSubmit={this.submit.bind(this)} history={this.props.history} />
            </div>
        );
    }
}

AddPicture.propTypes = {
    post_picture_success: PropTypes.bool,
    postPicture: PropTypes.func
};

function mapStateToProps({ success }) {
    return { post_picture_success: success.post_picture_success };
}

export default connect(mapStateToProps, { postPicture })(AddPicture);
