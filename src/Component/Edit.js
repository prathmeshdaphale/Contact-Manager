import React,{useState,useEffect} from 'react'
import {Button} from'react-bootstrap'
import {useHistory,useParams} from 'react-router-dom'
import axios from 'axios'
function Editcontact(props) {
    const{id}=useParams();

 
    const[data,setdata]=useState({
        name1:"",
        email:""

    })
    const{name1,email}=data
    let history= useHistory();
    const Loaduser= async ()=>{
        const result = await axios.get(`http://localhost:3001/contacts/${id}`)
     setdata(result.data)
    }
    useEffect(()=>{
        Loaduser()
    },[])
   
    const handlechange=(e)=>{
   
        setdata({...data,[e.target.name]:e.target.value})
    }
    const Handleclick=async()=>{
    
       
        if(name1===""|| email===""){
            alert ("all feilds are mandotory")
        }
        else
       { 
           history.push("/")
           await axios.put(`http://localhost:3001/contacts/${id}`, data);
    }}
    return (
        <div>
            <center>
            <h3  style={{color:"gold",backgroundColor:"lightgreen"}}> Edit Contact</h3>
            <div  style={{color:"greenyellow",backgroundColor:"lightslategrey"}}><br/>
            <label>Name</label>
            <input type="text" value={name1} name="name1" onChange={(e)=>handlechange(e)} placeholder="Enter Name Here"/><br/><br/>
            <label>Email</label>
            <input type="text" value={email} name="email" onChange={(e)=>handlechange(e)} placeholder="Enter Email Here"/><br/><br/>
            <Button onClick={()=>Handleclick()} >Update</Button>
            </div>
            </center>
        </div>
    )
}

export default Editcontact
