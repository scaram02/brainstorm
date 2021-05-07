import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'

const ProfileNav = ({username}) => {



return (
    <div className="nav-container">
        {/* <Link to='/feed'>home</Link> */}
        
        <Link to='/feed'>Feed</Link>
        <Link to={`/user/${username}`} className="welcome">Welcome, {username}</Link>

    </div>
)
}

export default ProfileNav