import React, { Component } from 'react'
import { Row, Form, Col, Button,Table } from 'react-bootstrap';
export default class ViewFeedback extends Component {
    constructor(props)
    {
        super(props)
       
        this.state={
            //loggedIn,
            error:null,
            feedback:[],
           
        };
       // this.deleteStudent=this.deleteStudent.bind(this);
      //  this.deletedriver=this.deletedriver.bind(this);
        
    }
  
    componentDidMount()
    {
        const apiUrl='http://localhost/CampusBusManagementSystem/displayfeedback.php';
        
        fetch(apiUrl)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    feedback: result
                })
            },
            (error)=>{
                this.setState({error})
            }
        )

        
        
    }
    render() {
        const {error,feedback}=this.state;
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
                                
                                <th>Bus</th>
                                <th>Student Name</th>
                                <th>Feedback</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                        {feedback.map(fd=>(
                            <tr key={fd.id}>
                               
                               <td>{fd.busid}</td>
                               <td>{fd.sid}</td>
                                <td>{fd.feedback}</td>
                               
                                
                            </tr>
                       
                        ))}
                         </tbody>
    </Table>
            </div>
        )
    }
}
