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
import 'bootstrap/dist/css/bootstrap.min.css';
 
 import { Container ,Navbar,Nav,Button,Col} from 'react-bootstrap';
 

  
 export default function Navi  () {

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
    
          
     {/* <nav>  */}
 
{/* <ul > */}
<Navbar bg="light" variant="light">
 
<Container>
<Navbar.Brand href="#home"><Logo/></Navbar.Brand> 
 
<Nav className="me-auto"> 
<Nav.Link href="#home"><Link exact to='/'>Home</Link></Nav.Link>

<Nav.Link href="#home">  <Link to='/About'>About</Link></Nav.Link>
<Nav.Link href="#home">  <Link  to='/Contact'>Contact</Link></Nav.Link>
<Nav.Link href="#home">  <Link to='/Service'>Service</Link></Nav.Link>

    {token ? (
        <>
   <Nav.Link href="#home">  <Link to='/'onClick={(e)=>logOut(e)}>
            LogOut</Link></Nav.Link>
        </>
    ) : null }
     
     {!token ? (
         <>
         <Nav.Link href="#home"><Link to='/ProviderSignUp'>SignUp</Link></Nav.Link>
         <Nav.Link href="#home"> <Link to='/ProviderLogin'>Login</Link></Nav.Link>
         </>
     ) : null}
   

    
   </Nav>
{/* </ul> */}
</Container>
</Navbar>
  
    
       {/* <div className="header"> <Logo/>  </div>   */}

       {/* </nav> */}
     
 


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

