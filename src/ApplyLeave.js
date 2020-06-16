import React, { Component } from 'react'
import DriverMaster from './DriverMaster'
import axios from 'axios';
export default class ApplyLeave extends Component {
   
    constructor(props){
        super(props)
        //const id =localStorage.getItem("id");
            this.state = {
                id: localStorage.getItem("id"),
                fdate:'',
                tdate:'',
                ftime:'',
                ttime:'',
                reason:'',
                did :''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
   

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.id);

        axios.post(`http://localhost/CampusBusManagementSystem/leave.php?did=${this.state.id}&fdate=${this.state.fdate}&tdate=${this.state.ftime}&ftime=${this.state.ftime}&ttime=${this.state.ttime}&reason=${this.state.reason}`,this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    render() {
        const {fdate,tdate,ftime,ttime,reason,did} = this.state;
        return (
            <div>
               
                 <center>
                    <div className="container">
                        <div className="container-fluid">
                            <div className="container bgimg">
                                <div className="jumbotron justify-content-center text-center clcss col-md-6">
                                    <center>
                                        <img src="./Images/log4.jpg" alt="login" height="70px" width="70px"></img>
                                    </center>


                                    <form className="mar" onSubmit={(this.handleSubmit)}>


                                        <div className="row">
                                            <div className="col">
                                                From Date:
                                                <input type="date" name="fdate" value={fdate}  className="form-control"  onChange={this.handleChange}  />
                                            </div>
                                            <div className="col">
                                                To Date:
                                                <input type="date" name="tdate" value={tdate} className="form-control"  onChange={this.handleChange}   />
                                            </div>

                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                From Time
                                                <input type="time"  name="ftime" value={ftime}  className="form-control"  onChange={this.handleChange} />
                                            </div>
                                            <div className="col">
                                                To Time
                                                <input type="time" name="ttime" value={ttime}   className="form-control"   onChange={this.handleChange} />
                                            </div>


                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                            <textarea class="form-control" rows="3" id="comment" name="reason" value={reason}  onChange={this.handleChange}  placeholder="Enter Reason"></textarea>
                                            </div>
                                          


                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                <button type="submit" className="buttonn">Apply Leave</button>
                                            </div>

                                        </div>
                                        
                                      


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>






                </center>
            </div>
        )
    }
}
