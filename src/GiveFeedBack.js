import React, { Component } from 'react'
import axios from 'axios';
import swal from 'sweetalert';
export default class GiveFeedBack extends Component {
    constructor(props) {
        super(props);
        // const sid = localStorage.getItem("id");
        this.state = {
            sid: localStorage.getItem("id"),
            feedback: '',
            city:'',
            city1:[],
            bus:'',
            busnum:[],
            conlist:[]
        }
      
        this.handleChange = this.handleChange.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
    }
    handleChange(event) {
      
        event.preventDefault();
        this.setState({[event.target.name]:event.target.value})
        // const name = event.target.name;
        // const value = event.target.value;
        // this.setState({
        //     [name]: value
        // })

    }
    componentDidMount()
    {
        const apiUrl='http://localhost/CampusBusManagementSystem/displaibus.php';

        fetch(apiUrl)
        .then(res=>res.json())
        .then(
            (result)=>{
                this.setState({
                    busnum: result
                    
                })
            },
            (error)=>{
                this.setState({error})
                console.log(this.state.sid);
            }
        )
        
    }
    handlesubmit(event){
        event.preventDefault();
        // this.props.onStudentFormSubmit(this.state);
        // this.setState(this.initialState);
        console.log(this.state);

        axios                    
        .post(`http://localhost/CampusBusManagementSystem/insertfeedback.php?id=${this.state.sid}&busnumber=${this.state.bus}&feedback="${this.state.feedback}"`,this.state)
        .then(response =>{
            console.log(response)
            const con=response.data
            this.setState({conlist:con})
            if(this.state.conlist.status==="success")
            {
                swal("Feedback given", "success");
            }
            else
            {
                swal("Error", "error");
            }
        })
        .catch(error =>{
            console.log(error)
        })
    }


    render() {
        const {feedback,city}=this.state;
        const {bus}= this.state;
        return (
            <div>


            <center>
                  <div class="container">
                      <div class="container-fluid">
                          <div class="container bgimg">
                        <div className="jumbotron justify-content-center text-center clcss col-md-6">
                        <center>
                           <h3 className="inqcolor">F E E D B A C K</h3>
                        </center>
                        <form className="mar" onSubmit={this.handlesubmit} >
                        <div className="form-group">
           
                        
                         <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" name="bus" value={bus} onChange={this.handleChange} >
                                    {this.state.busnum.map((c1) =>
                                    <option key={c1.id} value={c1.busNumber}>{c1.busNumber}</option>)} 
                                                  
                         </select>

                        </div>
                        <div className="form-group" >
                           
                        <textarea class="form-control"  name="feedback" value={feedback} onChange={this.handleChange}  rows="3" placeholder="Your Feedback"></textarea>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-10">
                            <button type="submit" className="buttonn">Go</button>
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
