import React, { Component } from 'react'
import Login from './Login';

import Visitor from './Visitor';
import Home from './Home';
import Registrationn from './Registrationn';
import AdminMain from './AdminMain';

import {BrowserRouter,Route} from 'react-router-dom';
import Contactuss from './Contactuss';
import AdminHome from './AdminHome';
import DriverMain from './DriverMain';
import ApplyLeave from './ApplyLeave'
import StudentMain from './StudentMain'

export default class Main extends React.Component {
    render(){

        return (
            <div>
                
                <BrowserRouter>

                    <Route path="/" exact component={Home}/>
                    <Route path="/contactus" component={Contactuss}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registrationn" component={Registrationn}/>
                    <Route path="/adminmain" component={AdminMain}/>
                    <Route path="/drivermain" component={DriverMain}/>
                    {/* <Route path="/applyleave" component={DriverMain}/> */}
                    {/* <Route path="/AdminHome" component={AdminHome}/> */}
                    <Route path="/visit" component={Visitor}/>
                    <Route path="/studentt" component={StudentMain}/>
                
                </BrowserRouter>
            </div>
        );
    }
    
}

  



