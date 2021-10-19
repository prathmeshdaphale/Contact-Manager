import {useState,useEffect} from 'react'
import Header from './Component/Header'
import Addcontact from './Component/Addcontact'
import COntact from './Component/Contact'
import api from "./api/contact"
import {uuid} from 'uuidv4'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Details from './Component/Details'
import Edit from "./Component/Edit"


function App() {
  // const LOCAL_STORAGE_KEY="contacts "
  const[contacts,setContacts]=useState([])
  const[fcontacts,setfcontacts]=useState([])

  
  const newcontact=async (val)=>{
    const request={
      id:uuid(),
      ...val
    }
    const response=await api.post("http://localhost:3001/contacts",request)
    setContacts([...contacts,response.data])
  }
  const retrivecontacts=async()=>{
    const response=await api.get("http://localhost:3001/contacts");
    return response.data  
  }
 const deletehandler=async(id)=>{
   await api.delete(`http://localhost:3001/contacts/${id}`)
   const newcontact=contacts.filter(item=>{
     return item.id!==id
   })
   setContacts(newcontact)
 }
 const updatecontact=()=>{

 }
 const showdetails=(id)=>{
  const newcontact=contacts.filter(item=>{
    return item.id===id
  })
  setfcontacts(newcontact)
 }
  useEffect(()=>{
    // const retrivedata=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    // if(retrivedata) setContacts(retrivedata)
    const getallcontacts=async ()=>{
      const allcontacts = await  retrivecontacts();
      if(allcontacts) setContacts(allcontacts)
    }
    getallcontacts()
  },[])
  useEffect(()=>{
    // localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  },[contacts])
  return (
    <div className="App" style={{margin:"20px"}} >
      <Header/>

      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={()=><COntact showdet={showdetails} deletehandler={deletehandler} contacts={contacts}/>}></Route>
        <Route exact path="/addcontact" render={()=><Addcontact newcontact={newcontact}/>}></Route>
        <Route exact path="/details/:id" render={()=><Details fcontacts={fcontacts} />}></Route>
        <Route exact path="/edit/:id" render={()=><Edit fcontacts={fcontacts} updatecontact={updatecontact} />}></Route>

        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
