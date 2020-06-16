import React, { Component } from 'react'
//import Visitor from './Visitor'
import './Home.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import Visitor from './Visitor';
  

export default class Home extends Component {
    render() {
        return (
        
            <div>
              <div>
                <Visitor/>
              </div>
               
                <div className="container-fluid">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div class="carousel-item active">
                        <img src="./Images/bus3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./Images/bus8.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="./Images/bus11.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                    </div>
                   
                </div>

                    <div className="container-fluid">
                      
                    </div>
              
                <footer class="container-fluid footercont">
                            <div class="row" >
                              
                              <div class="col-6 col-md">
                                <h5>FOLLOW US:</h5>
                                <ul class="list-unstyled text-small">
                                  <li><a class="text-muted" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                  <li><a class="text-muted" href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                  <li><a class="text-muted" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                  
                                
                                </ul>
                              </div>
                              <div class="col-6 col-md">
                                <h5>TRANSPORTATION:</h5>
                               <p>The Maliba Campus is on state highway No 6, six kms. away from Bardoli on Mahuva road, Tarsadi.</p>
                              </div>
                             
                              <div class="col-6 col-md">
                                <h5>ABOUT:</h5>
                                <ul class="list-unstyled text-small">
                                  <li><a class="text-muted" href="https://getbootstrap.com/docs/4.3/examples/product/#">Team</a></li>
                                  <li><a class="text-muted" href="https://getbootstrap.com/docs/4.3/examples/product/#">Locations</a></li>
                                  <li><a class="text-muted" href="https://getbootstrap.com/docs/4.3/examples/product/#">Privacy</a></li>
                                  <li><a class="text-muted" href="https://getbootstrap.com/docs/4.3/examples/product/#">Terms</a></li>
                                </ul>
                              </div>
                            
                            </div>
                            
                          </footer>
                </div>

            
             
            
        )
    }
}
