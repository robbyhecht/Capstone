import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import "./Nav.css"
export default class NavBar extends Component {
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
        <Navbar id="navBar" light expand="md">
          <NavbarBrand href="/" id="navTitle">VIRTUAL AGENT</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/venues/" id="navVenues">VENUES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tours/" id="navTours">TOURS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about/" id="navAbout">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/logout/" id="navLogout">LOG OUT</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}