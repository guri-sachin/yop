
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';


import './App.css';
import {Form,Button,Navbar,Nav,Container,Carousel,Table,prompt} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';

function Requests()
{
  const [product,setProducts] =useState([]);
  var [name,setName] =useState('');
  const navigate = useNavigate();
 
   useEffect(()=>{
      axios.get("http://54.150.175.15:3306/hotti").then(res=>setProducts(res.data));
  },[]);

  function Sh(e){
    const id = e.target.id;
    axios.get(`http://54.150.175.15:3306/rila/${id}`).then(
      res => setProducts(res.data));
    
    axios.get(`http://54.150.175.15:3306/tila/${id}`).then(
        res => setProducts(res.data));

  }
  function Show(e){
    const id = e.target.id;
    axios.get(`http://54.150.175.15:3306/merry/${id}`).then(
      res => setProducts(res.data));
    
    axios.get(`http://54.150.175.15:3306/sharry/${id}`).then(
        res => setProducts(res.data));
        navigate("/Allhotspots");

  }







function Stop(e){

  if (window.confirm("Do you really want to leave?")) {
    var setName = window.prompt ('reason to reject the user' )
      
       var data ={"setName":setName};
    
       axios.post("http://54.150.175.15:3306/yio",data).then(
        res=> console.log(res))
      
        console.log(data);
        const id = e.target.id;
        axios.get(`http://54.150.175.15:3306/rila/${id}`).then(
          res => setProducts(res.data));
          
        axios.get(`http://54.150.175.15:3306/tila/${id}`).then(
            res => setProducts(res.data));
            navigate("/Rejected");

         
           
    }
  
}


return(
    <div>
         {/* <!-- Page Wrapper --> */}
<div id="wrapper" >





      

{/* <!-- Sidebar --> */}
<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
{/* 
  <!-- Sidebar - Brand --> */}
  <a class="sidebar-brand d-flex align-items-center justify-content-center" href={"Admin"}>
    
    <div class="sidebar-brand-icon ">
     LOGO
    </div>
  </a>
  <hr class="sidebar-divider my-0"/>
  <hr class="sidebar-divider"/>

{/* 
  
  <!-- Nav Item - Pages Collapse Menu --> */}
  <li class="nav-item">
    <a class="nav-link" href={"Dashboard"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Dashboard </span></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
      <i class="fas fa-fw fa-cog"></i>
      <span>Users</span>
    </a>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Subscribed"}>Subscribed Users</a>
        <a class="collapse-item" href={"Blocked"}>Blocked Users</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link collapsed" href="users.html" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
      <i class="fas fa-fw fa-cog"></i>
      <span>Hotspot</span>
    </a>
    <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
      <div class="bg-white py-2 collapse-inner rounded">
        
        <a class="collapse-item" href={"Hotspot"}>Add Hotspot</a>
        <a class="collapse-item" href={"Allhotspots"}>All Hotspots</a>
        <a class="collapse-item" href={"Requests"}>Hotspot Requests</a>
        <a class="collapse-item" href={"Rejected"}>Rejected Hotspots</a>
       
        
        
        
      </div>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"SubscriptionPlans"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Subscription Plans</span></a>
  </li>
 
   <li class="nav-item" >
    <a class="nav-link" href={"Transactions"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Transactions History</span></a>
  </li>
  
  
  
  <li class="nav-item" >
    <a class="nav-link" href={"Enquiry"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Enquiry</span></a>
  </li>
  <li class="nav-item" >
    <a class="nav-link" href={"Opop"}>
     <i class="fas fa-fw fa-cog"></i>
      <span >Location</span></a>
  </li>
{/* 
  <!-- Nav Item - Utilities Collapse Menu --> */}
  

  {/* <!-- Divider --> */}
  

  
 

 {/*  <!-- Sidebar Toggler (Sidebar) --> */}
  <div class="text-center d-none d-md-inline">
    <button class="rounded-circle border-0" id="sidebarToggle"></button>
  </div>
</ul>

{/* 
<!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

     {/*  <!-- Main Content --> */}
      <div id="content">

        {/* <!-- Topbar --> */}
        <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">

         {/*  <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
            <i class="fa fa-bars"></i>
          </button>

         {/*  <!-- Topbar Search --> */}
          <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
              <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div class="input-group-append">
                <button class="btn btn-primary an" type="button">
                  <i class="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

       {/*    <!-- Topbar Navbar --> */}
          <ul class="navbar-nav ml-auto">

         {/*    <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
            <li class="nav-item dropdown no-arrow d-sm-none">
              <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-search fa-fw"></i>
              </a>
             {/*  <!-- Dropdown - Messages --> */}
              <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                <form class="form-inline mr-auto w-100 navbar-search">
                  <div class="input-group">
                    <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                      <button class="btn btn-primary an" type="button">
                        <i class="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

         {/*    <!-- Nav Item - Alerts -->
            

            <!-- Nav Item - Messages -->
            

            

            <!-- Nav Item - User Information --> */}
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small am">Anil Singh</span>
                <img class="img-profile rounded-circle" src={"ser8.jpg"}/>
                &nbsp; &nbsp;
                <button type="button" class="btn btn-primary an1">Logout</button>
              </a>
            {/*   <!-- Dropdown - User Information --> */}
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                
                
                
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                  <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Logout
                </a>
              </div>
            </li>
            

          </ul>

        </nav>
        </header>
       
        <div class="container-fluid">

{/* <!-- Page Heading --> */}
<div class="d-sm-flex align-items-center justify-content-between mb-4">
  <h1 class="h3 mb-0 text-gray-800">Hotspot Requests</h1>
  
</div>
<table id="example" class="table table-striped table-bordered" >
<thead>

<th class="bl5">Id</th> <th class="bl5">User Email</th> <th class="bl5">Title</th><th class="bl5">Description</th><th class="bl5">Published By</th><th class="bl5">Lat:,Long</th> <th class="bl5">Approve/Reject</th>
      
</thead>
<tbody>
             {product.map((item,index)=>{
                 return(
                     <tr key={index}>
                         <td>{item.id}</td>
                         <td>{item.user_email}</td>
                         <td>{item.title}</td>
                         <td>{item.description}</td>
                         <td>{item.published}</td>
                         <td>{item.location}</td>
                         <td data-label="Edit">
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a onClick= {Show} id={item.id} class="dropdown-item">Accept</a>
    <a onClick= {Stop} id={item.id} class="dropdown-item" >Reject</a>
    
    
  </div>
</div>
                
                </td>

                        
                     </tr>
                 );
             })}
         </tbody>
    </table>
    </div>






</div> 
        

      

<footer class="sticky-footer bg-dark">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>&copy; Mobile App @ All right reserved</span>
          </div>
        </div>
      </footer>

</div>

<a class="scroll-to-top rounded" href="">
    <i class="fas fa-angle-up"></i>
  </a>
</div>










    
    
   








     

   </div>    


 

  
       
   );

}
export default Requests;