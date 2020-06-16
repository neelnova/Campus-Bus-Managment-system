import React, { Component } from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'
import axios from 'axios';
export default class DeleteDemo extends Component {
    constructor(props)
    {
        super(props);

        this.state ={
            error:null,
            students:[],
            user:null,
            id:''
        }
        this.deleteproduct=this.deleteproduct.bind(this);
    }

    deleteproduct(e){
      e.preventDefault();
      console.log(e.target.value)
      this.state={
        id : e.target.value
      };


      axios.delete(`http://localhost/CampusBusManagementSystem/deleteStudent.php?id=${this.state.id}`)
      // delete(`http://localhost:8084/CBM/delete.php/${this.state.id}`)
      .then(res =>{
        console.log(res);
        console.log(res.data);
      })
      
      console.log(this.state.id);
       
        this.componentDidMount();
      // const {stude} = this.state;
      // const apiurl = 'http://localhost:8084/CBM/delete.php';
      // cosnt formdata = new FormData();
      // formdata.append();
    }


    componentDidMount(){
        const apiurl="http://localhost/CampusBusManagementSystem/studentDisplay.php";
    

        //in fetch() ,it return two things result and error .so we store result in stud array and error 
        //in error varibles using this.setState
        fetch(apiurl)
        .then(res => res.json())
        .then(
            (result)=>{
               this.setState({          
                   students:result
               }); 
            },
            (error) =>{
                this.setState({error});
            }
        )
    }
    render() {

        const {error,students} = this.state;

        if(error){
            return(
                <div>Errorr : {}</div>
            )
        }
        return (
            <div>   
                <div>
          <h2>Product List</h2>
          <table>
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
                        {students.map(student=>(
                            <tr key={student.id}>
                               
                                <td>{student.StudentName}</td>
                                <td>{student.emailId}</td>
                                <td>{student.department}</td>
                                <td>{student.city}</td>
                                <td>{student.area}</td>
                                <td>{student.contactNum}</td>
                                <td>{student.createdAt}</td>
                               <td><Button type="submit" name="id" value={student.id} onClick={this.deleteproduct}>Delete</Button></td>  
                            </tr>
                       
                        ))}
                         </tbody>
    </table>
        </div>
            </div>
        )
    }
}


