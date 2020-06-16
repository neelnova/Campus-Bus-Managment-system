import React, { Component } from 'react'
import './Login.css';
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Visitor from './Visitor';
import swal from 'sweetalert'
export default class Login extends Component {
    constructor(props)
    {
        super(props)
        let loggedIn=false
        this.state={
            email:'',
            password:'',
            loggedIn:'false',
            conList:[],
            stud:'',
            driver:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.submit=this.submit.bind(this);
        this.SweetAlertcall=this.SweetAlertcall.bind(this);
        this.Sweetfail = this.Sweetfail.bind(this);
    }
    componentDidMount()
    {
        if(window.token){
            this.setState({loggedIn:true});
        }
    }
    SweetAlertcall()
    {
        swal({
            title: "Welcome !" + this.state.conList.name,
            text: "Logged In!",
            icon: "success",
          });
    }

    Sweetfail(){
        swal({
            title: "Fail",
            text: "Invalid username and password",
            icon: "warning",
            dangerMode:true,
          });
    }
    handleChange(event)
    {
        let name=event.target.name;
        let value=event.target.value;
        let data={};
        data[name]=value;
        this.setState(data);
    }
    submit(e)
    {
        this.setState({loggedIn:true})
        e.preventDefault();
        axios.post(`http://localhost/CampusBusManagementSystem/login.php?uname="${this.state.email}"&pwd="${this.state.password}"`)
        .then(response=>{
            const cont=response.data;
            console.log(response.data);
            this.setState({conList:cont});
            this.setState({loggedIn:true});


            if(this.state.conList.usertype == "student")
            {
                console.log(this.state.conList.id);
                console.log(this.state.conList.emailid);
                localStorage.setItem("id",this.state.conList.id)
                localStorage.setItem("username",this.state.conList.emailid)
                localStorage.setItem("name",this.state.conList.name)
                this.setState({
                    stud:true
                })
                this.SweetAlertcall();

            }
            else if(this.state.conList.usertype == "Driver")
            {
                console.log(this.state.conList.id);
                console.log(this.state.conList.emailid);
                localStorage.setItem("id",this.state.conList.id)
                localStorage.setItem("username",this.state.conList.emailid)
                localStorage.setItem("name",this.state.conList.name)
                this.setState({
                    driver:true
                })
                this.SweetAlertcall();

            }
            else{
                this.Sweetfail();
            }
        });
    }

    render() {



        if(this.state.stud)
        {
            return <Redirect to="studentt"/>
        }
        else if(this.state.driver)
        {
            return <Redirect to="drivermain"/>
        }
        else if(this.state.email==="Admin" &&  this.state.password==="admin")
        {
            return <Redirect to="adminmain"/>
        }
       
        return (
            <div>
              <div>
               <Visitor/>
              </div>
              <center>
                  <div class="container">
                      <div class="container-fluid">
                          <div class="container bgimg">
                        <div className="jumbotron justify-content-center text-center clcss col-md-6">
                        <center>
                            <img src="./Images/log4.jpg" alt="login" height="70px" width="70px"></img>
                        </center>
                        <form className="mar" onSubmit={this.submit}>
                        <div className="form-group">
                            <label for="formGroupExampleInput">Username</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Username" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Password</label>
                            <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="Enter Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <button type="submit" className="buttonn">Sign in</button>
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
