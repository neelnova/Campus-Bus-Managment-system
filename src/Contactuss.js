import React, { Component } from 'react'

import './Contactuss.css';
import Visitor from './Visitor';

export default class Contactuss extends Component {
    render() {
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
                           <h3 className="inqcolor">I N Q U I R Y</h3>
                        </center>
                        <form className="mar">
                        <div className="form-group">
                            <label for="formGroupExampleInput">Email Id</label>
                            <input type="email" className="form-control" id="formGroupExampleInput" placeholder="Enter Email Address"/>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Query</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Your Query"/>
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
