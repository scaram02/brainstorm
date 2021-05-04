import React from 'react'
import axios from 'axios'

const DeleteThought = props => {

    const deleteThought = () => {
    const thoughtId = props.thought._id
    axios
    .delete(`api/thought/${thoughtId}`)
    .then(() => {
        console.log("deleted: ", thoughtId)
    })
    .catch(err => console.log(err))
    }

const deleteButton = (props.user.username === props.thought.user.username) && <button className="button" onClick={deleteThought}>Delete this thought</button>

    return (
        <div>
           {deleteButton}
        </div>
    )
}

export default DeleteThought