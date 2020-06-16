import React, {Component} from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {InputText} from 'primereact/inputtext';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class InputTextDemo extends Component {
        
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
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>InputText</h1>
                        <p>InputText is an extension to standard input element with theming and keyfiltering.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <div className="content-section implementation">
                        <h3 className="first">Basic</h3>
                        <InputText value={this.state.value1} onChange={(e) => this.setState({value1: e.target.value})} />
                        <span style={{marginLeft:'.5em'}}>{this.state.value1}</span>

                        <h3>Floating Label</h3>
                       

                        <h3>KeyFilter - Positive Number Only</h3>
                        <InputText type="text" keyfilter="pint" value={this.state.value3} onChange={(e) => this.setState({value3: e.target.value})} />
                    </div>
                </div>

                <Form>
                                        <FormGroup row>
                                       
                                        <Col sm={6}>
                                            <Input type="email" name="email" id="exampleEmail" placeholder="Username" className="fcontrol" />
                                        </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                       
                                        <Col sm={6}>
                         
  


                                        </Col>
                                        </FormGroup>
                                    
                                        <FormGroup check row>
                                        <Col sm={{ size: 10, offset: 2 }}>
                                            <Button className="btnColor">Submit</Button>
                                        </Col>
                                        </FormGroup>
                                </Form>
                               
            </div>
        )
    }
}
