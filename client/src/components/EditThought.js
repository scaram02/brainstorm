import React, {useState, useEffect} from 'react'
import ThoughtForm from './forms/ThoughtForm'
import axios from 'axios'
import Nav from './ProfileNav'
import '../stylesheets/thought-view.css'

const EditThought = props => {

const [thought, setThought] = useState(props.thought)


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

const handleSubmit = e => {
    e.preventDefault()
    console.log("hey it's the thought: ", thought.thought)
    axios
    .put(`/api/thought/edit/${thought._id}`, {
        thought: thought.thought,
    })
   .then(props.setAllThoughts()) 
   .then(props.history.push('/feed'))
   .catch((err) => console.loc(err))
}

const submitButton = "Edit thought!"

return (
    <div className="thought-view-container">
<Nav username={props.username}/>
<ThoughtForm setAllThoughts={props.setAllThoughts} thought={thought} setThought={setThought} handleSubmit={handleSubmit} submitButton={submitButton}/>
    </div>
)
}

export default EditThought