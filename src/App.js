import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MasterPageNavigation from './MasterPageNavigation';


import { Button, ButtonToolbar } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
 import { Carousel,Alert } from 'react-bootstrap';
 import Register from './Registrationn'
 



import {Navbar, Nav, NavItem,NavDropdown,Form,FormControl} from 'react-bootstrap';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      error:null,
      products:[],
      response:{},
      product:{}
    }
    this.onStudentFormSubmit=this.onStudentFormSubmit.bind(this);
  }
    
 
    onStudentFormSubmit(data){
      const apiUrl="http://localhost/CampusBusManagementSystem/register.php";
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
  
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        myHeaders
      };
  
      fetch(apiUrl, options)
        .then(res => res.json())
        .then(result => {
          this.setState({
            response: result,
            isAddProduct: false
          })
        },
        (error) => {
          this.setState({ error }); 
        }
      )
    }



  render() {
   
    return (
     <div className="App">
       <Register onStudentFormSubmit={this.onStudentFormSubmit}/>

{this.state.response.status === 'success' && <div><br /> <Alert variant="info">{this.state.response.message}</Alert></div>} }

      
       </div>
      
    )
  
   // return React.createElement('div',{className:'App'},React.createElement('h1',{className:'App'},'hey'));
  }
}

export default App;
