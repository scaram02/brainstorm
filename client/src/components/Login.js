import React from 'react'
import Auth from './forms/Auth'
import { login } from "../services/auth";
import { Link } from "react-router-dom";
import '../stylesheets/auth.css'

const Login = (props) => {

const authFunction = login
const buttonText = "Log in"

return (
 <div className="auth-container">
 {/* <h1>{buttonText}</h1> */}
<Auth authFunction={authFunction} setCurrentUser={props.setCurrentUser} history={props.history} buttonText={buttonText} />
<Link to="signup">or sign up instead</Link>
</div>
    )
}

export default Login