// Dependencies
import React, { Component } from "react";

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

export default ContactBox;
