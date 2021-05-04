import React, {useState} from 'react'
import axios from 'axios'
import ThoughtForm from '../forms/ThoughtForm'


const AddThought = props => {

    const blankThought = {thought: '', likes: [], comments: []}
    const [thought, setThought] = useState(blankThought)
   
    const handleSubmit = e => {
        e.preventDefault()
        if (!thought.thought) return
        setThought(blankThought)

       axios
       .post('/api/thought', {
           thought: thought.thought,
           comments: thought.comments,
           likes: thought.likes,
           user: props.user
       })
       .then(data => {
           props.setAllThoughts(...props.allThoughts, data.data)
       })
       .catch( err => console.log(err))
    }

    const submitButton = "Add thought!"

    return (
        <div className='renameMe'>
            <ThoughtForm setAllThoughts={props.setAllThoughts} thought={thought} setThought={setThought} handleSubmit={handleSubmit} submitButton={submitButton}/>
        </div>
    )
}

export default AddThought
