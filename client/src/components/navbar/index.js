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
      isOpen: false,
      _id: ""
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      _id: props._id
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    console.log(this.state)

    return (
      <div>
        <Navbar color="#51CAF5" expand="md">
          <NavbarBrand href="/"><img id="logo" src={logo} alt="Logo"></img><div id="logoText">THIS.</div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem id="navLinks">
                <NavLink className="navTextHome text-center" href="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" href="/members">Members</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" href="/messages">Messages</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" href={"/userprofile/"+this.state._id}>Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="navText" href="/">Log Out</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ThisNavbar;