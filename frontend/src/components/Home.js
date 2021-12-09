
 import '../CSS/Home.css'
 import { useNavigate } from "react-router-dom"; 
 export default function Home() {
     

    const navigate=useNavigate()


const handelAdmin=()=>{

    navigate('/LoginAdmin')

}
    return (  <>
    <div className="subject">
        <h1>My Car</h1></div>
     
    
        <div className="homebtn">
            <button onClick={handelAdmin}>Admin</button><br></br>
            <button >Employee</button><br></br>
            <button >User</button><br></br>
        </div>
    </>);
}

 