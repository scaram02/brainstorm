import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'

const FeedNav = ({username, loadFeed, feedToggle}) => {



return (
    <div className="nav-container">
        {/* <Link to='/feed'>home</Link> */}
        
        <p onClick={loadFeed}>{feedToggle}</p>
        <Link to={`/user/${username}`} className="welcome">Welcome, {username}</Link>

    </div>
)
}

export default FeedNav