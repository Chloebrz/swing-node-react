// Dependencies
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { deletePicture } from "../../actions";

class PictureBox extends Component {
    handleDeleteClick() {
        this.props.deletePicture({ id: this.props.id });
    }

    render() {
        return (
            <div>
                <hr className="featurette-divider" />
                <div className="row featurette">
                    <div className="col-md-5 order-md-2">
                        <h2 className="featurette-heading">
                            {this.props.name}
                        </h2>
                        <p className="lead">
                            {this.props.legend}
                        </p>
                        <img
                            className="icon"
                            src={require("../../images/icons/delete.png")}
                            onClick={this.handleDeleteClick.bind(this)}
                        />
                        <Link to={`/admin/updatepicture/${this.props.id}`}>
                            <img className="icon" src={require("../../images/icons/edit.png")} />
                        </Link>
                    </div>
                    <div className="col-md-7 order-md-1">
                        <img
                            className="featurette-image img-fluid mx-auto"
                            src={`data:${this.props.type};base64,${this.props.res}`}
                            alt={this.props.name}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

PictureBox.propTypes = {
    deletePicture: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    legend: PropTypes.string,
    type: PropTypes.string,
    res: PropTypes.string
};

export default connect(null, { deletePicture })(PictureBox);