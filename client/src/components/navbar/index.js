import React from 'react';
import "./style.css"
import logo from "../../imgs/whitelogo.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class ThisNavbar extends React.Component {
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
        <Navbar color="#51CAF5" expand="md">
          <NavbarBrand href="/"><img id="logo" src={logo} alt="Logo"></img><div id="logoText">THIS.</div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem id="navLinks">
                <NavLink id="Active" href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/members">Members</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ThisNavbar;
