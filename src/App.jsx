import { useState } from 'react'
import {onAuthStateChanged}from "firebase/auth"
import {auth,googleProvider} from "./config/Firbase"

import './App.css'
import Auth from './components/Auth'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)
  const[user,setUser]=useState(null)
  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
})
console.log(auth?.currentUser?.email)
console.log(auth?.currentUser?.displayName)
console.log(user)
  return (
    <div className="App">

      {
        user!=null && <Chat/>
      }
      {
        user==null &&  <Auth/>
      }
    
     {/*  */}
    </div>
  )
}

export default App
