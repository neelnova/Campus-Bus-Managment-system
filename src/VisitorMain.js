import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';

import ApplyLeave from './ApplyLeave';
import VisitorMaster from './VisitorMaster';

export default class AdminMain extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <VisitorMaster/>
                    <Route path="/" component={ApplyLeave}/>
                   
                </BrowserRouter>
                
            </div>
        )
    }
}