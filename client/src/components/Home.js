import React from 'react'
import { Link } from "react-router-dom";
import Loading from './Loading'


const Home = () => {
    return (
        <div>
             <h1>home</h1>
             <Link to='/login'>Log in</Link>
                <br/>
                <Link to='/signup'>Sign up</Link>
                <Loading></Loading>
        </div>
    )
}

export default Home