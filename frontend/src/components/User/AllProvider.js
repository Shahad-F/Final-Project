
import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from 'axios'

import '../Provider/sign.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from "react-bootstrap"

function AllProvider() {

    const {_id}=useParams();
const[service,setService]=useState([])
const[newService,setNewService]=useState({})
const [loading,setLoading]=useState(true)



    return ( <>
    <h1>All Provider</h1>
    </> );
}

export default AllProvider;