import React, {useState} from 'react'
import axios from 'axios'
// import DeleteButton from './DeleteButton'
import redTrash from '../images/trash-red.png'
import blackTrash from '../images/trash-black.png'




const CommentList = props => {

    const [isHovered, setIsHovered] = useState(false)

    const setTrashColor = () => {
        setIsHovered(!isHovered)
    }

    const deleteComment = commentId => {
        axios.put(`/api/comments/${props.thought._id}`, {commentId: commentId})
        .then(() => {
            props.getTheThought()
            setTrashColor()
        })
    }

  

    const commentList = (
        <>
        {props.thought.comments && props.thought.comments.map((c) => {
              const sameUserMadeComment = props.user.username == c.user.username
            return (
                <div key={c._id} className="comment">
                    <div className="comment-by">
                    <h3>{sameUserMadeComment? "You" : c.user.username} commented:</h3>

                    {sameUserMadeComment && 
                    <img src={isHovered? redTrash: blackTrash} onMouseOver={setTrashColor} 
                    onMouseOut={setTrashColor} 
                    onClick={()=> deleteComment(c._id)}
                    className="trashio"/>}
                    </div>
                    <h2>{c.comment}</h2>

                </div>
            )
        })}
        </>
    )

    return props.thought? <div>{commentList}</div> : <div>No commments yet</div>
}

export default CommentList