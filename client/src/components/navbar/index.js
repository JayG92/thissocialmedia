import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
import logo from "../../imgs/this.png";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
        <Navbar color="#51CAF5" light expand="md">
          <NavbarBrand href="/"><img id="logo" src={logo} alt="Logo"></img><div id="logoText">THIS.</div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                      </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                        </DropdownItem>
                  <DropdownItem>
                    Option 2
                        </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                        </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default ThisNavbar;