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
 
  
 import { Component } from 'react'
 
 export default class DriverMaster extends Component {
    constructor(props){
      super(props);
      const token =localStorage.getItem("name");
      console.log(token);
    } 
  
  render() {
         return (
             <div>
                 <DMaster/>
            
             </div>
         )
     }
 }
 
  


const DMaster = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
        //console.log(data.token);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img src="./Images/logo2.png" alt="UTU" height="50"></img></NavbarBrand>
        <h5>Campus Bus Management System</h5>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
         
            
            <NavItem>
            <Link to="/applyleave"><NavLink><i className="fa fa-home">  Home</i></NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink href="/components/"><i className="fa fa-user">  Profile</i></NavLink>
            </NavItem>
            <NavItem>
            <Link to="/logout"><NavLink><i className="fa fa-sign-out">  Logout</i></NavLink></Link>
            
            </NavItem>
           
           
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}