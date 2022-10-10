import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Dyv from './Dyv';
import Win from './Win';
import './App.css';




function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="/" element={<Dyv/>}></Route>
            <Route exact path="/Win" element={<Win/>}></Route>
   
      

</Routes>

 </div>

  
       
   );

}
export default Home;