import React, {useState, useEffect} from 'react'
import AddThought from "./forms/AddThought"
import ThoughtList from './ThoughtList'
import ToFollow from './ToFollow'

import '../stylesheets/feed.css'
import axios from 'axios'


const Feed = props => {


    return (
        <div className='feed-container'>
            <h1>welcome, {props.user.username}</h1>
            <ToFollow/>
            <AddThought 
                  setAllThoughts={props.setAllThoughts} />
            <ThoughtList 
            setAllThoughts={props.setAllThoughts} allThoughts={props.allThoughts} user={props.user}
                  />
                  
        </div>
    )
}

export default Feed