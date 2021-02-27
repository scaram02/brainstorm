import React from 'react'
import { signup } from "../services/auth";
import Auth from './forms/Auth'

const Signup = (props) => {
    

const authFunction = signup
const buttonText = "Sign up"

    return (
        <div>
        <h1>sign up</h1>
         <Auth authFunction={authFunction} setCurrentUser={props.setCurrentUser} history={props.history} buttonText={buttonText}/>
        </div>
    )
}

export default Signup