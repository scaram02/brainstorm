import React from 'react'
import { Link } from 'react-router-dom'

const FeedNav = ({username, loadFeed, feedToggle}) => {



return (
    <div>
        {/* <Link to='/feed'>home</Link> */}
        
        <p onClick={loadFeed}>{feedToggle}</p>
        <h1>Welcome, {username}</h1>

    </div>
)
}

export default FeedNav