
import React,{useEffect,useState} from 'react'
import {useParams,useNavigate} from "react-router-dom"
import axios from 'axios'

import '../Provider/provider.css'
 

import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from "react-bootstrap"

function AllProvider() {

const {_id}=useParams();
const[service,setService]=useState([])
const[newService,setNewService]=useState({})
const [loading,setLoading]=useState(true)
const[UserName,setUserName]=useState()
const[Phone,setPhone]=useState()
const[Price,setPrice]=useState()


useEffect(()=>{

axios.get(`http://localhost:3030/services/${_id}`)

.then((res)=>{
    console.log(res.data)
    setService(res.data.service)
    setLoading(false)
})

},[])

if(loading){
    return(<p>Loading</p>)
}
    return ( <>

    <br></br>
    <br></br>
    <h1 lassName='lineTitle'>All Provider</h1>


<Card border ='light' className='BigCard'>

{service.providers.map((item)=>{

return<Card border='danger' style={{width:'20rem'}} className='smallCard'>

<Card.Header className='Header'>Name Of Provider: {item.userName}</Card.Header>
<Card.Text className='text'>Phone Number: {item.phone}</Card.Text>
<Card.Text className='text'>Price: {item.price}</Card.Text>


</Card>



})}

</Card>


    </> );
}

export default AllProvider;