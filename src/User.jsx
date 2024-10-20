import { useEffect, useState } from "react"
import User from "./Use";

export default function Users(){
    const [users,setUsers]= useState([]);
    
    useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/users')
.then(res=> res.json())
.then(data=>setUsers(data))
    },[])
    return(
   <div>
     <h3>Users: {users.length}</h3>
     {
        users.map(userX=><User user={userX}></User>)
     }
   </div>



    )
}
/*
1. declare a state to hold the data
2. useEffect with call back and dependency arrar
3. fetch data
4. Load data to state
5. Display data on the component
*/