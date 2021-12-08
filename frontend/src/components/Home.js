
 import '../CSS/Home.css'
 import { useNavigate } from "react-router-dom"; 
 export default function Home() {
     

    const navigate=useNavigate()


const handelAdmin=()=>{

    navigate('/LoginAdmin')

}
    return (  <>
    <h1>HopmePage</h1>
    
        <div className="homebtn">
            <button onClick={handelAdmin}>Admin</button>
            <button >Employee</button>
            <button >User</button>
        </div>
    </>);
}

 