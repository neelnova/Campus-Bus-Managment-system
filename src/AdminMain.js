import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import AddDriver from './AddDriver';
import AdminMaster from './AdminMaster';
import AdminHome from './AdminHome';
import AddBus from './AddBus';
import ViewFeedback from './ViewFeedback'
import ViewLeaveRequest from './ViewLeaveRequest'

export default class AdminMain extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <AdminMaster/>
                    <Route path="/adminHome" component={AdminHome}/>
                    <Route path="/addDriver" exact component={AddDriver}/>
                    <Route path="/addBus" component={AddBus}/>
                    <Route path="/viewb" component={ViewFeedback}/>
                    <Route path="/viewleave" component={ViewLeaveRequest}/>
                </BrowserRouter>
                
            </div>
        )
    }
}
