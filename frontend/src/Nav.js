import React from 'react'
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/admin/Login'
import './CSS/Home.css'
 
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom'

 export default function Nav  () {
    return (
        <>
    
         <Router>

<ul>

    <li><Link exact to='/'>Home</Link></li>
    <li><Link to='/About'>About</Link></li>
    <li><Link  to='/Contact'>Contact</Link></li>
</ul>



<Routes>

    <Route exact path ='/' element={<Home/>}/>
    <Route  path ='/About' element={<About/>}/>
    <Route  path ='/Contact' element={<Contact/>}/>
    <Route path ='/LoginAdmin' element={<Login/>}/>
</Routes>

         </Router>
        
        </>
      );
}

