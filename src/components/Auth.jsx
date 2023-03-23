import React from 'react';
import "./Auth.css"
 import {createUserWithEmailAndPassword,signInWithPopup,onAuthStateChanged}from "firebase/auth"

import {auth,googleProvider} from "../config/Firbase"
function Auth(props) {
    async function handleGoogle(){
        await signInWithPopup(auth,googleProvider)
    }
    return (
        <div className='container'>
            <div className="header">
                🔥🗯
            </div>
            <div className="medal">
            <button onClick={handleGoogle}>sign in with google</button>
            </div>
        </div>
    );
}

export default Auth;