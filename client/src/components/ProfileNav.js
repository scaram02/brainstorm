import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNav = ({username}) => {



return (
    <div>
        {/* <Link to='/feed'>home</Link> */}
        
        <Link to='/feed'>Feed</Link>
        <h1>Welcome, {username}</h1>

    </div>
)
}

export default ProfileNav