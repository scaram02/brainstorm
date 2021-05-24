import React from 'react'
import { signup } from "../services/auth";
import { Link } from "react-router-dom";
import Auth from './forms/Auth'
import '../stylesheets/auth.css'

const Signup = (props) => {
    

const authFunction = signup
const buttonText = "Sign up"

    return (
        <div className="auth-container">
        {/* <h1>{buttonText}</h1> */}

         <Auth 
         authFunction={authFunction} 
         setCurrentUser={props.setCurrentUser} 
         history={props.history} 
         buttonText={buttonText}
         />
         <Link to="/login">or log in instead</Link>
        </div>
    )
}

export default Signup