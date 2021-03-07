import React, {useState} from 'react'
import axios from 'axios'
import CommentForm from './CommentForm'


const AddComment = props => {

const blankComment = {comment: ''}
const [comment, setComment] = useState(blankComment)

const handleSubmit = e => {
    e.preventDefault()
    if (!comment.comment) return
    setComment(blankComment)

    axios
    .post('/api/comment', {
        comment: comment.comment,
        user: props.user
    })
    .then(theComment => {
        console.log('this comment was made', theComment.comment)
    })
    .catch(err => console.log(err))
}



    return (
        <div>
           <CommentForm user={props.user} setAllComments={props.setAllComments} comment={comment} setComment={setComment} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default AddComment