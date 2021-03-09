import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Comments from './Comments'

const ThoughtView = props => {

const [thought, setThought] = useState(props.thought)

console.log('thoughttttttt', thought)

const getTheThought = () => {
    const id = props.match.params.id
    axios
    .get(`/api/thought/${id}`)
    .then(res => {
        setThought(res.data)
    })
}

// ON THE TOILETVIEW THE COMMENTS SHOW UP IN WHOLE. NOT JUST ID
// TAKES 3 RENDERS THOUGH OTHERWISE UNDEFINED
// need to get all comments and pass commentS to <Comments/>. see toiletview.js in wc

useEffect(() => {
    getTheThought()
    console.log('the thouhts comments', thought.comments)
})
    return (
        <div>
            
           <h1>hey im the thoughtview</h1>
           <h2>{thought.thought}</h2>
           <h3>{thought._id}</h3>
           {/* put comments file here */}
           <Comments thought={thought} 
        //    getTheThought={getTheThought} 
           user={props.user} allThoughts={props.allThoughts} setAllThoughts={props.setAllThoughts}/>
            {/* something to oversee addcomment and comment list */}
        </div>
    )
}

export default ThoughtView