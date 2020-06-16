import React, { Component } from 'react'
import { Row, Form, Col, Button,Table } from 'react-bootstrap';
import AdminMaster from './AdminMaster';
import './AdminHome.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

export default class ViewLeaveRequest extends Component {
    constructor(props)
    {
        super(props)
       
        this.state={
            
            error:null,
            leave:[],
            sta:'',
            id:''
           
        };
       // this.deleteStudent=this.deleteStudent.bind(this);
      //  this.deletedriver=this.deletedriver.bind(this);
        this.changestatud = this.changestatud.bind(this);
    }

        changestatud(e)
        {
            e.preventDefault();
            console.log(e.target.value)
                this.state={
                    id : e.target.value
                };
        }
    componentDidMount()
    {
        const apiUrl='http://localhost/CampusBusManagementSystem/displayleave.php';
        
        fetch(apiUrl)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    leave: result
                })
            },
            (error)=>{
                this.setState({error})
            }
        )

        
        
    }
    render() {
        const {error,leave}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
        return (
            <div>
                 <Table>
                        <thead>
                            <tr>
                                
                                <th>Driver Name</th>
                                <th>FromDate</th>
                                <th>ToDate</th>
                                <th>FromTime</th>
                                <th>ToTime</th>
                                <th>Reason</th>
                                <th>Status</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                        {leave.map(lv=>(
                            <tr key={lv.id}>
                            
                               <td>{lv.did}</td>
                               <td>{lv.Fromdate}</td>
                                <td>{lv.Todate}</td>
                                <td>{lv.Fromtime}</td>
                                <td>{lv.Totime}</td>
                                <td>{lv.Reason}</td>
                                <td><Button type="submit" name="id" value={lv.id} onClick={this.changestatud}>{lv.status}</Button></td>
                            </tr>
                       
                        ))}
                         </tbody>
    </Table>
            </div>
        )
    }
}
