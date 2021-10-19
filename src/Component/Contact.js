import React from 'react'
import {useHistory,Link} from 'react-router-dom'
import { Button, Card, Navbar,Container } from 'react-bootstrap'



const ContactList=(props)=> {

    let history=useHistory()
    const handleclick=()=>{
        history.push('/addcontact')
    }

    return(
        <div>
            <center>
    
         
         <div>
         <Navbar style={{color:"violet",backgroundColor:"lightgreen"}}>
                    <Container >
                        <Navbar.Brand href="#home">Contact List</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                           
                                <Navbar.Text><Button variant="success" onClick={()=>handleclick()}>Add New Contact</Button> </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
        <div ><h3 style={{color:"blue",backgroundColor:"lightcoral",padding:"10px"}} >Contacts</h3></div>

        <div>
       { props.contacts.map((item,index)=>(
           <div>
           <Card style={{ width: '18rem',backgroundColor:"lightpink",padding:"5px",margin:"10px" }}>
           
           <Card.Body style={{ width: '18rem',backgroundColor:"lightgoldenrodyellow",color:"darkgoldenrod" }} >
             <Card.Title>Contact={index+1}</Card.Title>
             <Card.Text>Name={item.name1}</Card.Text>
             <Card.Text>Email={item.email}</Card.Text>

             <Link to={`/details/${item.id}`}><Button onClick={()=>props.showdet(item.id)}> Details</Button></Link>
             <Link to={`/edit/${item.id}`}><Button variant="secondary"> Edit</Button></Link>

             <Button  onClick={()=>props.deletehandler(item.id)} variant="danger">Delete</Button>
           </Card.Body>
         </Card>
         </div>
    )
    )}
     <br/> <br/>
    </div>
   
         <br/>
        
        </center>
        </div>
    )
}

export default ContactList
