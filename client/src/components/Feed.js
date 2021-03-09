import React, {useState} from 'react'
import AddThought from "./forms/AddThought"
import ThoughtList from './ThoughtList'
import '../stylesheets/feed.css'


const Feed = props => {


    return (
        <div className='feed-container'>
            <h1>welcome, {props.user.username}</h1>
            <AddThought 
                  setAllThoughts={props.setAllThoughts} />
            <ThoughtList setAllThoughts={props.setAllThoughts} allThoughts={props.allThoughts} user={props.user}
                  />
                  
        </div>
    )
}

export default Feed