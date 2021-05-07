import React from 'react'
import { Link } from 'react-router-dom'

const FeedNav = ({username, loadFeed, feedToggle}) => {



return (
    <div>
        {/* <Link to='/feed'>home</Link> */}
        
        <p onClick={loadFeed}>{feedToggle}</p>
        <Link to={`/user/${username}`}>Welcome, {username}</Link>

    </div>
)
}

export default FeedNav