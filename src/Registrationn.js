import React, { Component } from 'react'
import './Registrationn.css';
import axios from 'axios';
import Visitor from './Visitor';
import swal from 'sweetalert';

export default class Registrationn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            department: '',
            city: '',
            area: '',
            contactNumber: '',
            city1:[],
            conlist:[]

        }
      
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      
      
        this.setState({[event.target.name]:event.target.value})
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // })
    }

    
    handleSubmit(event) {
        event.preventDefault();
        // this.props.onStudentFormSubmit(this.state);
        // this.setState(this.initialState);
        console.log(this.state);

        axios                    
        .post('http://localhost/CampusBusManagementSystem/register11.php',this.state)
        .then(response =>{
            console.log(response)
            const con=response.data
            this.setState({conlist:con})
            if(this.state.conlist.status==="success")
            {
                swal("Registered", "success");
            }
            else
            {
                swal("Email Id already exists", "error");
            }
        })
        .catch(error =>{
            console.log(error)
        })
        this.setState({
            name: '',
            email: '',
            password: '',
           
            area: '',
            contactNumber: ''

        })
            
    }
    
    componentDidMount()
    {
        const apiUrl='http://localhost/CampusBusManagementSystem/displayCityDropDown.php';

        fetch(apiUrl)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    city1: result
                    
                })
            },
            (error)=>{
                this.setState({error})
            }
        )
        
    }



    render() {

        const {name,email,password,department,city,area,contactNumber}=this.state;
        const {error,city1}=this.state;
        if(error){
            return(
                <div>Error:{error.message}</div>
            )
        }
        return (
            <div>
                <div>
                    <Visitor/>
                </div>

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
                                                <input type="text" className="form-control" placeholder="Student Name" pattern="^[a-zA-Z ]+" name="name" value={name} onChange={this.handleChange} required />
                                            </div>

                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                <input type="email" className="form-control" placeholder="Email Id" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$" value={email} onChange={this.handleChange} required/>
                                            </div>


                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={this.handleChange} required/>
                                            </div>
                                            
                                        </div>
                                        <div className="row marInput">
                                            <div className="col">

                                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="department" value={department} onChange={this.handleChange} required>
                                                    <option>Select Department</option>
                                                    <option value="bmiit">Babu Madhav Institute Of Information Technology</option>
                                                    <option value="cgbib">C.G Bhakta Institute Of Biotechnology</option>
                                                    <option value="cgpit">Chotubhai Gopalbhai Patel Institute Of Technology</option>
                                                    <option value="dp">Diwaliba Polytechnic</option>
                                                    <option value="dbo">Diwaliba College Of Optometry</option>
                                                    <option value="cgpit">Chotubhai Gopalbhai Patel Institute Of Technology</option>
                                                    <option value="dm">Department Of Mathematics</option>
                                                    <option value="dphy">Department Of Physics</option>
                                                    <option value="mpc">Maliba Pharmacy College</option>
                                                </select>

                                            </div>



                                        </div>
                                        <div className="row marInput">
                                            <div className="col">

                                                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="city" value={city} onChange={this.handleChange} required>
                                                <option selected disabled>Select City</option>
                                                         {this.state.city1.map((c1) =>
                                                        <option key={c1.id} value={c1.cityname}>{c1.cityname}</option>)} 
                                                </select>

                                            </div>




                                        </div>
                                        <div className="row marInput">
                                            <div className="col">


                                                <textarea class="form-control" rows="3" id="comment" placeholder="Enter Area" name="area" value={area} onChange={this.handleChange} required></textarea>

                                            </div>
                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                <input type="text" className="form-control" placeholder="Contact Number" name="contactNumber" pattern="^[6-9][0-9]{9}$" value={contactNumber} onChange={this.handleChange} required/>
                                            </div>

                                        </div>
                                        <div className="row marInput">
                                            <div className="col">
                                                <button type="submit" className="buttonn">Sign Up</button>
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
