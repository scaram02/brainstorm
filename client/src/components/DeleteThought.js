import React from 'react'
import axios from 'axios'

const DeleteThought = props => {

    const deleteThought = () => {
    console.log(props.thought._id)
    const thoughtId = props.thought._id
    axios
    .delete(`api/thought/${thoughtId}`)
    .then(() => {
        console.log("deleted: ", thoughtId)
    })
    .catch(err => console.log(err))
    }

    return (
        <div>
           <button onClick={deleteThought}>Delete this thought</button>
        </div>
    )
}

export default DeleteThought