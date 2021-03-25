import React, {useState} from 'react'
import axios from 'axios'
import ThoughtForm from '../forms/ThoughtForm'


const AddThought = props => {

    const blankThought = {thought: '', numUpvotes: 0, upvotedBy: [], comments: []}
    const [thought, setThought] = useState(blankThought)
   
    const handleSubmit = e => {
        e.preventDefault()
        if (!thought.thought) return
        setThought(blankThought)

       axios
       .post('/api/thought', {
      // why wouldnt this destructure
           thought: thought.thought,
           numUpvotes: thought.numUpvotes,
           upvotedBy: thought.upvotedBy, 
           comments: thought.comments,
           user: props.user
       })
       .then(data => {
           console.log("----SUBMITTED----: ", data.data)
       })
       .catch( err => console.log(err))
    }

    const submitButton = "Submittt"

    return (
        <div className='renameMe'>
            <ThoughtForm setAllThoughts={props.setAllThoughts} thought={thought} setThought={setThought} handleSubmit={handleSubmit} submitButton={submitButton}/>
        </div>
    )
}

export default AddThought
