import React, {useState} from 'react'
import axios from 'axios'

const AddThought = props => {

    // wed night
    // const blankThought = {thought: '', numUpvotes: 0, upvotedBy: []}
    // const [thought, setThought] = useState(blankThought)

    const handleInputChange = e => {
        const {name, value} = e.target;

        setThought({...thought, [name]: value})
        props.setAllThoughts({...props.allThoughts, thought})
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!thought) return
        setThought(blankThought)
        console.log(thought)

       
       axios
       .post('/api/thought', {
      // why wouldnt this destructure
           thought: thought.thought,
           numUpvotes: thought.numUpvotes,
           upvotedBy: thought.upvotedBy, 
           user: props.user
       })
       .then(data => {
           console.log("----SUBMITTED----: ", data.data)
       })
       .catch( err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <textarea 
            type="text" 
            name="thought" 
            value={thought.thought} 
            placeholder='add a thought'
            onChange={handleInputChange}/>
           
            <button>Think!</button>
            </form>
        </div>
    )
}

export default AddThought



// this is good leave it alonee

// warning

// do not touch

// leave me alone

// this space intentionally left blank