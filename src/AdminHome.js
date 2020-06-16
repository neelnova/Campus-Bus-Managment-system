import React, { Component } from 'react'
import { Row, Form, Col, Button, Table } from 'react-bootstrap';
import AdminMaster from './AdminMaster';
import './AdminHome.css';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';

export default class AdminHome extends Component {
    constructor(props) {
        super(props)
        // const token=localStorage.getItem("token")
        // let loggedIn=true
        // if(token==null)
        // {
        //     loggedIn=false
        // }
        this.state = {
            //loggedIn,
            error: null,
            students: [],
            drivers: [],
            bus: [],
            id: '',
            did: ''
        };
        // this.deleteStudent=this.deleteStudent.bind(this);
        //  this.deletedriver=this.deletedriver.bind(this);

    }

    componentDidMount() {
        const apiUrl = 'http://localhost/CampusBusManagementSystem/studentDisplay1.php';
        const apiUrlDriver = 'http://localhost/CampusBusManagementSystem/driverDisplay.php';
        const apiUrlBus = 'http://localhost/CampusBusManagementSystem/viewBus.php';
        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        students: result
                    })
                },
                (error) => {
                    this.setState({ error })
                }
            )

        fetch(apiUrlDriver)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        drivers: result
                    })
                },
                (error) => {
                    this.setState({ error })
                }
            )


        fetch(apiUrlBus)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        bus: result
                    })
                },
                (error) => {
                    this.setState({ error })
                }
            )

    }

    deleteStudentData(studentid) {
        //console.log(studentid);

        swal({
            title: "Are you sure?",
           
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Successfully Deleted", {
                        icon: "success",
                    });


                    const { students } = this.state;
                    const apiUrl = 'http://localhost/CampusBusManagementSystem/deleteStudent.php';
                    const formData = new FormData();
                    // formData.append('productId', productId);
                    formData.append('Content-Type', 'application/json');
                    const options = {
                        method: 'POST',
                        // body: formData
                        body: JSON.stringify(studentid),
                        // myHeaders
                        formData
                    }

                    fetch(apiUrl, options)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                this.setState({
                                    response: result,
                                    students: students.filter(student => student.id !== studentid)
                                });
                            },
                            (error) => {
                                this.setState({ error });
                            }
                        )



                }
            });
        /* const {students}= this.state;
         const apiUrl = 'http://localhost/CampusBusManagementSystem/deleteStudent.php';
         const formData = new FormData();
        // formData.append('productId', productId);
        formData.append('Content-Type', 'application/json');
         const options = {
           method: 'POST',
          // body: formData
           body: JSON.stringify(studentid),
          // myHeaders
          formData
         }
     
         fetch(apiUrl, options)
           .then(res => res.json())
           .then(
             (result) => {
               this.setState({
                 response: result,
                 students: students.filter(student => student.id !== studentid)
               });
             },
             (error) => {
               this.setState({ error });
             }
           )*/


    }
    deleteDriverData(driverid) {
        //console.log(studentid);


        const { drivers } = this.state;
        const apiUrl = 'http://localhost/CampusBusManagementSystem/deleteDriver.php';
        const formData = new FormData();
        // formData.append('productId', productId);
        formData.append('Content-Type', 'application/json');
        const options = {
            method: 'POST',
            // body: formData
            body: JSON.stringify(driverid),
            // myHeaders
            formData
        }

        fetch(apiUrl, options)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        response: result,
                        drivers: drivers.filter(driver => driver.id !== driverid)
                    });
                },
                (error) => {
                    this.setState({ error });
                }
            )


    }
    // deleteDriver(driverId)
    // {
    //     console.log(driverId);



    //     const {drivers}= this.state;
    //     const apiUrl = 'http://localhost/CampusBusManagementSystem/deleteDriver.php';
    //     const formData = new FormData();
    //    // formData.append('productId', productId);
    //    formData.append('Content-Type', 'application/json');
    //     const options = {
    //       method: 'POST',
    //      // body: formData
    //       body: JSON.stringify(driverId),
    //      // myHeaders
    //      formData
    //     }

    //     fetch(apiUrl, options)
    //       .then(res => res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             response: result,
    //             drivers: drivers.filter(driver => driver.id !== driverId)
    //           });
    //         },
    //         (error) => {
    //           this.setState({ error });
    //         }
    //       )

    // }




    render() {
        // if(this.state.loggedIn===false)
        // {
        //     return <Redirect to="/"/>
        // }
        const { error, students } = this.state;
        if (error) {
            return (
                <div>Error:{error.message}</div>
            )
        }
        const { error1, drivers } = this.state;
        if (error1) {
            return (
                <div>Error:{error1.message}</div>
            )
        }
        const { error2, bus } = this.state;
        if (error2) {
            return (
                <div>Error:{error2.message}</div>
            )
        }
        return (
            <div>
                <div className="container-fluid">

                </div>

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-3 setTab">
                            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">View Students</a>
                                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">View Drivers</a>
                                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">View Bus details</a>
                                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Report</a>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active centercont" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <center><h4><u>Student List</u></h4></center>
                                    <Table>
                                        <thead>
                                            <tr>

                                                <th>StudentName</th>
                                                <th>Email</th>
                                                <th>Department</th>
                                                <th>City</th>
                                                <th>Area</th>
                                                <th>Contact Number</th>
                                                <th>Registered Date</th>
                                                <th>Operations</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students.map(student => (
                                                <tr key={student.id}>


                                                    <td>{student.StudentName}</td>
                                                    <td>{student.emailId}</td>
                                                    <td>{student.department}</td>
                                                    <td>{student.cityId}</td>
                                                    <td>{student.area}</td>
                                                    <td>{student.contactNum}</td>
                                                    <td>{student.createdAt}</td>
                                                    <td><button onClick={() => this.deleteStudentData(student.id)}>DELETE</button></td>
                                                </tr>

                                            ))}
                                        </tbody>
                                    </Table>



                                </div>
                                <div className="tab-pane fade centercont" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">

                                    <center><h4><u>Driver List</u></h4></center>
                                    <Table>
                                        <thead>
                                            <tr>

                                                <th>DriverName</th>
                                                <th>Email</th>
                                                <th>City</th>
                                                <th>Contact Number</th>
                                                <th>Address</th>
                                                <th>Registered Date</th>
                                                <td>Operations</td>
                                            </tr>
                                        </thead>
                                        {drivers.map(driver => (
                                            <tr key={driver.id}>

                                                <td>{driver.driverName}</td>
                                                <td>{driver.emailId}</td>
                                                <td>{driver.cityId}</td>
                                                <td>{driver.contactNum}</td>
                                                <td>{driver.Address}</td>
                                                <td>{driver.createdAt}</td>
                                                <td><button onClick={() => this.deleteDriverData(driver.id)}>DELETE</button></td>

                                            </tr>

                                        ))}
                                    </Table>






                                </div>
                                <div className="tab-pane fade  centercont" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">

                                    <center><h4><u>Bus Details</u></h4></center>
                                    <Table>
                                        <thead>
                                            <tr>

                                                <th>Bus Number</th>
                                                <th>DriverName</th>
                                                <th>Registered Date</th>

                                            </tr>
                                        </thead>
                                        {bus.map(bus => (
                                            <tr key={bus.id}>

                                                <td>{bus.busNumber}</td>
                                                <td>{bus.driverId}</td>
                                                <td>{bus.createdAt}</td>



                                            </tr>

                                        ))}
                                    </Table>




                                </div>
                                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <h2>Hey3</h2>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}
