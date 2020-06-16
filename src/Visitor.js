import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Contactuss from './Contactuss'
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
  DropdownItem } from 'reactstrap';

  export default class Visitor extends React.Component {
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
       <body>
         <div class="container-fluid">
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src="./Images/logo2.png" alt="UTU" height="50"></img></NavbarBrand>
          <h5>Campus Bus Management System</h5>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link to="/"><NavLink><i className="fa fa-home"> Home</i></NavLink></Link>
              </NavItem>
              
              <NavItem>
              <Link to="contactus"><NavLink><i className="fa fa-phone"> Contact Us</i></NavLink></Link>
              </NavItem>
              <NavItem>
              <NavLink href="/components/"><i className="fa fa-info-circle"> About Us</i></NavLink>
              </NavItem>
              <NavItem>
              <Link to="Login"><NavLink><i className="fa fa-sign-in"> Login</i></NavLink></Link>
              </NavItem>
              <NavItem>
              <Link to="Registrationn"><NavLink><i className="fa fa-user"> Registration</i></NavLink></Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
         </div>
       </body>
      </div>
    )
  }
}
