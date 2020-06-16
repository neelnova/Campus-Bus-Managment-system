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
import StudentMaster from './StudentMaster';
import ViewBusStudents from './ViewBusStudents';
import GiveFeedBack from './GiveFeedBack'

export default class StudentMain extends React.Component {
    render(){

        return (
            <div>
                
                <BrowserRouter>
                    <StudentMaster/>
                   <Route path="/bookbus" component={ViewBusStudents}/>
                   <Route path="/feedback" component={GiveFeedBack}/>
                
                </BrowserRouter>
            </div>
        );
    }
    
}

  



