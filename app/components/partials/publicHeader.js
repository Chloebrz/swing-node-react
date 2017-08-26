// Dependencies
import React, { Component } from "react";

class PublicHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
        console.log("here", this.state.isOpen);
    }

    render() {
        return (
            <div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-menu"
                    aria-controls="navbar-menu"
                    aria-expanded={this.state.isOpen}
                    aria-label="Toggle navigation"
                    onClick={this.toggle}
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">
                                Accueil
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/description">
                                Description
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/images">
                                Images
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/triul">
                                Triul
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default PublicHeader;
