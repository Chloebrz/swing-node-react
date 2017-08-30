// Dependencies
import React, { Component } from "react";

class PictureBox extends Component {
    render() {
        return (
            <div className="card">
                <img
                    className="card-image"
                    src={`data:${this.props.type};base64,${this.props.res}`}
                    alt={this.props.name}
                />
                <p className="card-text">
                    {this.props.legend}
                </p>
            </div>
        );
    }
}

export default PictureBox;
