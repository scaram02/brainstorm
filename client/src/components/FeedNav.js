import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'
import following from '../images/following.png'
import explore from '../images/explore.png'

const FeedNav = ({username, loadFeed, clicked}) => {

const icon = clicked? following : explore
const alt = clicked? "following icon" : 'explore icon'

return (
    <div className="nav-container">
        {/* <Link to='/feed'>home</Link> */}
        
        {/* <p onClick={loadFeed}>{feedToggle}</p> */}
        <img className="feed-icon" src={icon} alt={alt} onClick={loadFeed}/>
        <Link to={`/user/${username}`} className="welcome">Welcome, {username}</Link>

    </div>
)
}

export default FeedNav