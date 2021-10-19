import React,{useState} from 'react'
import {Button} from'react-bootstrap'
import {useHistory} from 'react-router-dom'
function Addcontact(props) {
    let history= useHistory();
    
    const[names,setnames]=useState({
        name1:"",
        email:""
    })
    const{name1,email}=names
    const handlechange=(e)=>{
        setnames({...names,[e.target.name]:e.target.value})
    }
    const Handleclick=()=>{
        history.push("/")
        props.newcontact(names)


    }
    return ( <center>
        <div style={{width:"40vw"}}>
           
            <h3  style={{color:"gold",backgroundColor:"lightgreen"}}> New Contact</h3>
            <div  style={{color:"greenyellow",backgroundColor:"lightslategrey"}}><br/>
            <label>Name</label>
            <input type="text" value={name1} name="name1" onChange={(e)=>handlechange(e)} placeholder="Enter Name Here"/><br/><br/>
            <label>Email</label>
            <input type="text" value={email} name="email" onChange={(e)=>handlechange(e)} placeholder="Enter Email Here"/><br/><br/>
            <Button onClick={()=>Handleclick()} >Add New</Button>
            </div>
          
        </div>  </center>
    )
}

export default Addcontact
