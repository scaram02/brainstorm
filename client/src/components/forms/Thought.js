import React, {useState} from 'react'
import axios from 'axios'

const Thought = props => {

    const blankThought = {thought: '', numUpvotes: 0}
    const [thought, setThought] = useState(blankThought)

    const handleInputChange = e => {
        const {name, value} = e.target;

        setThought({...thought, [name]: value})
        
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!thought) return
        setThought(blankThought)
        console.log(thought)

       axios
       .post(`/api/thought`, {
           thought, 
           user: props.user
       })
       .then(data => {
           console.log(data)
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

export default Thought
