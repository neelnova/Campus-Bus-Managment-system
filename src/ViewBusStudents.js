import React, { Component } from 'react'
import { Row, Form, Col, Button,Table } from 'react-bootstrap';
import './ViewBusStudents.css'

export default class ViewBusStudents extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            //loggedIn,
            error:null,
            bus:[]
           
        };
       
        
    }
    componentDidMount()
    {
       
       const apiUrlBus='http://localhost/CampusBusManagementSystem/viewBus.php';
        

      

        fetch(apiUrlBus)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    bus: result
                })
            },
            (error)=>{
                this.setState({error})
            }
        )
        
    }

    render() {
        const {error2,bus}=this.state;
        if(error2){
            return(
                <div>Error:{error2.message}</div>
            )
        }
        return (
            <div>

                <div className="container-fluid marr">
                   
                    <center><h4><u>Bus Details</u></h4></center>
      <Table>
                        <thead>
                            <tr>
                                
                                <th>Bus Number</th>
                                <th>DriverName</th>
                                <th>Registered Date</th>
                                <th>Book</th>
                                
                            </tr>
                        </thead>
                        {bus.map(bus=>(
                            <tr key={bus.id}>
                               
                                <td>{bus.busNumber}</td>
                                <td>{bus.driverId}</td>
                                <td>{bus.createdAt}</td>
                                <td><Button>Book Bus</Button></td>
                               
                               
                            </tr>

                        ))}
    </Table>

                    </div>
               
                
            </div>
        )
    }
}
