import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import AddDriver from './AddDriver';
import AdminMaster from './AdminMaster';
import AdminHome from './AdminHome';
import AddBus from './AddBus';
import DriverMaster from './DriverMaster';
import ApplyLeave from './ApplyLeave';
import Logout from './Logout';
import Main from './Main';
export default class AdminMain extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    
                   <DriverMaster/>
                  
                     <Route path="/applyleave" component={ApplyLeave}/>
                    <Route path="/logout" component={Logout}/>
                </BrowserRouter>
            </div>
        )
    }
}
