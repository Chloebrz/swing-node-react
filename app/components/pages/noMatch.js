// Dependencies
import React, { Component } from "react";

class NoMatch extends Component {
    render() {
        return (
            <div className="center">
                <img src={require("../../images/placeholders/404.png")} />
            </div>
        );
    }
}

export default NoMatch;
