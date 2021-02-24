import React, {useState} from 'react'
import { signup } from "../services/auth";
import Auth from './forms/Auth'

const Signup = (props) => {
    

const authFunction = signup

    return (
        <div>
         <Auth authFunction={authFunction} setCurrentUser={props.setCurrentUser} history={props.history}/>
        </div>
    )
}

export default Signup