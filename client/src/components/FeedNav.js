import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/nav.css'
import following from '../images/following.png'
import explore from '../images/explore.png'

const FeedNav = ({username, loadFeed, clicked}) => {

const icon = clicked? following : explore
const alt = clicked? "following icon" : 'explore icon'
// const text = clicked? "Followed Thoughts" : "Explore"

return (
    <div className="nav-container">
      
        <img className="feed-icon" src={icon} alt={alt} onClick={loadFeed}/>
        {/* <p>{text}</p> */}
        <Link to={`/user/${username}`} className="welcome">Welcome, {username[0].toUpperCase() + username.slice(1)}</Link>

    </div>
)
}

export default FeedNav