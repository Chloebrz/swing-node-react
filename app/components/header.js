// Dependencies
import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class Header extends Component {
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
    }

    render() {
        return (
            <div>
                <Navbar color="faded" light toggleable>
                    <NavbarToggler right onClick={this.toggle} />
                    <NavbarBrand href="/">SWING</NavbarBrand>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/description">Description</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/images">Images</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/triul">Triul</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
