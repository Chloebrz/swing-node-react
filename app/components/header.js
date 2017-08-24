// Dependencies
import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
        );
    }
}

export default Header;
