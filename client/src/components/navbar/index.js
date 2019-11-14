import React from 'react';
import "./style.css"
import logo from "../../imgs/whitelogo.png";
import { withContext } from "../../context";

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

  logout = () => {
    window.onbeforeunload = function() {
      localStorage.removeItem('user');
      return '';
    };
  };

  render() {

    console.log("navbar")
    console.log(this.props)

    return (
      <div className="navbarContainer">
        <Navbar color="#51CAF5" expand="md">
          <NavbarBrand href="/"><img id="logo" src={logo} alt="Logo"></img><div id="logoText">THIS.</div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem id="navLinks">
                <a><NavLink className="navTextHome text-center" href="/home">Home</NavLink></a>
              </NavItem>
              <NavItem>
                <a><NavLink className="navText" href="/members">Members</NavLink></a>
              </NavItem>
              <NavItem>
                <a><NavLink className="navText" href="/messages">Messages</NavLink></a>
              </NavItem>
              <NavItem>
                <a><NavLink className="navText" href={"/userprofile/"+this.props._id}>Profile</NavLink></a>
              </NavItem>
              <NavItem>
                <a><NavLink className="navText" onClick={this.logout} href="/">Log Out</NavLink></a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withContext (ThisNavbar);
