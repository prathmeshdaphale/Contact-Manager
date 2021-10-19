import React from 'react'
import { Button, Card, Navbar,Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function Details(props) {
    let history = useHistory()
    const handleclick = () => {
        history.push('/')
    }

    return (
        <div>
            <center>
                <div><h3  style={{color:"gold",backgroundColor:"lightgreen"}}>Contact</h3></div>
                <Navbar  style={{color:"violet",backgroundColor:"lightgray"}}>
                    <Container >
                        <Navbar.Brand href="#home">Details</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {props.fcontacts.map(item=>(
                                <Navbar.Text>
                                Signed in as: <a href="#login">{item.name1}</a>
                            </Navbar.Text>

                            ))}
                            
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <br/>
                <br/>

                <div>
                    {props.fcontacts.map((item, index) => (
                        <div>
                            <Card style={{ width: '18rem',backgroundColor:"lightsalmon",color:"blueviolet",weight:"500",fontSize:"18px" }}>

                                <Card.Body>
                            

                                    <Card.Text>Name={item.name1}</Card.Text>
                                    <Card.Text>Email={item.email}</Card.Text>
                                    <Button onClick={() => handleclick()} variant="success">Back To List</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    )
                    )}
                </div>
                <br />
                <br />
            </center>
        </div>
    )
}

export default Details
