import React from 'react'
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/admin/Login'
import AdminHome from './components/admin/AdminHome'
import AddNewAdmin from './components/admin/AddNewAdmin'
import AddNewService from './components/admin/AddNewService'
import Service from './components/Service'
 import Logo from './logo'
import './CSS/Home.css'
// import axios from "axios"
// import { useEffect, useState } from "react";
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'


 export default function Nav  () {
    // const [admin,setAdmin]=useState([]);
    // const [newAdmin,setNewAdmin]= useState({});


    // useEffect(()=>{

    //     axios.get('http://localhost:3030/authors')
    //     .then((res)=>{
    //         // console.log(res.data)
    //         setAdmin(res.data)
    //     })
  
    // },[newAdmin])

    return (
        <>
    
         <Router>

 
<ul >

    <li><Link exact to='/'>Home</Link></li>
    <li><Link to='/About'>About</Link></li>
    <li><Link  to='/Contact'>Contact</Link></li>
    <li><Link to='/Service'>Service</Link></li>
   
   <li>  <div className="header">
    <Logo/>
    </div></li>
</ul>
 
 


<Routes>

    <Route exact path ='/' element={<Home/>}/>
    <Route  path ='/About' element={<About/>}/>
    <Route  path ='/Contact' element={<Contact/>}/>
    <Route  path ='/Service' element={<Service/>}/>
    <Route path ='/LoginAdmin' element={<Login/>}/>
    <Route path ='/AdminHome' element={<AdminHome/>}/>
    <Route path ='/AddNewAdmin' element={<AddNewAdmin />}/>
    <Route path ='/AddNewService' element={<AddNewService />}/>
    
</Routes>

         </Router>
        
        </>
      );
}

