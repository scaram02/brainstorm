import React, {useState} from 'react'
import AddThought from "./forms/AddThought"
import ThoughtList from './ThoughtList'


const Feed = props => {


    return (
        <div>
            <h1>welcome, {props.user.username}</h1>
            <AddThought 
                  setAllThoughts={props.setAllThoughts} />
            <ThoughtList setAllThoughts={props.setAllThoughts} allThoughts={props.allThoughts} user={props.user}
                  />
                  
        </div>
    )
}

export default Feed