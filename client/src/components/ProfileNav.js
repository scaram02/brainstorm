import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'
import feedIcon from '../images/following.png'

const ProfileNav = ({username}) => {



return (
    <div className="nav-container">
        {/* <Link to='/feed'>home</Link> */}
        
        <Link to='/feed'>
            <img className="feed-icon" src={feedIcon} alt="feed icon"/>
        </Link>
        <Link to={`/user/${username}`} className="welcome">Welcome, {username}</Link>

    </div>
)
}

export default ProfileNav