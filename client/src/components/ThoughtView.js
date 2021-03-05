import React, {useEffect, useState} from 'react'
import axios from 'axios'

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
}, [])
    return (
        <div>
           <h1>hey im the thoughtview</h1>
           <h2>{thought.thought}</h2>
           <h3>{thought._id}</h3>
        </div>
    )
}

export default ThoughtView