import React, {useState} from 'react'
import axios from 'axios'
import CommentForm from '../forms/CommentForm'


const AddComment = props => {

const blankComment = {comment: ''}
const [comment, setComment] = useState(blankComment)

const handleSubmit = e => {
    e.preventDefault()
    if (!comment.comment) return
    setComment(blankComment)

    axios
    .post(`/api/comments/${props.thought._id}`, {
        comment: comment.comment,
        user: props.user
    })
    .then(setComment(blankComment))
    //  need to getTheThought, getLlathoughts
    .catch(err => console.log(err))
}


    return (
        <div>
           <CommentForm user={props.user} allComments={props.allComments} setAllComments={props.setAllComments} comment={comment} setComment={setComment} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default AddComment