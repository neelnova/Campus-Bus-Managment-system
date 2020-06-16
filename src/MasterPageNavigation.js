import React, { Component } from 'react';


const MasterPageNavigation = (props) => {
 
  
  return (

   
    <div class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#"> <img src="/Images/logoUTU.png" alt="Logo" className="logoSize"></img></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
 <li class="nav-item active">
   <a class="nav-link links" to={"/Login"}>Home <span class="sr-only">(current)</span></a>
 </li>
 <li class="nav-item">
   <a class="nav-link links" href="#">Gallery</a>
 </li>
 <li class="nav-item">
   <a class="nav-link links" href="#">About Us</a>
 </li>
 <li class="nav-item">
   <a class="nav-link links" href="#">Contact Us</a>
 </li>
 {/* <li class="nav-item dropdown">
   <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   <a class="nav-link" href="#">About Us</a>
   </a>
   <div class="dropdown-menu" aria-labelledby="navbarDropdown">
     <a class="dropdown-item" href="#">Action</a>
     <a class="dropdown-item" href="#">Another action</a>
     <div class="dropdown-divider"></div>
     <a class="dropdown-item" href="#">Something else here</a>
   </div>
 </li> */}

</ul>
<form class="form-inline my-2 my-lg-0">
<button type="button" class="btn btn-primary btnColor" data-toggle="button" aria-pressed="false" autocomplete="off">
 SIGN IN
</button>
<button type="button" class="btn btn-primary btnColor" data-toggle="button" aria-pressed="false" autocomplete="off">
 SIGN UP
</button>
</form>
</div>
</nav>


    </div>
   
  
  )

  };

  
  export default MasterPageNavigation;
  