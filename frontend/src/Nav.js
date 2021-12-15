import React from 'react'
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/admin/Login'
import AdminHome from './components/admin/AdminHome'
import AddNewAdmin from './components/admin/AddNewAdmin'
import AddNewService from './components/admin/AddNewService'
import Service from './components/User/Service'
import ProviderSignUp  from './components/Provider/SignupProvider'
import ProviderLogin from './components/Provider/LoginProvider'
import ServiceHome from './components/Provider/ServiceHome'
import AddProviderService from './components/Provider/AddproviderService';
 import Logo from './logo'
import './CSS/Home.css'
import axios from "axios"
import { useEffect, useState } from "react";
import {BrowserRouter as Router ,Routes,Route,Link,useNavigate} from 'react-router-dom'

  
 export default function Nav  () {

    const [service,setService]=useState([]);
    const [newService,setNewService]=useState({});
    const navigate=useNavigate()
let token = localStorage.getItem("token");

    useEffect(()=>{

        axios.get('http://localhost:3030/services')
        .then((res)=>{
            // console.log(res.data)
            setService(res.data)
        })
  
    },[newService])
    // 
    const logOut=(e)=>{
        e.preventDefault()
        localStorage.removeItem("token")
        navigate('/')
    }

    return (
        <>
    
          
     <nav> 
 
<ul >

    <li><Link exact to='/'>Home</Link></li>
    <li><Link to='/About'>About</Link></li>
    <li><Link  to='/Contact'>Contact</Link></li>
    <li><Link to='/Service'>Service</Link></li>

    {token ? (
        <>
        <li><Link to='/'onClick={(e)=>logOut(e)}>
            LogOut</Link></li>
        </>
    ) : null }
     
     {!token ? (
         <>
         <li><Link to='/ProviderSignUp'>SignUp</Link></li>
         <li><Link to='/ProviderLogin'>Login</Link></li>
         </>
     ) : null}
   
    
</ul>
 
  
    
       <div className="header">
           <Logo/> 
       </div>  

       </nav>
     
 


<Routes>

    <Route exact path ='/' element={<Home/>}/>
    <Route  path ='/About' element={<About/>}/>
    <Route  path ='/Contact' element={<Contact/>}/>
    <Route  path ='/Service' element={<Service/>}/>
    <Route path ='/LoginAdmin' element={<Login/>}/>
    <Route path ='/AdminHome' element={<AdminHome/>}/>
    <Route path ='/AddNewAdmin' element={<AddNewAdmin />}/>
    <Route path ='/AddNewService' element={<AddNewService />}/>
    <Route path ='/ProviderSignUp' element={<ProviderSignUp />}/>
    <Route path ='/ProviderLogin' element={<ProviderLogin />}/>
    <Route path ='/ServiceHome' element={<ServiceHome  />}/>
    <Route path ='/AddProviderService/:_id' element={<AddProviderService data={service}/>}/>


</Routes>

         
        
        </>
      );
}

