  
  import {useState,useEffect} from 'react'
  import axios from 'axios'
  import '../components/admin/service.css'
  export default  function Service () {

    const [service,setService]=useState();
    const [newService,setNewService]=useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{ 
console.log('hgghjjj')
        axios.get('http://localhost:3030/services')
        .then((res)=>{
            console.log(res.data)
            setService(res.data)
            setLoading(false)
        })
         },[newService])

         if(loading){
            return(<p>Loading</p>)
        }

    return ( <>
    <h1>All services</h1>
    <div className="bigBox"> 
    {service.map((item ,index)=>{
        return <div key={index} className="box">
       
       <img src={item.image} alt='' width={200}/>
       <div className="title">{item.nameOfService}</div>
       
        </div>
    })}
    </div>
    </> );
}

 