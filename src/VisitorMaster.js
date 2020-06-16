import React, { useState } from 'react';
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
  import {Link} from 'react-router-dom';

const VisitorMaster = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src="./Images/logo2.png" alt="UTU" height="50"></img></NavbarBrand>
        <h5>Campus Bus Management System</h5>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
         

          <NavItem>
          <Link to="/"><NavLink><i className="fa fa-home">  Home</i></NavLink></Link>
            </NavItem>
            <NavItem>
           <NavLink><i className="fa fa-user">  Profile</i></NavLink>
            </NavItem>
           
           
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default VisitorMaster;