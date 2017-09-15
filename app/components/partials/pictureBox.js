// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class PictureBox extends Component {
    render() {
        return (
            <div className="card">
                <img
                    src={`data:${this.props.type};base64,${this.props.res}`}
                    alt={this.props.name}
                />
                <p className="card-text">
                    {this.props.legend}
                </p>
                <p className="card-text">
                    Ajouté le : {this.props.date}{" "}
                    {this.props.creatorId &&
                        <label>
                            par{" "}
                            <Link to={`/profile/${this.props.creatorId}`}>
                                {this.props.creator}
                            </Link>
                        </label>}
                </p>
            </div>
        );
    }
}

PictureBox.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    res: PropTypes.string,
    legend: PropTypes.string,
    creatorId: PropTypes.string
};

export default PictureBox;
