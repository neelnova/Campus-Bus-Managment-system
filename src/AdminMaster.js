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

const AdminMaster = (props) => {
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
            <Link to="adminHome"><NavLink><i className="fa fa-home">  Home</i></NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="addDriver"><NavLink><i className="fa fa-plus">  Add Driver</i></NavLink></Link>
            </NavItem>
            <NavItem>
            <Link to="addBus"><NavLink><i className="fa fa-plus">  Add Bus</i></NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><i className="fa fa-road">  Manage Route Details</i></NavLink>
            </NavItem>
            <NavItem>
              <Link to="viewleave"><NavLink><i className="fa fa-envelope"> View Leave Requests</i></NavLink></Link>
            </NavItem>
            <NavItem>
              <Link to="viewb"><NavLink><i className="fa fa-envelope"> View Feedbacks</i></NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><i className="fa fa-sign-out"> Logout</i></NavLink>
            </NavItem>
           
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AdminMaster;