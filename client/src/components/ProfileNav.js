import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'
import feedIcon from '../images/following.png'
import {logout} from '../services/auth'
import logoutIcon from '../images/logout.png'

const ProfileNav = ({username, clearUser, isSameUser}) => {

    const handleLogout = () => {
        logout();
        clearUser(null)
    }


return (
    <div className="nav-container">
        <Link to='/feed'>
            <img className="feed-icon" src={feedIcon} alt="feed icon"/>
        </Link>
        {isSameUser? 
       <Link to="/" onClick={handleLogout}>
           <img src={logoutIcon} alt="logout icon" className="logout"/>
       </Link> :  
       <Link to={`/user/${username}`} className="welcome">Welcome, {username[0].toUpperCase() + username.slice(1)}</Link>
        }

    </div>
)
}

export default ProfileNav