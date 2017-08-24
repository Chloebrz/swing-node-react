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
                    <a href="/description">Description</a>
                </li>
                <li>
                    <a href="/images">Images</a>
                </li>
                <li>
                    <a href="/triul">Triul</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        );
    }
}

export default Header;
