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


useEffect(() => {
    getTheThought()
})
    return (
        <div>
           <h1>{thought.thought}</h1>
           <Comments thought={thought} 
           getTheThought={getTheThought} 
           user={props.user} thought={thought} 
           allThoughts={props.allThoughts} 
           setAllThoughts={props.setAllThoughts}/>
        </div>
    )
}

export default ThoughtView