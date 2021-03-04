import React, {useState, useEffect} from 'react'
import ThoughtForm from './forms/ThoughtForm'
import axios from 'axios'

const EditThought = props => {

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

const handleSubmit = e => {
    e.preventDefault()
    console.log("hey it's the thought: ", thought.thought)
    axios
    .put(`/api/thought/edit/${thought._id}`, {
        thought: thought.thought,
        numUpvotes: thought.numUpvotes,
        upvotedBy: thought.upvotedBy,
        user: props.user
    })
    // .then((res) => console.log(res.status)) // 200? mmm
   .then(props.history.push('/feed'))
   .catch((err) => console.loc(err))
}

const submitButton = "edit"

return (
    <div>
        <h1>hi edit me</h1>
<ThoughtForm setAllThoughts={props.setAllThoughts} thought={thought} setThought={setThought} handleSubmit={handleSubmit} submitButton={submitButton}/>
    </div>
)
}

export default EditThought