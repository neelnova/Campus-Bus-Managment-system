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

  import AdminMaster from './AdminMaster';
  import './AddBus.css';
  import axios from 'axios';
export default class Addbus1 extends Component {

        constructor(props){
          super(props);

          this.state={
            busNumber:'',
            driverBus:'',
            driversss:[]
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(event){
          
          this.setState({[event.target.name]:event.target.value})
          //console.log(this.state);
        }

        handleSubmit(event){
          // this.setState({[event.target.name]:event.target.value}) 
          event.preventDefault()
          console.log(this.state);
          
        }

        componentDidMount()
        {
            const apiUrl='http://localhost/CampusBusManagementSystem/displayDriverDropDown.php';
    
            fetch(apiUrl)
            .then(res=>res.json())
            .then(
                (result)=>{
                    this.setState({
                        driversss: result
                        
                    })
                },
                (error)=>{
                    this.setState({error})
                }
            )
            
        }

  render() {
    const {busNumber,driverBus}=this.state;
    const {error}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
    return (
      <div>
          <center>
                  <div className="container">
                      <div className="container-fluid">
                          <div className="container bgimg">
                        <div className="jumbotron justify-content-center text-center clcss col-md-6">
                        <center>
                            <i className="fa fa-bus fa-4x fa-bus1"></i>
                        </center>
                       

                        <form className="mar" onSubmit={(this.handleSubmit)}>
                       
                       
                            <div className="row">
                                <div className="col">
                                <input type="text" className="form-control" placeholder="Bus Number"  name="busNumber" value={busNumber} onChange={this.handleChange}/>
                                </div>
                                
                            </div>
                            <div className="row marInput">
                            <div className="col">

                                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref"  name="driverBus" value={driverBus} onChange={this.handleChange}>
                                          <option selected disabled>Select Driver</option>
                                        {this.state.driversss.map((driverBus) =>
                                           <option key={driverBus.id} value={driverBus.driverName}>{driverBus.driverName}</option>)}
                                        </select>                               

                                        </div>
                                
                            </div>
                            
                               
                               
                                
                            
                           
                            <div className="row marInput">
                                <div className="col">
                                <button type="submit" className="buttonn">Add Bus</button>
                                </div>
                                
                            </div>
                            

                       </form>
                       </div>
                       </div>
                       </div>
                       </div>
                           
                    
                        
                        
                
                
                </center>
      </div>
    )
  }
}
