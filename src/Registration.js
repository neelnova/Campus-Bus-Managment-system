import React, { Component } from 'react'
import Visitor from './Visitor'
import { Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';


import {Fieldset} from 'primereact/fieldset';
import './Login.css'
import './Registration.css'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default class Registration extends Component {

    constructor() {
        super();
        this.state = {
            value: null
        };
    }
    toggle() {
        this.setState({disabled: !this.state.disabled});
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Visitor/>
                </div>
               
               
                {/* <div className="container">
                    <div className="container-fluid">
                        <div className="container-fluid-12">
                            
                       
                            <div className="jumbotron col-md-10">
                                
                               
                            <Fieldset className="p-fieldset-toggleable fs" legend="Login Here!!!" >
                               
                                
                                <Form>
                               
                                        <FormGroup row>
                                       
                                        <Col sm={6}>
                                        
  
                                        <span className="p-float-label">
                                            <InputText id="float-input" type="text" size="30" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
                                            <label htmlFor="float-input">UserName</label>
                                        </span>

                                        </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            
                                       
                                        <Col sm={6} className="textin">
                                        
  
                                        <span className="p-float-label">
                                            <InputText id="float-input" type="text" size="30" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})}  />
                                            <label htmlFor="float-input">Password</label>
                                        </span>

                                        </Col>
                                        </FormGroup>
                                    
                                        <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button className="btnColor">Submit</Button>
                                        </Col>
                                        </FormGroup>
                                        </Form>     
                                       
                                        </Fieldset>
                                       
                           
                            </div>
                        
                        


                        </div>
                        
                        
                       
                    </div>
                
                    
                </div> */}

                <div className="container divcont">
                    <div className="jumbotron row justify-content-center text-center my-auto">
                        <div className="col-md-12">
                        </div>
                        <div className="col-md-5">
                        
                             <Form>
                               
                                        <FormGroup row>
                                       
                                        <Col sm={6}>
                                        
  
                                        <span className="p-float-label">
                                            <InputText className="inn" id="float-input" type="text" size="30" value={this.state.value2} />
                                            {/*  for value    onChange={(e) => this.setState({value2: e.target.value})} */}
                                            <label htmlFor="float-input">Student Name</label>
                                        </span>

                                        </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            
                                       
                                        <Col sm={6} className="textin">
                                        
  
                                        <span className="p-float-label">
                                            <InputText id="float-input" type="text" size="30" value={this.state.value2} className="inn"   />
                                            {/* for value  onChange={(e) => this.setState({value2: e.target.value})} */}
                                            <label htmlFor="float-input">Email Address</label>
                                        </span>

                                        </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                       
                                        <Col sm={6}>
                                        
  
                                        <span className="p-float-label textin">
                                        <Password value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}  size="30"   className="inn"  />
                                            {/*  for value    onChange={(e) => this.setState({value2: e.target.value})} */}
                                            <label htmlFor="float-input">Password</label>
                                        </span>

                                        </Col>
                                        </FormGroup>
                                    
                                        <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                        <Button label="Warning" className="p-button-rounded p-button-warning" />
                                        </Col>
                                        </FormGroup>
                                        </Form>   
                                         

                        </div>
                    </div>
                </div>
             
              
            </div>

          
        )
    }
}
