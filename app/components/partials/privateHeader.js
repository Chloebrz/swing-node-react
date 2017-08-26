// Dependencies
import React, { Component } from "react";

class PrivateHeader extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/api/logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default PrivateHeader;
