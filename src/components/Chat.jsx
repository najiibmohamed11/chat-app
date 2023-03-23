import React, { useState,useEffect } from 'react';
import "./Chat.css"
import {signInWithPopup,signOut}from "firebase/auth"
import {auth,googleProvider,db} from "../config/Firbase"
import {collection,getDocs,addDoc,doc} from "firebase/firestore"
function Chat(props) {
    const [myChart,setMyChat]=useState([])
    const[users,setUsers]=useState([])

    
    const[newchat,setChat]=useState()
    const[newurl,setUrl]=useState(auth?.currentUser?.photoURL)
    const usersCollectionRef = collection(db, "user");
    async   function createUser(){
        await addDoc(usersCollectionRef,{chat:newchat, url: newurl})
    
      }



    function handleSubmit(e){
        e.preventDefault();
        const formData= new FormData(e.currentTarget);
        setMyChat((mesige)=>[...myChart,formData.get("send")])
        setChat(formData.get("send"))
        e.currentTarget.reset();
        createUser()
    }
    console.log(auth?.currentUser?.photoURL)

    async function signout(){
        await signOut(auth)
    }

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
    
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
           });


  



    return (
      
    <div className='container'>
         <div className="header">
            
             {auth?.currentUser?.displayName.split(" ")[0]}
             <button className='sign-out' onClick={signout}>sign out</button>
         </div>
        <div className="body">
        { users.map((user)=>{
            
              if(  user.url!==auth?.currentUser?.photoURL ){
                return(
                    <div className="sngle-chat">
                        <img src={`${user.url}`}/>
                        <p className='other'>{user.chat}</p>
                    </div>
                        
                    )

              }
           
    
         })
            }

            {
                users.map((user)=>{
                    if( user.url==auth?.currentUser?.photoURL){
                        return(
                            <div className="my-chat">
                    <p className='my-p'>{user.chat}</p>
                    <img src={`${user.url}`}/>
                </div>

                            
                        )
                    }
                })
            }
          
        
         </div>
       
            <form className= 'footer'onSubmit={handleSubmit} >
            <input name='send' type="text"  placeholder="say som thing" onChange={(e)=>setChat(e.target.value)} required/>
            <button type='submit' >click</button>
            </form>
         

       
     </div>
    );
}

export default Chat;