import React from 'react'
import Auth from './forms/Auth'
import { login } from "../services/auth";

const Login = (props) => {

const authFunction = login

return (
 <div>
 <h1>hey login page</h1>
<Auth authFunction={authFunction} setCurrentUser={props.setCurrentUser} history={props.history} />
</div>
    )
}

export default Login