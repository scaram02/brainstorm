import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AddThought from "./actions/AddThought"
import ThoughtList from './ThoughtList'
import FollowedFeed from './FollowedFeed'
import '../stylesheets/feed.css'



const Feed = props => {


    return (
        <div className='feed-container'>
             <Link to='/feed'>home</Link>
            <h1>welcome, {props.user.username}</h1>
            <AddThought 
                  setAllThoughts={props.setAllThoughts} />
            <ThoughtList 
            setAllThoughts={props.setAllThoughts} allThoughts={props.allThoughts} user={props.user}
                  />
            <FollowedFeed/>
                  
        </div>
    )
}

export default Feed