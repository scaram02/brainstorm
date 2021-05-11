import React, {useState} from 'react'
import axios from 'axios'
import blackTrash from '../../images/trash-black.png'
import redTrash from '../../images/trash-red.png'

const DeleteThought = props => {

const [isHovered, setIsHovered] = useState(false)

const setTrashColor = () => {
    setIsHovered(!isHovered)
}



const deleteThought = () => {

    const thoughtId = props.thought._id
    axios
    .delete(`api/thought/${thoughtId}`)
    .then(() => {
        console.log("deleted: ", thoughtId)
    })
    .catch(err => console.log(err))
}



const isSameUser = props.user.username === props.thought.user.username


    return (
        <div>
           {isSameUser && 
           <img src={isHovered? redTrash : blackTrash} 
           alt="delete button" 
           onMouseOver={setTrashColor} 
           onMouseOut={setTrashColor} 
           onClick={deleteThought}
           className="action-button"/>
}
        </div>
    )
}

export default DeleteThought