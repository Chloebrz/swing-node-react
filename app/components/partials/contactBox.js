// Dependencies
import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactBox extends Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.name}
                </h1>
                <p>
                    {this.props.desc}
                    {this.props.children}
                </p>
                <p>
                    {this.props.emailDesc}{" "}
                    <a href={"mailto:" + this.props.emailAddress + "?subject=SWING"}>ici</a>
                </p>
            </div>
        );
    }
}

ContactBox.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    children: PropTypes.array,
    emailDesc: PropTypes.string,
    emailAddress: PropTypes.string
};

export default ContactBox;
